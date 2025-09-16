import { Metadata } from "next";

import Layout from "@/components/layout";
import HomePage from "@/components/pages/home";

export const metadata: Metadata = {
  title: "Селеник Studio",
  description:
    "Мы занимаемся премиальной обработкой фото для маркетплейсов и создаём каталожные съёмки на ИИ-моделях. Это помогает брендам быстро и без студии получать красивые, единые по стилю кадры для карточек товаров и сайтов.",
};

export default function Home() {
  return (
    <Layout locale="ru">
      <HomePage />
    </Layout>
  );
}
