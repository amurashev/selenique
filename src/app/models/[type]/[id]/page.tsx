import Layout from "@/components/layout";
import ModelInfoPage from "@/components/pages/model-info";

export default async function ModelInfo({
  params,
}: {
  params: Promise<{ id: string; type: "man" | "woman" }>;
}) {
  const { id, type } = await params;
  return (
    <Layout locale="ru">
      <ModelInfoPage id={id} type={type} />
    </Layout>
  );
}
