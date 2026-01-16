import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";

import Layout from "@/components/layout";

import PromptbookPage from "@/components/pages/promptbook";

import { PROMTBOOKS } from "@/constants/promptbooks";
import { PromptBook } from "@/components/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;

  const data = PROMTBOOKS[slug || "null"];

  const title = data.name;
  const description = "";

  return {
    title,
    description,
    openGraph: {
      images: [`https://www.selenique.space${data.images[0]}`],
      title: title,
      description,
      url: `https://www.selenique.space/en/prompt-books/${slug}`,
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
    return redirect("/en/prompt-books");
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
