import { redirect } from "next/navigation";
import type { Metadata } from "next";

import Layout from "@/components/layout";

import PromptsModelPage from "@/components/pages/promptbook-model";

import {
  promptbooksOrdered,
} from "@/constants/promptbooks";

import { PROMTBOOKS } from "@/constants/promptbooks";
import { PromptBook, PromptModels } from "@/components/types";
import { i18n, Locale } from "../../../../../../i18n-config";
import { PROMPT_MODELS } from "@/constants/prompts";
import {
  promptsModelPageRoute,
  promptBookListPageRoute
} from "@/constants/routes";

import { getDictionary } from "@/l18n/dictionaries";
import {
  getPromptModelKeywords,
  getPromptModelTitle,
  getPromptModelDescription,
} from "@/constants/prompts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: PromptModels; lang: Locale }>;
}): Promise<Metadata> {
  const { slug, lang } = await params;

  const messages = await getDictionary(lang) as Record<string, string>

  const title = messages[getPromptModelTitle(slug)]
  const description = messages[getPromptModelDescription(slug)]
  const keywords = messages[getPromptModelKeywords(slug)]
  const url = promptsModelPageRoute.getUrl(lang, {
    params: {
      slug
    }
  })

  return {
    title,
    description,
    keywords,
    openGraph: {
      // images: [
      //   `https://www.selenique.space/promptbooks/${data.id}/${data.images[0]}.jpg`,
      // ],
      title: title,
      description,
      url: `https://www.selenique.space${url}`,
      type: "website",
    },
  };
}

export default async function PromptsModelPageEntry({
  params,
}: {
  params: Promise<{ slug: PromptModels; lang: Locale }>;
}) {
  const { slug, lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  if (!PROMPT_MODELS.includes(slug)) {
    return redirect(promptBookListPageRoute.getUrl(lang));
  }

  // const promptsWithTag = promptbooksOrdered.filter(item => {
  //   const promptData = PROMTBOOKS[item];

  //   return promptData.tags.includes(slug)
  // })

  return (
    <Layout locale={finalLang}>
      <PromptsModelPage
        slug={slug}
        prompts={promptbooksOrdered}
      />
    </Layout>
  );
}
