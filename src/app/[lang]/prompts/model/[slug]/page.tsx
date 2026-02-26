import { redirect } from "next/navigation";
import type { Metadata } from "next";

import Layout from "@/components/layout";

import PromptsModelPage from "@/components/pages/_lists/promptbook-model";

import { PromptModels } from "@/components/types";
import { i18n, Locale } from "../../../../../../i18n-config";
import { PROMPT_MODELS } from "@/content/promptbooks/categories";
import {
  promptsModelPageRoute,
  promptBookListPageRoute,
} from "@/constants/routes";

import { getDictionary } from "@/l18n/dictionaries";
import {
  getPromptModelKeywords,
  getPromptModelTitle,
  getPromptModelDescription,
} from "@/content/promptbooks/categories";
import {
  getPromptBookData,
  getPromptBooksList,
  sortByPoints,
} from "@/content/promptbooks/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: PromptModels; lang: Locale }>;
}): Promise<Metadata> {
  const { slug, lang } = await params;

  const messages = (await getDictionary(lang)) as Record<string, string>;

  const title = messages[getPromptModelTitle(slug)];
  const description = messages[getPromptModelDescription(slug)];
  const keywords = messages[getPromptModelKeywords(slug)];
  const url = promptsModelPageRoute.getUrl(lang, {
    params: {
      slug,
    },
  });

  return {
    title,
    description,
    keywords,
    openGraph: {
      images: [`https://www.selenique.space/promptbooks/promptbooks.jpg`],
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

  const promptBooks = getPromptBooksList()
    .map((item) => getPromptBookData(item))
    .filter((item) => item.type === "pack");

  promptBooks.sort(sortByPoints);

  return (
    <Layout locale={finalLang}>
      <PromptsModelPage slug={slug} promptBooks={promptBooks} />
    </Layout>
  );
}
