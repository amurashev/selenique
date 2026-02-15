import { Metadata } from "next";

import Layout from "@/components/layout";
import IntensiveNeiroVideoPage from "@/components/pages/_old/intensive_neirovideo";
import { intensiveNeurovideoPageRoute } from "@/constants/routes";
import { COURSES_DATA } from "@/constants/courses";

const locale = "ru";

const title =
  "Интенсив по нейровидео «С нуля до первого ролика (в связке MidJourney + Kling)";
const description =
  "Этот интенсив — твой быстрый вход в мир AI-видео! Интенсив проходит онлайн, занятия 2 раза в неделю. Вы получите доступ к видеоурокам в закрытом чате в телеграм, практическим заданиям и дополнительным материалам. По выполненным заданиям дам обратную связь, разберу ошибки и отвечу на вопросы.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      `https://www.selenique.space${COURSES_DATA["intensive_neurovideo"].image}`,
    ],
    title,
    description,
    url: `https://www.selenique.space/${intensiveNeurovideoPageRoute.getUrl(
      locale
    )}`,
    type: "website",
  },
};

export default function IntensiveNeiroVideo() {
  return (
    <Layout locale={locale}>
      <IntensiveNeiroVideoPage />
    </Layout>
  );
}
