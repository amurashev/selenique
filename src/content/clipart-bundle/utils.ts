import { CLIPART_BUNDLES, ClipartBundle } from ".";

export const getClipartBundlesList = (locale: string): string[] =>
  Object.keys(CLIPART_BUNDLES).map((slug) => slug);

export const getClipartBundleId = (slug: string): number | undefined => {
  const baseItem = CLIPART_BUNDLES[slug];

  if (baseItem) {
    return baseItem.id;
  }
};

/* eslint-disable @typescript-eslint/no-require-imports */
export const getClipartBundleData = (
  slug: string,
  locale: string
): ClipartBundle => {
  const baseItem = CLIPART_BUNDLES[slug];

  const id = getClipartBundleId(slug) || 0;
  let localData;

  try {
    localData = require(`./../../../source/clipart-bundles/${id}.json`);
  } catch {
    try {
      localData = require(`./../../../source/clipart-bundles/${id}/${locale}.json`);
    } catch {
      localData = require(`./../../../source/clipart-bundles/${id}/en.json`);
    }
  }

  // const numberString = (baseItem.number || 50)?.toString();
  const title = localData["title"]
  const description = localData["description"]
  const keywords = localData["keywords"]
  
  // const summary = localData["summary"].replaceAll("{number}", numberString);
  // const text = localData["text"] || "";
  // const fixedText = text.replaceAll("{number}", numberString);

  const imagesContent = baseItem.images.map(item => `/images/clipart-bundles/${id}/${item}.jpg`)

  const item: ClipartBundle = {
    ...baseItem,
    slug,
    etsyLink: `https://www.etsy.com/listing/${baseItem.etsyID}`,
    boostyLink: "",
    // ? `https://boosty.to/selenique/posts/${baseItem.boostyId}`
    // : "",
    thumbImage: `/images/clipart-bundles/${id}/thumb.jpg`,
    mainImage: `/images/clipart-bundles/${id}/main.webp`,
    imagesContent,
    title,
    description,
    keywords,
    // name,
    // description,
    // summary,
    // text: fixedText,

    // reviewsRating,
    // reviewsRatingFixed,
    // reviewsCount,
    // sales,
    // point,
  };

  return item;
};
