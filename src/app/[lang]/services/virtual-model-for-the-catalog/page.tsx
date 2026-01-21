import { Metadata } from "next";

import IIModelPage from "@/components/pages/ii-model";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title:
    "A unique virtual model for your catalog",
  description:
    "One persona for all collections. Consistent style, recognition, and fast series for Ebay, Amazon, Etsy and advertising.",
};

// export const metadata: Metadata = {
//   title:
//     "Виртуальная модель для каталога — единый стиль бренда без студийных затрат",
//   description:
//     "Создадим уникальную ИИ-модель под ваш бренд: один типаж для всей линейки одежды/аксессуаров. Консистентные кадры, быстрые серии, готово для Ozon/WB/Я.Маркета и рекламы.",
// };

export default async function IIModelPageEntry() {
  return (
    <Layout locale="en">
      <IIModelPage />
    </Layout>
  );
}
