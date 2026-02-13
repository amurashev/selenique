
import { PromptBook } from "@/components/types";
import { PROMTBOOKS } from "@/constants/promptbooks";
import PROMPTS_RATING from "@/constants/promptbooks/reviews";
import PROMPTS_SALES from "@/constants/promptbooks/sales";

export const getPromptBookData = (slug: string) => {
  const baseItem = PROMTBOOKS[slug]

  // if (!baseItem) return undefined

  const rating = PROMPTS_RATING[slug] || { rating: 0, count: 0}
  const sales = PROMPTS_SALES[slug] || 0

  const reviewsRating = rating.rating
  const reviewsRatingFixed = rating.rating.toFixed(1)
  const reviewsCount = rating.count

  const item = {
    ...baseItem,
    slug,
    vertImage: `/promptbooks/${baseItem.id}/vert.jpg`,
    purchaseLink: `https://seleniquestudio.gumroad.com/l/${baseItem.gumroad.slug}?wanted=true`,
    boostyLink: baseItem.boostyId ? `https://boosty.to/selenique/posts/${baseItem.boostyId}` : '',
    reviewsRating,
    reviewsRatingFixed,
    reviewsCount,
    sales,
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

  if (b.reviewsCount > a.reviewsCount) pointsB += 10
  if (b.reviewsCount < a.reviewsCount) pointsA += 10

  return pointsB - pointsA
}