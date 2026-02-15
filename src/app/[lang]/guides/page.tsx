import { Metadata } from "next";

import Layout from "@/components/layout";

import GuidesListPage from "@/components/pages/_lists/guides-list";

import { i18n, Locale } from "../../../../i18n-config";
import { guidesListPageRoute } from "@/constants/routes";
import { getDictionary } from "@/l18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale

  const messages = await getDictionary(finalLang) as Record<string, string>

  const title = messages["guides.title"]
  const description = messages["guides.text"]
  // const keywords = messages['']
  const url = guidesListPageRoute.getUrl(finalLang)

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


export default async function PromptbookPageEntry({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  return (
    <Layout locale={finalLang}>
      <GuidesListPage />
    </Layout>
  );
}
