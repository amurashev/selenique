import type { MetadataRoute } from "next";

import { productPageRoute } from "@/constants/routes";

const DOMAIN = 'https://www.selenique.space'

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

  [productPageRoute.getUrl()].forEach(item => {
    pages.push({
      url: `${DOMAIN}${item}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    });
  })

  return pages;
}