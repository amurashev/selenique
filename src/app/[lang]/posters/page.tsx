import { Metadata } from "next";

import Layout from "@/components/layout";

import PostersListPage from "@/components/pages/_lists/posters-list";

import { i18n, Locale } from "../../../../i18n-config";
import { postersListPageRoute } from "@/constants/routes";
import { getDictionary } from "@/l18n/dictionaries";
import { getPostersList } from "@/content/posters/utils";
import { Poster } from "@/content/posters";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale

  const messages = await getDictionary(finalLang) as Record<string, string>

  const title = messages["posters.title"]
  const description = messages["posters.text"]
  // const keywords = messages['']
  const url = postersListPageRoute.getUrl(finalLang)

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

export default async function PromptbookPageEntry({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  const posters: Poster[] = getPostersList(finalLang)

  return (
    <Layout locale={finalLang}>
      <PostersListPage posters={posters} />
    </Layout>
  );
}
