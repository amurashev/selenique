import HomePage from "@/components/pages/home2";
import Layout from "@/components/layout";

import { Locale } from "../../../i18n-config";
import getDeviceType from "@/utils/device";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const deviceType = await getDeviceType()

  return (
    <Layout locale="en">
      <HomePage deviceType={deviceType} />;
    </Layout>
  );
}
