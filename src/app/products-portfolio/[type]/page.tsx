import type { Metadata, ResolvingMetadata } from "next";

import Layout from "@/components/layout";

import ProductsPortfolioPage from "@/components/pages/products-portfolio";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const type = (await params).type;

  return {
    title: "Портфолио",
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
