import Layout from "@/components/layout";

import { Metadata } from "next";
import IIPhotoPage from "@/components/pages/ii-fotosessiya";

const title = "ИИ‑фотосессия — портреты для соцсетей, резюме и дейтинга"
const description = "Реалистичные AI‑портреты и мини‑видео без студии. Аватары, VK, Tinder, love‑story и семейные фото. Пробный кадр бесплатно."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: ["https://www.selenique.space/product/bg2.webp"],
    title: title,
    description,
    url: "https://www.selenique.space/ii-fotosessiya",
    type: "website",
  }
};

export default async function Product() {
  return (
    <Layout>
      <IIPhotoPage />
    </Layout>
  );
}
