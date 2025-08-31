import HomePage from "@/components/pages/products";
import Layout from "@/components/layout";

import { Locale } from "../../../i18n-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Обработка фото товаров для маркетплейсов — lifestyle-композиты",
  description:
    "Делаю фотореалистичные изображения товара для Ozon, Wildberries, Яндекс.Маркет. Песок, камень, вода, мрамор. Реалистичные тени и цвет. Готово для карточек и рекламы.",
};

export default async function ProductPage() {


  return (
    <Layout>
      <HomePage />;
    </Layout>
  );
}
