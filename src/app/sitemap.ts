import type { MetadataRoute } from "next";

import {
  productPageRoute,
  iiModelPageRoute,
  aiConsultationPageRoute,
  iiPhotoShootPageRoute,
  modelsPageRoute,
  productPortfolioPageRoute,
  homePage,
  intensiveNeurovideoPageRoute,
} from "@/constants/routes";
import { PORTFOLIO_TYPES } from "@/constants/portfolio";

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
    homePage.getUrl("ru"),
    homePage.getUrl("en"),

    // Neurovideo
    intensiveNeurovideoPageRoute.getUrl("ru"),

    // Services RU
    productPageRoute.getUrl("ru"),
    aiConsultationPageRoute.getUrl("ru"),
    iiModelPageRoute.getUrl("ru"),
    iiPhotoShootPageRoute.getUrl("ru"),
    // Services EN
    productPageRoute.getUrl("en"),
    aiConsultationPageRoute.getUrl("en"),
    iiModelPageRoute.getUrl("en"),
    iiPhotoShootPageRoute.getUrl("en"),

    // Models RU
    modelsPageRoute.getUrl("ru", { params: { type: "women" } }),
    modelsPageRoute.getUrl("ru", { params: { type: "men" } }),
    // Models EN
    modelsPageRoute.getUrl("en", { params: { type: "women" } }),
    modelsPageRoute.getUrl("en", { params: { type: "men" } }),

    // Portfolio RU
    ...PORTFOLIO_TYPES.map((item) =>
      productPortfolioPageRoute.getUrl("ru", { params: { type: item.index } })
    ),
    // Portfolio EN
     ...PORTFOLIO_TYPES.map((item) =>
      productPortfolioPageRoute.getUrl("en", { params: { type: item.index } })
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
