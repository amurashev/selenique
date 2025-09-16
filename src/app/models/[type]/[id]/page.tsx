import { Metadata } from "next";

import Layout from "@/components/layout";
import ModelInfoPage from "@/components/pages/model-info";

export const metadata: Metadata = {
  title: "Каталог ИИ моделей",
  description: "Уникальная виртуальная модель для вашего каталога",
};

export default async function ModelInfo({
  params,
}: {
  params: Promise<{ id: string; type: "men" | "women" }>;
}) {
  const { id, type } = await params;
  return (
    <Layout locale="ru">
      <ModelInfoPage id={id} type={type} />
    </Layout>
  );
}
