import type { MetadataRoute } from "next";

import {
  productPageRoute,
  iiModelPageRoute,
  aiConsultationPageRoute,
  iiPhotoShootPageRoute,
  modelsPageRoute,
  productPortfolioPageRoute,
  promptBookListPageRoute,
  promptBookPageRoute,
  homePage,
  intensiveNeurovideoPageRoute,
} from "@/constants/routes";
import { PORTFOLIO_TYPES } from "@/constants/portfolio";
import { PROMTBOOKS } from "@/constants/promptbooks";

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

  [
    // Home
    homePage.getUrl("en"),
    homePage.getUrl("ru"),

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

    // Portfolio EN
     ...PORTFOLIO_TYPES.map((item) =>
      productPortfolioPageRoute.getUrl("en", { params: { type: item.index } })
    ),
    // Portfolio RU
    ...PORTFOLIO_TYPES.map((item) =>
      productPortfolioPageRoute.getUrl("ru", { params: { type: item.index } })
    ),

    // promptBook EN
    promptBookListPageRoute.getUrl("en"),
    ...Object.keys(PROMTBOOKS).map((slug) =>
      promptBookPageRoute.getUrl("en", { params: { slug } })
    ),
  ].forEach((item) => {
    pages.push({
      url: `${DOMAIN}${item}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    });
  });

  return pages;
}
