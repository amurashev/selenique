import { Metadata } from "next";

import IIModelPage from "@/components/pages/ii-model";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title:
    "Виртуальная модель для каталога — единый стиль бренда без студийных затрат",
  description:
    "Создадим уникальную ИИ-модель под ваш бренд: один типаж для всей линейки одежды/аксессуаров. Консистентные кадры, быстрые серии, готово для Ozon/WB/Я.Маркета и рекламы.",
};

export default async function IIModelPageEntry() {
  return (
    <Layout>
      <IIModelPage />
    </Layout>
  );
}
