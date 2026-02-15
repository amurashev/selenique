import Layout from "@/components/layout";

import { Metadata } from "next";
import IIPhotoPage from "@/components/pages/_old/ii-fotosessiya";

const title = "AI Photoshoot — dream portraits without a studio"
const description = "Portraits and mini videos for avatars, resumes, social networks, dating and gifts — fully online, across the World. You send your photos, we create realistic scenes and looks without plastic over-smoothing."


// const title = "Нейрофотосессия — портреты для соцсетей, резюме и дейтинга"
// const description = "Реалистичные AI‑портреты и мини‑видео без студии. Аватары, VK, Tinder, love‑story и семейные фото. Пробный кадр бесплатно."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: ["https://www.selenique.space/photoshoot/bg.webp"],
    title: title,
    description,
    url: "https://www.selenique.space/en/ai_photoshoot",
    type: "website",
  }
};

export default async function Product() {
  return (
    <Layout locale="en">
      <IIPhotoPage />
    </Layout>
  );
}
