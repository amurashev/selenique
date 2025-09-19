import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Layout from "@/components/layout";

import PromptbookPage from "@/components/pages/promptbook";

import { PROMTBOOKS } from "@/constants/promptbooks";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const data = PROMTBOOKS[slug || "null"];

  let title = data.name;
  let description = "";

  return {
    title,
    description,
    openGraph: {
      images: [`https://www.selenique.space${data.images[0]}`],
      title: title,
      description,
      url: `https://www.selenique.space/prompt-books/${slug}`,
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

  const data = PROMTBOOKS[slug || "null"];

  if (!data) {
    return notFound();
  }

  return (
    <Layout locale="en">
      <PromptbookPage
        data={{
          ...data,
          slug,
        }}
      />
    </Layout>
  );
}
