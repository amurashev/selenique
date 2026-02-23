import { redirect } from "next/navigation";
import type { Metadata } from "next";

import Layout from "@/components/layout";

import PromptsCategoryPage from "@/components/pages/_lists/promptbook-category";

import { PROMTBOOKS } from "@/content/promptbooks";
import { PromptCategories } from "@/components/types";
import { i18n, Locale } from "../../../../../../i18n-config";
import { PROMPT_CATEGORIES } from "@/content/promptbooks/categories";
import {
  promptsCategoryPageRoute,
  promptBookListPageRoute,
} from "@/constants/routes";

import { getDictionary } from "@/l18n/dictionaries";
import {
  getPromptCategoryKeywords,
  getPromptCategoryTitle,
  getPromptCategoryDescription,
} from "@/content/promptbooks/categories";
import {
  getPromptBookData,
  getPromptBooksList,
  sortByPoints,
} from "@/content/promptbooks/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: PromptCategories; lang: Locale }>;
}): Promise<Metadata> {
  const { slug, lang } = await params;

  const messages = (await getDictionary(lang)) as Record<string, string>;

  const title = messages[getPromptCategoryTitle(slug)];
  const description = messages[getPromptCategoryDescription(slug)];
  const keywords = messages[getPromptCategoryKeywords(slug)];
  const url = promptsCategoryPageRoute.getUrl(lang, {
    params: {
      slug,
    },
  });

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

export default async function PromptsCategoryPageEntry({
  params,
}: {
  params: Promise<{ slug: PromptCategories; lang: Locale }>;
}) {
  const { slug, lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  if (!PROMPT_CATEGORIES.includes(slug)) {
    return redirect(promptBookListPageRoute.getUrl(lang));
  }

  const promptsWithTag = getPromptBooksList()
    .filter((item) => {
      const promptData = PROMTBOOKS[item];
      return promptData.tags.includes(slug) && promptData.type === "pack";
    })
    .map((item) => getPromptBookData(item));

  promptsWithTag.sort(sortByPoints);

  return (
    <Layout locale={finalLang}>
      <PromptsCategoryPage slug={slug} promptBooks={promptsWithTag} />
    </Layout>
  );
}
