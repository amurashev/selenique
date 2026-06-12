import { stockPhotosPageRoute } from "@/constants/routes";
import { IMAGES_PACKS, ImagesPack } from ".";

export const getImagePacksList = (locale: string) => {
  return Object.keys(IMAGES_PACKS).map((slug) => slug);
};

export const getImagePackId = (slug: string): number | undefined => {
  const baseItem = IMAGES_PACKS[slug];

  if (baseItem) {
    return baseItem.id;
  }
};

/* eslint-disable @typescript-eslint/no-require-imports */
export const getImagePackData = (slug: string, locale: string): ImagesPack => {
  const baseItem = IMAGES_PACKS[slug];

  const id = getImagePackId(slug) || 0;
  let localData;

  try {
    localData = require(`./../../../source/image-packs/${id}.json`);
  } catch {
    try {
      localData = require(`./../../../source/image-packs/${id}/${locale}.json`);
    } catch {
      try {
        localData = require(`./../../../source/image-packs/${id}/en.json`);
      } catch {
        localData = {
          title: "",
          description: "",
          keywords: "",
        };
      }
    }
  }

  // const numberString = (baseItem.number || 50)?.toString();
  const title = localData["title"] || "";
  const description = localData["description"];
  const keywords = localData["keywords"];

  // const summary = localData["summary"].replaceAll("{number}", numberString);
  // const text = localData["text"] || "";
  // const fixedText = text.replaceAll("{number}", numberString);

  const imagesContent = baseItem.images.map(
    (item) => `/images/images-packs/${id}/${item}.jpg`
  );

  const pageUrl = stockPhotosPageRoute.getUrl(locale, {
    params: {
      slug,
    },
  });

  const item: ImagesPack = {
    ...baseItem,
    slug,
    pageUrl,
    etsyLink: baseItem.etsyID
      ? `https://www.etsy.com/listing/${baseItem.etsyID}`
      : "",
    gumroadLink: baseItem.gumroad
      ? `https://seleniquestudio.gumroad.com/l/${baseItem.gumroad}`
      : "",
    cmLink: baseItem.cmLink
      ? `https://creativemarket.com/AlenaMurasheva/${baseItem.cmLink}`
      : "",
    // ? `https://boosty.to/selenique/posts/${baseItem.boostyId}`
    // : "",
    thumbImage: `/images/images-packs/${id}/vert.jpg`,
    mainImage: `/images/images-packs/${id}/main.jpg`,
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
