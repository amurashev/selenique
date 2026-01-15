import type { Metadata } from "next";

import Layout from "@/components/layout";

import ProductsPortfolioPage from "@/components/pages/products-portfolio";
import { getDictionary } from "@/l18n/dictionaries";
import { PORTFOLIO_COMMON_TYPE } from "@/constants/portfolio";
import getDeviceType from "@/utils/device";

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
    title =
      "Наши работы: " +
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
  const deviceType = await getDeviceType();

  return (
    <Layout locale="ru">
      <ProductsPortfolioPage type={type || "all"} deviceType={deviceType} />
    </Layout>
  );
}
