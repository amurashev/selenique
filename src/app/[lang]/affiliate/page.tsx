import { Metadata } from "next";
import { notFound } from "next/navigation";

import AffiliatePage from "@/components/pages/_landings/affiliate";
import Layout from "@/components/layout";

import { i18n, Locale } from "../../../../i18n-config";

const title = "Selenique Studio";
const description = "";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      `https://www.selenique.space/promptbooks/promptbooks.jpg`,
    ],
    title,
    description,
    url: `https://www.selenique.space/affiliate`,
    type: "website",
  },
};

export default async function HomeEntry({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  if (!i18n.locales.includes(finalLang)) {
    return notFound();
  }

  return (
    <Layout locale={finalLang}>
      <AffiliatePage />
    </Layout>
  );
}
