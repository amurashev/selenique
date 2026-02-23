import { Metadata } from "next";

import { i18n, Locale } from "../../../../i18n-config";
import Layout from "@/components/layout";
import { promptBookListPageRoute } from "@/constants/routes";

import PromptbookListPage from "@/components/pages/_lists/promptbook-list";
import { getDictionary } from "@/l18n/dictionaries";
import { PROMTBOOKS } from "@/content/promptbooks";
import { PromptBook } from "@/components/types";
import { getPromptBookData, sortByPoints } from "@/content/promptbooks/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const messages = (await getDictionary(lang)) as Record<string, string>;

  const title = messages["prompt_books.title"];
  const description = messages["prompt_books.description"];
  const keywords = messages["prompt_books.keywords"];
  const url = promptBookListPageRoute.getUrl(lang);

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

export default async function PromptbookPageEntry({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  const bestSellers: PromptBook[] = [];
  const promptsByCategories: Record<string, PromptBook[]> = {};

  Object.keys(PROMTBOOKS).forEach((slug) => {
    const packData = getPromptBookData(slug);
    const { mainCategory, type, isBestseller } = packData;

    if (mainCategory && type === "pack") {
      if (isBestseller || packData.reviewsCount) {
        bestSellers.push(packData);
      }

      if (!promptsByCategories[mainCategory]) {
        promptsByCategories[mainCategory] = [];
      }

      promptsByCategories[mainCategory].push(packData);
    }
  });

  bestSellers.sort(sortByPoints);

  Object.keys(promptsByCategories).map((category) => {
    const prompts = promptsByCategories[category];
    prompts.sort(sortByPoints);
  });

  return (
    <Layout locale={finalLang}>
      <PromptbookListPage
        bestSellers={bestSellers}
        promptsByCategories={promptsByCategories}
      />
    </Layout>
  );
}
