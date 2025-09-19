import Layout from "@/components/layout";

import PromptbookListPage from "@/components/pages/promptbook-list";

export default async function PromptbookPageEntry() {
  return (
    <Layout locale="en">
      <PromptbookListPage />
    </Layout>
  );
}
