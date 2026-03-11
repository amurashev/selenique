import { Metadata } from "next";
import { notFound } from "next/navigation";

import AiAvatarGeneratorPage from "@/components/pages/ai-avatar/generator";
import Layout from "@/components/layout";

import { i18n, Locale } from "../../../../../i18n-config";
import getDeviceType from "@/utils/device";
import { PROMTBOOKS } from "@/content/promptbooks";
import { getPromptBookData, sortByPoints } from "@/content/promptbooks/utils";

import { getGuideData, getGuidesList } from "@/constants/guides/utils";
import { aiAvatarGeneratorPageRoute, homePage } from "@/constants/routes";
import { getDictionary } from "@/l18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  const messages = (await getDictionary(finalLang)) as Record<string, string>;

  const title = messages["ai_avatar.generator.title"];
  const description = messages["ai_avatar.generator.text"];
  const keywords = messages['ai_avatar.generator.meta.keywords'] || ''
  const url = aiAvatarGeneratorPageRoute.getUrl(finalLang);

  return {
    title,
    description,
    keywords,
    openGraph: {
      images: [`https://www.selenique.space/promptbooks/33/1.jpg`], // TODO: update
      title,
      description,
      url: `https://www.selenique.space${url}`,
      type: "website",
    },
  };
}

export default async function AiAvatarGeneratorPageEntry({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  if (!i18n.locales.includes(finalLang)) {
    return notFound();
  }

  const promptPack = getPromptBookData('portrait-creation-toolkit')

  return (
    <Layout locale={finalLang}>
      <AiAvatarGeneratorPage promptPack={promptPack} />
    </Layout>
  );
}
