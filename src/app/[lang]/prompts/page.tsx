import { Metadata } from "next";

import { i18n, Locale } from "../../../../i18n-config";
import Layout from "@/components/layout";
import { promptBookListPageRoute } from "@/constants/routes";

import PromptbookListPage from "@/components/pages/promptbook-list";
import { getDictionary } from "@/l18n/dictionaries";
import { getPromptsListKeywords, getPromptsListTitle, getPromptsListDescription } from "@/constants/prompts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const messages = await getDictionary(lang) as Record<string, string>

  const title = messages[getPromptsListTitle()]
  const description = messages[getPromptsListDescription()]
  const keywords = messages[getPromptsListKeywords()]
  const url = promptBookListPageRoute.getUrl(lang)

  return {
    title,
    description,
    keywords,
    openGraph: {
      // TODO: Photo
      // images: [
      //   `https://www.selenique.space/promptbooks/${data.id}/${data.images[0]}.jpg`,
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
  const { lang } = await params
  const finalLang = lang || i18n.defaultLocale

  return (
    <Layout locale={finalLang}>
      <PromptbookListPage />
    </Layout>
  );
}
