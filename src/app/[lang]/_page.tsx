import HomePage from "@/components/pages/home";
import Layout from "@/components/layout";

import { Locale } from "../../../i18n-config";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <Layout locale={lang}>
      <HomePage />;
    </Layout>
  );
}
