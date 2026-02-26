import { Metadata } from "next";
import { notFound } from "next/navigation";

import HomePage from "@/components/pages/_lists/home";
import Layout from "@/components/layout";

import { i18n, Locale } from "../../../i18n-config";
import getDeviceType from "@/utils/device";
import { PromptBook } from "@/components/types";
import { PROMTBOOKS } from "@/content/promptbooks";
import PHOTOS from "../../../source/portfolio.json";
import { getPromptBookData, sortByPoints } from "@/content/promptbooks/utils";

import shuffle from "@/utils/arrays";
import { getGuideData, getGuidesList } from "@/constants/guides/utils";
import { homePage } from "@/constants/routes";
import { getDictionary } from "@/l18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  const messages = (await getDictionary(finalLang)) as Record<string, string>;

  const title = messages["home.profile.title"];
  const description = messages["home.profile.text1"];
  // const keywords = messages['']
  const url = homePage.getUrl(finalLang);

  return {
    title,
    description,
    // keywords,
    openGraph: {
      // TODO: Add image
      images: [`https://www.selenique.space/promptbooks/promptbooks.jpg`],
      title: title,
      description,
      url: `https://www.selenique.space${url}`,
      type: "website",
    },
  };
}

export default async function HomeEntry({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const deviceType = await getDeviceType();
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  if (!i18n.locales.includes(finalLang)) {
    return notFound();
  }

  const bestSellers: PromptBook[] = [];
  const bundles: PromptBook[] = [];

  Object.keys(PROMTBOOKS).forEach((slug) => {
    const packData = getPromptBookData(slug);
    const { mainCategory, type, isBestseller } = packData;

    if (mainCategory && type === "pack" && isBestseller) {
      bestSellers.push(packData);
    }

    if (type === "bundle") {
      bundles.push(packData);
    }
  });

  bestSellers.sort(sortByPoints);
  bundles.sort(sortByPoints);

  const guidesListId = getGuidesList(finalLang);

  const guidesList = guidesListId.map((item) =>
    getGuideData(item.slug, item.locale)
  );

  const randomPhotos = PHOTOS.filter((item) => {
    const sourceFile = item.SourceFile.slice(8);
    const category = sourceFile.split("/")[3];
    return category === "top";
  });

  shuffle(randomPhotos);

  const photos = randomPhotos
    .map((item) => {
      const sourceFile = item.SourceFile.slice(8);
      const category = sourceFile.split("/")[3];
      const fileName = sourceFile.split("/")[4];
      return {
        src: sourceFile,
        category,
        width: item.ImageWidth,
        height: item.ImageHeight,
        alt: fileName,
        title: fileName,
      };
    })
    .slice(0, 8);

  return (
    <Layout locale={finalLang}>
      <HomePage
        deviceType={deviceType}
        bestSellers={bestSellers}
        photos={photos}
        guidesList={guidesList}
        bundles={bundles}
      />
      ;
    </Layout>
  );
}
