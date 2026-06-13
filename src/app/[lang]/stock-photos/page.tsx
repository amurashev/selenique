import { Metadata } from "next";

import Layout from "@/components/layout";

import ImagesPacksListPage from "@/components/pages/_lists/images-packs-list";

import { i18n, Locale } from "../../../../i18n-config";
import { stockPhotosListPageRoute } from "@/constants/routes";
import { getDictionary } from "@/l18n/dictionaries";
import { getClipartBundlesList, getClipartBundleData } from "@/content/clipart-bundle/utils";
import { ClipartBundle } from "@/content/clipart-bundle";
import { ImagesPack } from "@/content/images-packs";
import { getImagePackData, getImagePacksList } from "@/content/images-packs/utils";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale

  const messages = await getDictionary(finalLang) as Record<string, string>

  const title = messages["image_packs.title"]
  const description = messages["image_packs.description"]
  // const keywords = messages['']
  const url = stockPhotosListPageRoute.getUrl(finalLang)

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

export default async function ClipartBundleListEntry({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  const imagesPacksId = getImagePacksList(finalLang);
  const imagesPacks: ImagesPack[] = imagesPacksId.map((item) =>
    getImagePackData(item, finalLang)
  );

  return (
    <Layout locale={finalLang}>
      <ImagesPacksListPage imagesPacks={imagesPacks} />
    </Layout>
  );
}
