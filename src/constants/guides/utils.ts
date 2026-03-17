import { Guide, GUIDES } from "@/constants/guides";

import GUIDES_POINTS from "@/constants/guides/points";

export const getGuidesList = (locale: string) => {
  return Object.keys(GUIDES)
    .map((item) => {
      const data = GUIDES[item];

      const guideData = data.locales[locale];
      const guideDataEn = data.locales["en"];

      let guideId = undefined;
      let finalLocale = locale;

      if (guideData) {
        guideId = guideData.id;
      } else {
        // Show EN version without LANDINGS for l18n
        if (guideDataEn && guideDataEn.noLanding) {
          guideId = guideDataEn.id;
          finalLocale = "en";
        }
      }

      return {
        slug: item,
        locale: finalLocale,
        id: guideId,
      };
    })
    .filter((item) => item.id);
};

export const getGuideData = (slug: string, locale: string): Guide => {
  const baseItem = GUIDES[slug];
  const guideData = baseItem.locales[locale];
  const point = GUIDES_POINTS[slug] || 0;

  const item = {
    ...guideData,
    slug,
    lang: locale,
    point,
    vertImage: `/promptbooks/${guideData.id}/vert.jpg`,
    gumroadLink: `https://seleniquestudio.gumroad.com/l/${guideData.gumroadSlug}`,
    purchaseLink: `https://seleniquestudio.gumroad.com/l/${guideData.gumroadSlug}?wanted=true`,
    boostyLink: guideData.boostyId
      ? `https://boosty.to/selenique/posts/${guideData.boostyId}`
      : "",
  };

  return item;
};

export const sortGuidesByPoints = (a: Guide, b: Guide) => {
  let pointsA = 0;
  let pointsB = 0;

  if (Boolean(b.isBestseller) > Boolean(a.isBestseller)) pointsB += 1000;
  if (Boolean(b.isBestseller) < Boolean(a.isBestseller)) pointsA += 1000;

  if (b.point > a.point) pointsB += 700;
  if (b.point < a.point) pointsA += 700;

  if (Boolean(b.isFree) > Boolean(a.isFree)) pointsB += 500;
  if (Boolean(b.isFree) < Boolean(a.isFree)) pointsA += 500;

  return pointsB - pointsA;
};
