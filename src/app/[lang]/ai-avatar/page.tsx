import { Metadata } from "next";
import { notFound } from "next/navigation";

import AiAvatarPage from "@/components/pages/ai-avatar";
import Layout from "@/components/layout";

import { i18n, Locale } from "../../../../i18n-config";
import getDeviceType from "@/utils/device";
import { PROMTBOOKS } from "@/content/promptbooks";
import { getPromptBookData, sortByPoints } from "@/content/promptbooks/utils";

import { getGuideData, getGuidesList } from "@/constants/guides/utils";
import { aiAvatarPageRoute } from "@/constants/routes";
import { getDictionary } from "@/l18n/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  const messages = (await getDictionary(finalLang)) as Record<string, string>;

  const title = messages["ai_avatar.meta.title"];
  const description = messages["ai_avatar.meta.description"];
  const keywords = messages['ai_avatar.meta.keywords']
  const url = aiAvatarPageRoute.getUrl(finalLang);

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

export default async function AiAvatarPageEntry({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const deviceType = await getDeviceType();
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  if (!i18n.locales.includes(finalLang)) {
    return notFound();
  }

  const promptPacks = Object.keys(PROMTBOOKS)
  .filter((item) => {
    const promptData = PROMTBOOKS[item];
    return promptData.tags.includes("avatar");
  })
  .map((item) => getPromptBookData(item));

  promptPacks.sort(sortByPoints);

  const guidesListId = getGuidesList(finalLang);
  const guidesList = guidesListId.map((item) =>
    getGuideData(item.slug, item.locale)
  );


  return (
    <Layout locale={finalLang}>
      <AiAvatarPage
        promptPacks={promptPacks}
        guidesList={guidesList}
      />
      ;
    </Layout>
  );
}
