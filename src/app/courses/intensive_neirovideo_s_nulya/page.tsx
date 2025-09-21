import { Metadata } from "next";

import Layout from "@/components/layout";
import IntensiveNeiroVideoPage from "@/components/pages/intensive_neirovideo";

export const metadata: Metadata = {
  title:
    "Интенсив по нейровидео «С нуля до первого ролика (в связке MidJourney + Kling)",
  description: "",
};

export default function IntensiveNeiroVideo() {
  return (
    <Layout locale="ru">
      <IntensiveNeiroVideoPage />
    </Layout>
  );
}
