import ProductPage from "@/components/pages/products";
import Layout from "@/components/layout";

import { Metadata } from "next";

const title = "Премиальная обработка фото для маркетплейсов и сайтов, съемка каталогов на ИИ моделях"
const description = "Готовим изображения для Ozon, Wildberries, Яндекс.Маркет, Lamoda на любых фонах. Фотореалистичные lifestyle-сцены, демонстрация товара на ИИ моделях. Реалистичные тени/блики, точные фирменные цвета, единый вид товара во всей серии. Финальный экспорт под требования площадки"

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: ["https://www.selenique.space/product/bg2.webp"],
    title: title,
    description,
    url: "https://www.selenique.space/obrabotka-foto-tovarov-dlya-marketpleysov",
    type: "website",
  }
};

export default async function Product() {
  return (
    <Layout>
      <ProductPage />
    </Layout>
  );
}
