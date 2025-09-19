import type { Metadata } from "next";

import Layout from "@/components/layout";

import ProductsPortfolioPage from "@/components/pages/products-portfolio";
import { getDictionary } from "@/l18n/dictionaries";
import { PORTFOLIO_COMMON_TYPE } from "@/constants/portfolio";

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
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  return (
    <Layout locale="en">
      <ProductsPortfolioPage type={type || "all"} />
    </Layout>
  );
}
