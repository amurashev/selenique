import ProductPage from "@/components/pages/products";
import Layout from "@/components/layout";

import { Metadata } from "next";

const title =
  "Премиальная обработка фото для маркетплейсов и сайтов, съемка каталогов на ИИ моделях";
const description =
  "Готовим изображения";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: ["https://www.selenique.space/product/bg2.webp"],
    title: title,
    description,
    url: "https://www.selenique.space/creating-photo-for-e-commerce",
    type: "website",
  },
};

export default async function Product() {
  return (
    <Layout>
      <ProductPage />
    </Layout>
  );
}
