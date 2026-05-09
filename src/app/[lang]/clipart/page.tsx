import { Metadata } from "next";

import Layout from "@/components/layout";

import ClipartBundleListPage from "@/components/pages/_lists/clipart-bundle-list";

import { i18n, Locale } from "../../../../i18n-config";
import { clipartBundlesListPageRoute } from "@/constants/routes";
import { getDictionary } from "@/l18n/dictionaries";
import { getClipartBundlesList, getClipartBundleData } from "@/content/clipart-bundle/utils";
import { ClipartBundle } from "@/content/clipart-bundle";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale

  const messages = await getDictionary(finalLang) as Record<string, string>

  const title = messages["clipart.title"]
  const description = messages["clipart.text"]
  // const keywords = messages['']
  const url = clipartBundlesListPageRoute.getUrl(finalLang)

  return {
    title,
    description,
    // keywords,
    openGraph: {
      // images: [
      //   `https://www.selenique.space/images/og/guides.jpg`,
      // ],
      title: title,
      description,
      url: `https://www.selenique.space${url}`,
      type: "website",
    },
  };
}

export default async function ClipartBundleListEntry({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  const clipartBundlesId = getClipartBundlesList(finalLang);
  const clipartBundles: ClipartBundle[] = clipartBundlesId.map((item) =>
    getClipartBundleData(item, finalLang)
  );

  return (
    <Layout locale={finalLang}>
      <ClipartBundleListPage clipartBundles={clipartBundles} />
    </Layout>
  );
}
