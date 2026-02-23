import { Metadata } from "next";

import { i18n, Locale } from "../../../../i18n-config";
import Layout from "@/components/layout";
import { promptBundleListPageRoute } from "@/constants/routes";

import PromptsCategoryPage from "@/components/pages/_lists/promptbook-category";
import { getDictionary } from "@/l18n/dictionaries";
import { PROMTBOOKS } from "@/content/promptbooks";
import { getPromptBookData } from "@/content/promptbooks/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const messages = (await getDictionary(lang)) as Record<string, string>;

  const title = messages["prompts.categories.bundles.title"];
  const description = messages["prompts.categories.bundles.description"];
  const keywords = messages["prompts.categories.bundles.keywords"];
  const url = promptBundleListPageRoute.getUrl(lang);

  return {
    title,
    description,
    keywords,
    openGraph: {
      images: [`https://www.selenique.space/promptbooks/promptbooks.jpg`],
      title: title,
      description,
      url: `https://www.selenique.space${url}`,
      type: "website",
    },
  };
}

export default async function PromptBundlesPageEntry({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  const bundles = Object.keys(PROMTBOOKS)
    .filter((item) => {
      const promptData = PROMTBOOKS[item];
      return promptData.type === "bundle";
    })
    .map((item) => getPromptBookData(item));

  return (
    <Layout locale={finalLang}>
      <PromptsCategoryPage slug={"bundles"} promptBooks={bundles} />
    </Layout>
  );
}
