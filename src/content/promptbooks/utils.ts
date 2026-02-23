
import { PromptBook } from "@/components/types";
import { PROMTBOOKS } from "@/content/promptbooks";
import PROMPTS_RATING from "@/content/promptbooks/reviews";
import PROMPTS_SALES from "@/content/promptbooks/sales";
import PROMPTS_POINTS from "@/content/promptbooks/points";

export const getPromptBookId = (slug: string): number | undefined => {
  const baseItem = PROMTBOOKS[slug]

  if (baseItem) {
    return baseItem.id
  }
}

export const getPromptBookData = (slug: string): PromptBook => {
  const baseItem = PROMTBOOKS[slug]

  const id = getPromptBookId(slug) || 0
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const localData = require(`./../../../source/promptbooks/${id}.json`);

  const rating = PROMPTS_RATING[slug] || { rating: 0, count: 0}
  const sales = PROMPTS_SALES[slug] || 0
  const point = PROMPTS_POINTS[slug] || 0

  const reviewsRating = rating.rating
  const reviewsRatingFixed = rating.rating.toFixed(1)
  const reviewsCount = rating.count

  const item = {
    ...baseItem,
    slug,
    name: localData['name'],
    description: localData['description'],
    text: localData['text'],
    summary: localData['summary'],
    why: localData['why'],
    vertImage: `/promptbooks/${baseItem.id}/vert.jpg`,
    purchaseLink: `https://seleniquestudio.gumroad.com/l/${baseItem.gumroadSlug}?wanted=true`,
    boostyLink: baseItem.boostyId ? `https://boosty.to/selenique/posts/${baseItem.boostyId}` : '',
    reviewsRating,
    reviewsRatingFixed,
    reviewsCount,
    sales,
    point,
  };

  return item
}

export const sortByPoints = (a: PromptBook, b: PromptBook) => {
  let pointsA = 0
  let pointsB = 0

  if (Boolean(b.isBestseller) > Boolean(a.isBestseller)) pointsB += 1000
  if (Boolean(b.isBestseller) < Boolean(a.isBestseller)) pointsA += 1000

  if (b.reviewsRating > a.reviewsRating) pointsB += 100
  if (b.reviewsRating < a.reviewsRating) pointsA += 100

  if (b.point > a.point) pointsB += 50
  if (b.point < a.point) pointsA += 50

  if (b.reviewsCount > a.reviewsCount) pointsB += 10
  if (b.reviewsCount < a.reviewsCount) pointsA += 10

  return pointsB - pointsA
}