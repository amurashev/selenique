import { redirect } from "next/navigation";
import type { Metadata } from "next";

import Layout from "@/components/layout";

import VirtualInfluencePage from "@/components/pages/virtual-influence";
import AIFashionGuidePage from "@/components/pages/ai-for-fashion-brands";
import { i18n, Locale } from "../../../../../i18n-config";

import { GUIDES } from "@/constants/guides";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string, lang: Locale  }>;
}): Promise<Metadata> {
  const { slug, lang } = await params;

  const finalLang = lang || i18n.defaultLocale

  const data = GUIDES[slug];
  const guideData = data.locales[finalLang] || data.locales['en']

  const id = guideData.id
  const title = guideData.name
  const description = guideData.description

  return {
    title,
    description,
    openGraph: {
      images: [
        // TODO
        `https://www.selenique.space/promptbooks/${id}/1.jpg`,
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

  const data = GUIDES[slug];

  if (!data) {
    return redirect("/guides");
  }

  const guideData = data.locales[finalLang]

  if (!guideData) {
    return redirect("/guides");
  }

  return (
    <Layout locale={finalLang}>
      {slug === "virtual-influence-guide" && <VirtualInfluencePage />}
      {slug === "ai-for-fashion-brands" && <AIFashionGuidePage />}
    </Layout>
  );
}
