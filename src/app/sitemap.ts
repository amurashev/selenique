import type { MetadataRoute } from "next";

import {
  productPageRoute,
  iiModelPageRoute,
  aiConsultationPageRoute,
  iiPhotoShootPageRoute,
  modelsPageRoute,
  productPortfolioPageRoute,
  promptBookListPageRoute,
  guidesListPageRoute,
  guidePageRoute,
  promptBookPageRoute,
  homePage,
  promptsCategoryPageRoute,
  promptsModelPageRoute,
  intensiveNeurovideoPageRoute,
  promptBundleListPageRoute,
} from "@/constants/routes";
import { PORTFOLIO_TYPES } from "@/constants/portfolio";
import {
  promptbooksOrdered,
  promptbooksBundlesOrdered,
} from "@/constants/promptbooks";
import { PROMPT_CATEGORIES, PROMPT_MODELS } from "@/constants/prompts";

import { i18n, Locale } from "../../i18n-config";
import { getGuidesList } from "@/constants/guides/utils";

const DOMAIN = "https://www.selenique.space";

// TODO: Do not generate on demand
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = [
    // {
    //   url: DOMAIN,
    //   lastModified: new Date(),
    //   changeFrequency: "daily",
    //   priority: 1,
    // },
  ] as MetadataRoute.Sitemap;


  i18n.locales.forEach(locale => {
    [
      // Home
      homePage.getUrl(locale),

      // Neurovideo
      // intensiveNeurovideoPageRoute.getUrl("ru"),

      // Services RU
      // productPageRoute.getUrl("ru"),
      // aiConsultationPageRoute.getUrl("ru"),
      // iiModelPageRoute.getUrl("ru"),
      // iiPhotoShootPageRoute.getUrl("ru"),
      // Services EN
      // productPageRoute.getUrl("en"),
      // aiConsultationPageRoute.getUrl("en"),
      // iiModelPageRoute.getUrl("en"),
      // iiPhotoShootPageRoute.getUrl("en"),

      // Models RU
      // modelsPageRoute.getUrl("ru", { params: { type: "women" } }),
      // modelsPageRoute.getUrl("ru", { params: { type: "men" } }),
      // Models EN
      // modelsPageRoute.getUrl("en", { params: { type: "women" } }),
      // modelsPageRoute.getUrl("en", { params: { type: "men" } }),

      // Prompts Categories
      promptBookListPageRoute.getUrl(locale),
      guidesListPageRoute.getUrl(locale),
      promptBundleListPageRoute.getUrl(locale),
      ...PROMPT_CATEGORIES.map((tag) =>
        promptsCategoryPageRoute.getUrl(locale, { params: { slug: tag } })
      ),
      ...PROMPT_MODELS.map((tag) =>
        promptsModelPageRoute.getUrl(locale, { params: { slug: tag } })
      ),
    ].forEach((item) => {
      pages.push({
        url: `${DOMAIN}${item}`,
        // lastModified: new Date(),
        changeFrequency: "daily",
        priority: 1,
      });
    });

    [
      // Prompts
      ...promptbooksOrdered.map((slug) =>
        promptBookPageRoute.getUrl(locale, { params: { slug } })
      ),
      ...promptbooksBundlesOrdered.map((slug) =>
        promptBookPageRoute.getUrl(locale, { params: { slug } })
      ),
      // Guides
      ...getGuidesList(locale).map(item => guidePageRoute.getUrl(locale, { params: { slug: item.slug } }))
    ].forEach((item) => {
      pages.push({
        url: `${DOMAIN}${item}`,
        // lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });

    [
      // Portfolio
      ...PORTFOLIO_TYPES.map((item) =>
        productPortfolioPageRoute.getUrl(locale, { params: { type: item.index } })
      ),
    ].forEach((item) => {
      pages.push({
        url: `${DOMAIN}${item}`,
        // lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.3,
      });
    });

  })

  return pages;
}
