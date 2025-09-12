import type { MetadataRoute } from "next";

import {
  productPageRoute,
  iiModelPageRoute,
  modelsPageRoute,
  productPortfolioPageRoute,
} from "@/constants/routes";
import { PORTFOLIO_TYPES } from "@/constants/portfolio";

const DOMAIN = "https://www.selenique.space";

// TODO: Do not generate on demand
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ] as MetadataRoute.Sitemap;

  [
    productPageRoute.getUrl(),
    iiModelPageRoute.getUrl(),
    modelsPageRoute.getUrl({ params: { type: "women" } }),
    modelsPageRoute.getUrl({ params: { type: "men" } }),
    ...PORTFOLIO_TYPES.map((item) =>
      productPortfolioPageRoute.getUrl({ params: { type: item.index } })
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
