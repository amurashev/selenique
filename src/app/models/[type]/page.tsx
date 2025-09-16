import { Metadata } from "next";

import Layout from "@/components/layout";
import ModelsPage from "@/components/pages/models";

export const metadata: Metadata = {
  title: "Каталог ИИ моделей",
  description: "Уникальная виртуальная модель для вашего каталога",
};

export default async function Models({
  params,
}: {
  params: Promise<{ type: "men" | "women" }>;
}) {
  const { type } = await params;
  return (
    <Layout locale="ru">
      <ModelsPage type={type} />
    </Layout>
  );
}
