import {
  promptBookListPageRoute,
  guidesListPageRoute,
  productPortfolioPageRoute,
  affiliatePageRoute,
  aiAvatarPageRoute,
  postersListPageRoute,
  clipartBundlesListPageRoute,
} from "@/constants/routes";

export const getMainPagesList = (locale: string) => {
  return [
    [promptBookListPageRoute.getUrl(locale), "footer.prompts"],
    [guidesListPageRoute.getUrl(locale), "footer.guides"],
    [clipartBundlesListPageRoute.getUrl(locale), "clipart.title_short"],
    [postersListPageRoute.getUrl(locale), "posters.title_short"],
    [aiAvatarPageRoute.getUrl(locale), "footer.ai_avatar"],
    [affiliatePageRoute.getUrl(locale), "header.menu.affiliate"],
    [productPortfolioPageRoute.getUrl(locale, {
      params: { type: "all" },
    }), "header.menu.portfolio"],
  ]
}