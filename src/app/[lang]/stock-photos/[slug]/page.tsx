import { redirect } from "next/navigation";
import type { Metadata } from "next";

import Layout from "@/components/layout";
import ImagePackPage from "@/components/pages/image-pack-page";

import {
  promptBookListPageRoute,
  promptBookPageRoute,
} from "@/constants/routes";

import { i18n, Locale } from "../../../../../i18n-config";
import { getDictionary } from "@/l18n/dictionaries";

import { PromptBook } from "@/components/types";
import { getImagePackData, getImagePackId } from "@/content/images-packs/utils";
import { ImagesPack } from "@/content/images-packs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lang: Locale }>;
}): Promise<Metadata> {
  const { slug, lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  const messages = (await getDictionary(lang)) as Record<string, string>;

  const data = getImagePackData(slug, finalLang);

  const title = `${data.title}`;
  const description = data.description.slice(0, 255);
  const keywords = data.keywords;

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
      // images: [
      //   og
      //     ? `https://www.selenique.space/promptbooks/${promptBook.id}/og.jpg`
      //     : `https://www.selenique.space/promptbooks/${promptBook.id}/${promptBook.images[0]}.jpg`,
      // ],
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

  const id = getImagePackId(slug);

  if (!id) {
    return redirect(promptBookListPageRoute.getUrl(finalLang));
  }

  const data = getImagePackData(slug, finalLang);

  if (!data) {
    return redirect(promptBookListPageRoute.getUrl(finalLang));
  }

  /**
   * Related
   */
  let related: PromptBook[] = [];

  // if (promptBook.tags.length && promptBook.tags[0]) {
  //   // TODO: improve related search
  //   related = Object.keys(PROMTBOOKS)
  //     .filter((itemSlug) => {
  //       const { type, mainCategory, tags } = PROMTBOOKS[itemSlug];
  //       const isNotSameItem = slug !== itemSlug;
  //       const isSameType = type === promptBook.type;
  //       const isSameCategory = mainCategory === promptBook.mainCategory;

  //       let mark = 0;

  //       tags.forEach((tag) => {
  //         if (promptBook.tags.includes(tag)) mark++;
  //       });

  //       return isSameType && isNotSameItem && (isSameCategory || mark > 0);
  //     })
  //     .map((itemSlug) => getPromptBookData(itemSlug, finalLang));

  //   related.sort(sortByPoints);
  // }

  const bestSellers: ImagesPack[] = [];

  // Object.keys(PROMTBOOKS).forEach((itemSlug) => {
  //   const packData = getPromptBookData(itemSlug, finalLang);
  //   const { mainCategory, type, sales } = packData;
  //   const isNotSameItem = slug !== itemSlug;
  //   const isSameType = type === promptBook.type;

  //   if (mainCategory && isSameType && isNotSameItem) {
  //     if (sales > 1 || packData.reviewsCount) {
  //       bestSellers.push(packData);
  //     }
  //   }
  // });

  // bestSellers.sort(sortByPoints);

  return (
    <Layout locale={finalLang}>
      <ImagePackPage data={data} bestSellers={bestSellers} />
    </Layout>
  );
}
