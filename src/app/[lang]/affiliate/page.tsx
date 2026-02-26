import { Metadata } from "next";
import { notFound } from "next/navigation";

import AffiliatePage from "@/components/pages/_landings/affiliate";
import Layout from "@/components/layout";

import { i18n, Locale } from "../../../../i18n-config";
import { affiliatePageRoute } from "@/constants/routes";
import { getDictionary } from "@/l18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale

  const messages = await getDictionary(finalLang) as Record<string, string>

  const title = messages["affiliate.hero.subtitle"] + " " + messages["affiliate.hero.title"]
  const description = messages["affiliate.hero.text2"] + " " + messages["affiliate.hero.text3"]
  // const keywords = messages['']
  const url = affiliatePageRoute.getUrl(finalLang)

  return {
    title,
    description,
    // keywords,
    openGraph: {
      // TODO: Add image
      // images: [
      //   `https://www.selenique.space/promptbooks/promptbooks.jpg`,
      // ],
      title: title,
      description,
      url: `https://www.selenique.space${url}`,
      type: "website",
    },
  };
}

export default async function HomeEntry({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  if (!i18n.locales.includes(finalLang)) {
    return notFound();
  }

  return (
    <Layout locale={finalLang}>
      <AffiliatePage />
    </Layout>
  );
}
