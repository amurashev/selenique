import { notFound } from "next/navigation";

import Layout from "@/components/layout";

import PromptbookPage from "@/components/pages/promptbook";

import { PROMTBOOKS } from "@/constants/promptbooks";

export default async function PromptbookPageEntry({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = PROMTBOOKS[slug || "null"];

  if (!data) {
    return notFound();
  }

  return (
    <Layout locale="en">
      <PromptbookPage
        data={{
          ...data,
          slug,
        }}
      />
    </Layout>
  );
}
