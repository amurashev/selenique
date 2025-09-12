import Layout from "@/components/layout";

import ProductsPortfolioPage from "@/components/pages/products-portfolio";

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
