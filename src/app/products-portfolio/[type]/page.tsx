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
  const messages = await getDictionary("ru");
  const type = (await params).type;

  let title;

  if (type === PORTFOLIO_COMMON_TYPE) {
    title = "Наши работы";
  } else {
    title = "Наши работы: " +
      messages[`portfolio.types.${type}` as keyof typeof messages];
  }

  return {
    title,
    description: "Здесь Вы можете посмотреть наши работы",
  };
}

export default async function ProductsPortfolio({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  return (
    <Layout locale="ru">
      <ProductsPortfolioPage type={type || "all"} />
    </Layout>
  );
}
