import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";

import Layout from "@/components/layout";

import GuidePage from "@/components/pages/promptbook-page";
import { i18n, Locale } from "../../../../../i18n-config";

import { PROMTBOOKS } from "@/constants/promptbooks";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string, lang: Locale  }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const data = PROMTBOOKS[slug || "null"];

  const title = data.name;
  const description = data.summary;

  return {
    title,
    description,
    openGraph: {
      images: [
        `https://www.selenique.space/promptbooks/${data.id}/${data.images[0]}.jpg`,
      ],
      title: title,
      description,
      url: `https://www.selenique.space/guides/${slug}`,
      type: "website",
    },
  };
}

export default async function PromptbookPageEntry({
  params,
}: {
  params: Promise<{ slug: string, lang: Locale }>;
}) {
  const { slug, lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  const data = PROMTBOOKS[slug || "null"];

  if (!data) {
    return redirect("/guides");
  }

  const relatedIds = Object
    .keys(PROMTBOOKS)
    .filter(itemSlug => PROMTBOOKS[itemSlug].type === "guide" && slug !== itemSlug)

  const related = relatedIds.map(itemSlug => ({
    ...PROMTBOOKS[itemSlug],
    slug: itemSlug
  }))

  return (
    <Layout locale={finalLang}>
      <GuidePage
        data={{
          ...data,
          slug,
        }}
        related={related}
      />
    </Layout>
  );
}
