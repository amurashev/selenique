import Layout from "@/components/layout";
import ModelInfoPage from "@/components/pages/model-info";

export default async function ModelInfo({
  params,
}: {
  params: Promise<{ id: string; type: "men" | "women" }>;
}) {
  const { id, type } = await params;
  return (
    <Layout locale="en">
      <ModelInfoPage id={id} type={type} />
    </Layout>
  );
}
