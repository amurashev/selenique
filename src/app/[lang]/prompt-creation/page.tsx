import { Metadata } from "next";

import { i18n, Locale } from "../../../../i18n-config";
import Layout from "@/components/layout";
import { promptBookListPageRoute } from "@/constants/routes";

import PromptCreationPage from "@/components/pages/prompt-creation";
import { getDictionary } from "@/l18n/dictionaries";
import { getPromptsListKeywords, getPromptsListTitle, getPromptsListDescription } from "@/constants/prompts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;

  // const messages = await getDictionary(lang) as Record<string, string>

  const title = "Prompt Creation"
  const description = ""

  return {
    title,
    description,
    // keywords,
    openGraph: {
      images: [
        `https://www.selenique.space/promptbooks/promptbooks.jpg`,
      ],
      title: title,
      description,
      // url: `https://www.selenique.space${url}`,
      type: "website",
    },
  };
}

export default async function PromptCreationPageEntry({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params
  const finalLang = lang || i18n.defaultLocale

  return (
    <Layout locale={finalLang}>
      <PromptCreationPage />
    </Layout>
  );
}
