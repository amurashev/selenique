import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";

import Layout from "@/components/layout";

import GuidePage from "@/components/pages/guide-page";

import { GUIDES } from "@/constants/guides";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const data = GUIDES[slug || "null"];

  const title = data.name;
  const description = "";

  return {
    title,
    description,
    openGraph: {
      images: [`https://www.selenique.space${data.images[0]}`],
      title: title,
      description,
      url: `https://www.selenique.space/en/guides/${slug}`,
      type: "website",
    },
  };
}

export default async function PromptbookPageEntry({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = GUIDES[slug || "null"];

  if (!data) {
    return redirect("/en/guides");
  }

  return (
    <Layout locale="en">
      <GuidePage
        data={{
          ...data,
          slug,
        }}
      />
    </Layout>
  );
}
