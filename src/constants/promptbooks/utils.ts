
import { PROMTBOOKS } from "@/constants/promptbooks";
import PROMPTS_RATING from "@/constants/promptbooks/reviews";
import PROMPTS_SALES from "@/constants/promptbooks/sales";

export const getPromptBookData = (slug: string) => {
  const baseItem = PROMTBOOKS[slug]

  // if (!baseItem) return undefined

  const rating = PROMPTS_RATING[slug] || { rating: 0, count: 0}
  const sales = PROMPTS_SALES[slug] || 0

  const item = {
    ...baseItem,
    slug,
    rating,
    sales,
  };

  return item
}