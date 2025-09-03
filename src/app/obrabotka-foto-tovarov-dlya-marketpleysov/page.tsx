import HomePage from "@/components/pages/products";
import Layout from "@/components/layout";

import { Locale } from "../../../i18n-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Премиальная обработка фото для маркетплейсов и сайтов, съемка каталогов на ИИ моделях",
  description:
    "Готовим изображения для Ozon, Wildberries, Яндекс.Маркет, Lamoda на любых фонах. Фотореалистичные lifestyle-сцены, демонстрация товара на ИИ моделях. Реалистичные тени/блики, точные фирменные цвета, единый вид товара во всей серии. Финальный экспорт под требования площадки",
};

export default async function ProductPage() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
