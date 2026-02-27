import { redirect } from "next/navigation";
import type { Metadata } from "next";

import Layout from "@/components/layout";
import PromptbookPage from "@/components/pages/promptbook-page";

import {
  promptBookListPageRoute,
  promptBookPageRoute,
} from "@/constants/routes";
import { PROMTBOOKS } from "@/content/promptbooks";

import { i18n, Locale } from "../../../../../i18n-config";
import { getDictionary } from "@/l18n/dictionaries";
import {
  getPromptBookData,
  getPromptBookId,
  sortByPoints,
} from "@/content/promptbooks/utils";
import { PromptBook } from "@/components/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lang: Locale }>;
}): Promise<Metadata> {
  const { slug, lang } = await params;

  const messages = (await getDictionary(lang)) as Record<string, string>;

  const promptBook = getPromptBookData(slug);

  const title = `${promptBook.name} | Gemini | Nano Banana Pro | ChatGPT Image`;
  const description = promptBook.summary || promptBook.description
  const keywords = messages["prompt_books.keywords"];

  const url = promptBookPageRoute.getUrl(lang, {
    params: {
      slug,
    },
  });

  return {
    title,
    description,
    keywords,
    openGraph: {
      images: [
        `https://www.selenique.space/promptbooks/${promptBook.id}/${promptBook.images[0]}.jpg`,
      ],
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
  params: Promise<{ slug: string; lang: Locale }>;
}) {
  const { slug, lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  if (!slug) {
    return redirect(promptBookListPageRoute.getUrl(finalLang));
  }

  const id = getPromptBookId(slug);

  if (!id) {
    return redirect(promptBookListPageRoute.getUrl(finalLang));
  }

  const promptBook = getPromptBookData(slug);

  if (!promptBook) {
    return redirect(promptBookListPageRoute.getUrl(finalLang));
  }

  /**
   * Related
   */
  let related: PromptBook[] = [];

  if (promptBook.tags.length && promptBook.tags[0]) {
    // TODO: improve related search
    related = Object.keys(PROMTBOOKS)
      .filter(
        (itemSlug) =>
          PROMTBOOKS[itemSlug].type === promptBook.type &&
          slug !== itemSlug &&
          PROMTBOOKS[itemSlug].mainCategory === promptBook.mainCategory
      )
      .map((itemSlug) => getPromptBookData(itemSlug));

    related.sort(sortByPoints);
  }

  /**
   * Bundle
   */
  let bundleContent: PromptBook[] = [];
  const pack = promptBook.pack;

  if (pack && pack.length > 1) {
    const packIds = pack;

    const tempSlugArray = Object.keys(PROMTBOOKS).filter((slug) => {
      const item = PROMTBOOKS[slug];
      return packIds.includes(item.id);
    });

    bundleContent = tempSlugArray.map((itemSlug) =>
      getPromptBookData(itemSlug)
    );
  }

  return (
    <Layout locale={finalLang}>
      <PromptbookPage
        data={promptBook}
        related={related}
        bundleContent={bundleContent}
      />
    </Layout>
  );
}
