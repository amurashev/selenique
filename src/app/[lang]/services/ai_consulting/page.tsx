import { Metadata } from "next";

import ConsultationsPage from "@/components/pages/consultations";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "AI consultations for brands",
  description:
    "We’ll analyze your product, select ideas, compose clear text prompts for the neural network, and show how to get the right shots for marketplaces and ads — without extra costs",
};

// export const metadata: Metadata = {
//   title:
//     "Консультации по нейросетям для изображений товаров — быстро и по правилам",
//   description:
//     "Поможем настроить создание реалистичных карточек и рекламных изображений товара. Простые тексты-задания, примеры, правила качества. Запишитесь на консультацию.",
// };

export default async function ConsultationsPageEntry() {
  return (
    <Layout locale="en">
      <ConsultationsPage />
    </Layout>
  );
}
