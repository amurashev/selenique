import { PromptBook } from "@/components/types";
import { PROMTBOOKS } from "@/content/promptbooks";
import PROMPTS_RATING from "@/content/promptbooks/reviews";
import PROMPTS_SALES from "@/content/promptbooks/sales";
import PROMPTS_POINTS from "@/content/promptbooks/points";

export const getPromptBookId = (slug: string): number | undefined => {
  const baseItem = PROMTBOOKS[slug];

  if (baseItem) {
    return baseItem.id;
  }
};

export const getPromptBooksList = () => {
  return Object.keys(PROMTBOOKS).map((slug) => slug);
};

/* eslint-disable @typescript-eslint/no-require-imports */
export const getPromptBookData = (slug: string, locale: string): PromptBook => {
  const baseItem = PROMTBOOKS[slug];

  const id = getPromptBookId(slug) || 0;
  let localData;

  try {
    localData = require(`./../../../source/promptbooks/${id}.json`);
  } catch {
    try {
      localData = require(`./../../../source/promptbooks/${id}/${locale}.json`);
    } catch {
      localData = require(`./../../../source/promptbooks/${id}/en.json`);
    }
  }

  const rating = PROMPTS_RATING[slug] || { rating: 0, count: 0 };
  const sales = PROMPTS_SALES[slug] || 0;
  const point = PROMPTS_POINTS[slug] || 0;

  const reviewsRating = rating.rating;
  const reviewsRatingFixed = rating.rating.toFixed(1);
  const reviewsCount = rating.count;

  const numberString = (baseItem.number || 50)?.toString();
  const name = localData["name"].replaceAll("{number}", numberString);
  const description = localData["description"].replaceAll(
    "{number}",
    numberString
  );
  const summary = localData["summary"].replaceAll("{number}", numberString);
  const text = localData["text"] || "";
  const fixedText = text.replaceAll("{number}", numberString);

  const gumroadLink = `https://seleniquestudio.gumroad.com/l/${baseItem.gumroadSlug}`;
  const gumroadBasketLink = `https://seleniquestudio.gumroad.com/l/${baseItem.gumroadSlug}?wanted=true`;
  const purchaseLink = gumroadLink; //baseItem.hasVariations ? gumroadLink : gumroadBasketLink

  const heroImages = baseItem.images.map(
    (item) => `/images/promptbooks/${baseItem.id}/${item}.jpg`
  );

  const exampleImages = (baseItem.examples || []).map(
    (item) => `/images/promptbooks/${baseItem.id}/${item}.jpg`
  );


  

  const item: PromptBook = {
    ...baseItem,
    slug,
    name,
    description,
    summary,
    heroImages,
    exampleImages,
    text: fixedText,
    why: localData["why"],
    testPrompt: localData["prompt"],
    vertImage: `/images/promptbooks/${baseItem.id}/vert.jpg`,
    gumroadLink,
    purchaseLink,
    boostyLink: baseItem.boostyId
      ? `https://boosty.to/selenique/posts/${baseItem.boostyId}`
      : "",
    reviewsRating,
    reviewsRatingFixed,
    reviewsCount,
    sales,
    point,
  };

  return item;
};

export const sortByPoints = (a: PromptBook, b: PromptBook) => {
  let pointsA = 0;
  let pointsB = 0;

  // if (Boolean(b.isBestseller) > Boolean(a.isBestseller)) pointsB += 1000
  // if (Boolean(b.isBestseller) < Boolean(a.isBestseller)) pointsA += 1000

  if (b.point > a.point) pointsB += 500;
  if (b.point < a.point) pointsA += 500;

  if (b.sales > a.sales) pointsB += 200;
  if (b.sales < a.sales) pointsA += 200;

  if (b.reviewsRating > a.reviewsRating) pointsB += 100;
  if (b.reviewsRating < a.reviewsRating) pointsA += 100;

  if (b.reviewsCount > a.reviewsCount) pointsB += 10;
  if (b.reviewsCount < a.reviewsCount) pointsA += 10;

  return pointsB - pointsA;
};
