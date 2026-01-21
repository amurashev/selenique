import type { Metadata } from "next";

import Layout from "@/components/layout";

import ProductsPortfolioPage from "@/components/pages/products-portfolio";
import { getDictionary } from "@/l18n/dictionaries";
import { PORTFOLIO_COMMON_TYPE } from "@/constants/portfolio";
import getDeviceType from "@/utils/device";

import { i18n, Locale } from "../../../../../i18n-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const messages = await getDictionary("en");
  const type = (await params).type;

  let title;

  if (type === PORTFOLIO_COMMON_TYPE) {
    title = "Portfolio";
  } else {
    title =
      "Portfolio: " +
      messages[`portfolio.types.${type}` as keyof typeof messages];
  }

  return {
    title,
    description: "Here you can see our work",
  };
}

export default async function ProductsPortfolio({
  params,
}: {
  params: Promise<{ type: string; lang: Locale }>;
}) {
  const { lang,  type } = await params;
  const deviceType = await getDeviceType()
  const finalLang = lang || i18n.defaultLocale;

  return (
    <Layout locale={lang}>
      <ProductsPortfolioPage type={type || "all"} deviceType={deviceType} />
    </Layout>
  );
}
