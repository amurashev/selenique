import { Metadata } from "next";
import { notFound } from "next/navigation";

import HomePage from "@/components/pages/home";
import Layout from "@/components/layout";

import { i18n, Locale } from "../../../i18n-config";
import getDeviceType from "@/utils/device";
import { PromptBook } from "@/components/types";
import { PROMTBOOKS } from "@/constants/promptbooks";
import PHOTOS from "../../../source/portfolio.json";
import { getPromptBookData } from "@/constants/promptbooks/utils";

import shuffle from "@/utils/arrays";
import { getGuideData, getGuidesList } from "@/constants/guides/utils";

const title =
  "Selenique Studio: We are a creative duo specializing in AI-powered visual content.";
const description =
  "Our work combines technology and artistry to create images that feel authentic, expressive, and emotionally engaging. ✨We collaborate with brands and creators who value strong storytelling and distinctive aesthetics - from AI photoshoots and branded visuals to tailored prompt design.😎";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      // TODO: Update
      `https://www.selenique.space/promptbooks/promptbooks.jpg`,
    ],
    title,
    description,
    url: `https://www.selenique.space`,
    type: "website",
  },
};

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
  const bundles: PromptBook[] = []

  Object.keys(PROMTBOOKS).forEach((slug) => {
    const packData = getPromptBookData(slug);
    const { mainCategory, type, isBestseller } = packData;

    if (mainCategory && type === "pack" && isBestseller) {
      bestSellers.push(packData);
    }

    if (type === "bundle") {
      bundles.push(packData)
    }
  });


  const guidesListId = getGuidesList(finalLang);
  const guidesList = guidesListId.map((item) =>
    getGuideData(item.slug, finalLang)
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
