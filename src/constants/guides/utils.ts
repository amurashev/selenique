
import { Guide, GUIDES } from "@/constants/guides";

export const getGuidesList = (locale: string) => {
  return Object.keys(GUIDES).map(item => {
    const data = GUIDES[item]
    
    const guideData = data.locales[locale]
    const guideDataEn = data.locales['en']

    let guideId = undefined
    let finalLocale = locale

    if (guideData) {
      guideId = guideData.id
    } else {
      // Show EN version without LANDINGS for l18n
      if (guideDataEn && guideDataEn.noLanding) {
        guideId = guideDataEn.id
        finalLocale = 'en'
      }
    }

    return {
      slug: item,
      locale: finalLocale,
      id: guideId
    }
  }).filter(item => item.id)
}

export const getGuideData = (slug: string, locale: string): Guide => {
  const baseItem = GUIDES[slug]
  const guideData = baseItem.locales[locale]

  const item = {
    ...guideData,
    slug,
    lang: locale,
    vertImage: `/promptbooks/${guideData.id}/vert.jpg`,
    gumroadLink: `https://seleniquestudio.gumroad.com/l/${guideData.gumroadSlug}`,
    purchaseLink: `https://seleniquestudio.gumroad.com/l/${guideData.gumroadSlug}?wanted=true`,
    boostyLink: guideData.boostyId ? `https://boosty.to/selenique/posts/${guideData.boostyId}` : ''
  };

  return item
}
