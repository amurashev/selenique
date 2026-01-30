import { redirect } from "next/navigation";
import type { Metadata } from "next";

import Layout from "@/components/layout";
import PromptbookPage from "@/components/pages/promptbook-page";

import { promptBookListPageRoute, promptBookPageRoute } from "@/constants/routes";
import { PROMTBOOKS } from "@/constants/promptbooks";

import { i18n, Locale } from "../../../../../i18n-config";
import { getDictionary } from "@/l18n/dictionaries";
import { getPromptsListKeywords } from "@/constants/prompts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lang: Locale }>;
}): Promise<Metadata> {
  const { slug, lang } = await params;

  const messages = await getDictionary(lang) as Record<string, string>

  const data = PROMTBOOKS[slug || "null"];

  const title = `${data.name} | Gemini Prompts`;
  const description = data.summary;
  const keywords = messages[getPromptsListKeywords()]

  const url = promptBookPageRoute.getUrl(lang, {
    params: {
      slug
    }
  })

  return {
    title,
    description,
    keywords,
    openGraph: {
      images: [
        `https://www.selenique.space/promptbooks/${data.id}/${data.images[0]}.jpg`,
      ],
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
  params: Promise<{ slug: string; lang: Locale }>;
}) {
  const { slug, lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  const data = PROMTBOOKS[slug || "null"];

  if (!data) {
    return redirect(promptBookListPageRoute.getUrl(finalLang));
  }

  let relatedIds: string[] = []

  if (data.tags.length && data.tags[0]) {
    // TODO: improve related search
    const marks = Object
      .keys(PROMTBOOKS)
      .filter(
        itemSlug => PROMTBOOKS[itemSlug].type === data.type
        && slug !== itemSlug
      ).map(itemSlug => {
        const { tags } = PROMTBOOKS[itemSlug]
        let mark = 0

        tags.forEach(tag => {
          if (data.tags.includes(tag)) mark++
        })

        return {
          itemSlug,
          mark,
        }
      })

      marks.sort((a,b) => b.mark - a.mark)
      relatedIds = marks.slice(0,3).map(item => item.itemSlug)
  }

  const related = relatedIds.map(itemSlug => ({
    ...PROMTBOOKS[itemSlug],
    slug: itemSlug
  }))

  return (
    <Layout locale={finalLang}>
      <PromptbookPage
        data={{
          ...data,
          slug,
        }}
        related={related}
      />
    </Layout>
  );
}
