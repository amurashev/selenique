import HomePage from "@/components/pages/home";
import Layout from "@/components/layout";

import { Locale } from "../../../i18n-config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  return (
    <Layout locale="en">
      <HomePage />;
    </Layout>
  );
}
