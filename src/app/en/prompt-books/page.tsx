import { Metadata } from "next";

import Layout from "@/components/layout";

import PromptbookListPage from "@/components/pages/promptbook-list";

export const metadata: Metadata = {
  title: "AI Prompt Packs for Images & Content — Ready-to-Use Prompts",
  description:
    "Ready-made AI prompt packs for creating realistic images, visuals, and content. Save time, improve quality, and get consistent results for work and sales.",
};

export default async function PromptbookPageEntry() {
  return (
    <Layout locale="en">
      <PromptbookListPage />
    </Layout>
  );
}
