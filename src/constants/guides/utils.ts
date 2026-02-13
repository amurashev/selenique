
import { Guide, GUIDES } from "@/constants/guides";

export const getGuidesList = (locale: string) => {
  return Object.keys(GUIDES).map(item => {
    const data = GUIDES[item]
    const guideData = data.locales[locale]

    return {
      slug: item,
      id: guideData ? guideData.id : undefined
    }
  }).filter(item => item.id)
}

export const getGuideData = (slug: string, locale: string): Guide => {
  const baseItem = GUIDES[slug]
  const guideData = baseItem.locales[locale]

  const item = {
    ...guideData,
    slug,
    vertImage: `/promptbooks/${guideData.id}/vert.jpg`,
  };

  return item
}
