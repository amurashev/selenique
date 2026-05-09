import { redirect } from "next/navigation";
import type { Metadata } from "next";

import Layout from "@/components/layout";
import ClipartBundlePage from "@/components/pages/clipart-bundle-page";

import {
  clipartBundleItemPageRoute,
  clipartBundlesListPageRoute,
  promptBookListPageRoute,
  promptBookPageRoute,
} from "@/constants/routes";
import { PROMTBOOKS } from "@/content/promptbooks";

import { i18n, Locale } from "../../../../../i18n-config";
import { getDictionary } from "@/l18n/dictionaries";
import {
  getPromptBookData,
  getPromptBookId,
  sortByPoints,
} from "@/content/promptbooks/utils";
import { PromptBook } from "@/components/types";
import { getClipartBundleData, getClipartBundleId } from "@/content/clipart-bundle/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; lang: Locale }>;
}): Promise<Metadata> {
  const { slug, lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  const itemData = getClipartBundleData(slug, finalLang);

  const title = `${itemData.title}`;
  const description = `${itemData.description}`;
  const keywords = itemData.keywords

  const url = clipartBundleItemPageRoute.getUrl(lang, {
    params: {
      slug,
    },
  });

  return {
    title,
    description,
    keywords,
    openGraph: {
      images: [],
      title,
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

  if (!slug) {
    return redirect(clipartBundlesListPageRoute.getUrl(finalLang));
  }

  const id = getClipartBundleId(slug);

  if (!id) {
    return redirect(clipartBundlesListPageRoute.getUrl(finalLang));
  }

  const itemData = getClipartBundleData(slug, finalLang);

  if (!itemData) {
    return redirect(clipartBundlesListPageRoute.getUrl(finalLang));
  }

  return (
    <Layout locale={finalLang}>
      <ClipartBundlePage
        data={itemData}
        // related={related}
        // bundleContent={bundleContent}
        // bestSellers={bestSellers}
      />
    </Layout>
  );
}
