import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";

import Layout from "@/components/layout";

import PromptbookPage from "@/components/pages/promptbook-page";

import { PROMTBOOKS } from "@/constants/promptbooks";
import { PromptBook } from "@/components/types";
import { i18n, Locale } from "../../../../../i18n-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lang: Locale }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const data = PROMTBOOKS[slug || "null"];

  const title = `${data.name} | Gemini Prompts`;
  const description = data.summary;
  const keywords =
    "prompts, ai prompts, prompt pack, prompt collection, nano banana prompts, gemini prompts, dall-e prompts, midjourney prompts, stable diffusion prompts, flux prompts, chatgpt prompts, kling ai prompts, image prompts, design prompts, marketing prompts, business prompts, photography prompts";

  return {
    title,
    description,
    keywords,
    openGraph: {
      images: [
        `https://www.selenique.space/promptbooks/${data.id}/${data.images[0]}.jpg`,
      ],
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
  params: Promise<{ slug: string; lang: Locale }>;
}) {
  const { slug, lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  const data = PROMTBOOKS[slug || "null"];

  if (!data) {
    return redirect("/prompt-books");
  }

  return (
    <Layout locale={finalLang}>
      <PromptbookPage
        data={{
          ...data,
          slug,
        }}
      />
    </Layout>
  );
}
