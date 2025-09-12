import type { MetadataRoute } from "next";

import {
  productPageRoute,
  iiModelPageRoute,
  modelsPageRoute,
  productPortfolioPageRoute,
  homePage,
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
    homePage.getUrl("ru"),
    productPageRoute.getUrl("ru"),
    iiModelPageRoute.getUrl("ru"),
    modelsPageRoute.getUrl("ru", { params: { type: "women" } }),
    modelsPageRoute.getUrl("ru", { params: { type: "men" } }),
    ...PORTFOLIO_TYPES.map((item) =>
      productPortfolioPageRoute.getUrl("ru", { params: { type: item.index } })
    ),

    homePage.getUrl("en"),
    productPageRoute.getUrl("en"),
    iiModelPageRoute.getUrl("en"),
    modelsPageRoute.getUrl("en", { params: { type: "women" } }),
    modelsPageRoute.getUrl("en", { params: { type: "men" } }),
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
