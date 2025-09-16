import Layout from "@/components/layout";

import { Locale } from "../../../../i18n-config";
import PromptbookPage from "@/components/pages/promptbook";

export default async function PromptbookPageEntry() {
  return (
    <Layout locale="en">
      <PromptbookPage />;
    </Layout>
  );
}
