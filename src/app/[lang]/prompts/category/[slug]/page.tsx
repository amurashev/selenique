import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";

import Layout from "@/components/layout";

import PromptsCategoryPage from "@/components/pages/promptbook-category";

import {
  promptbooksOrdered,
  promptbooksBundlesOrdered,
} from "@/constants/promptbooks";

import { PROMTBOOKS } from "@/constants/promptbooks";
import { PromptBook, PromptCategories } from "@/components/types";
import { i18n, Locale } from "../../../../../../i18n-config";
import { PROMPT_CATEGORIES } from "@/constants/prompts";
import { promptBookListPageRoute } from "@/constants/routes";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lang: Locale }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // const data = PROMTBOOKS[slug || "null"];

  const title = `Prompts`;
  // const description = data.summary;
  const keywords =
    "prompts, ai prompts, prompt pack, prompt collection, nano banana prompts, gemini prompts, dall-e prompts, midjourney prompts, stable diffusion prompts, flux prompts, chatgpt prompts, kling ai prompts, image prompts, design prompts, marketing prompts, business prompts, photography prompts";

  return {
    title,
    // description,
    // keywords,
    openGraph: {
      // images: [
      //   `https://www.selenique.space/promptbooks/${data.id}/${data.images[0]}.jpg`,
      // ],
      title: title,
      // description,
      // url: `https://www.selenique.space/prompt-books/${slug}`,
      type: "website",
    },
  };
}

export default async function PromptsCategoryPageEntry({
  params,
}: {
  params: Promise<{ slug: PromptCategories; lang: Locale }>;
}) {
  const { slug, lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  const data = PROMTBOOKS[slug || "null"];

  if (!PROMPT_CATEGORIES.includes(slug)) {
    return redirect(promptBookListPageRoute.getUrl(lang));
  }

  const promptsWithTag = promptbooksOrdered.filter(item => {
    const promptData = PROMTBOOKS[item];

    return promptData.tags.includes(slug)
  })


  return (
    <Layout locale={finalLang}>
      <PromptsCategoryPage
        slug={slug}
        prompts={promptsWithTag}
      />
    </Layout>
  );
}
