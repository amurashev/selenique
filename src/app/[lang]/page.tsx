import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import HomePage from "@/components/pages/home";
import Layout from "@/components/layout";

import { i18n, Locale } from "../../../i18n-config";
import getDeviceType from "@/utils/device";

// export async function generateStaticParams() {
//   return [{ lang: "en" }, { lang: "ru" }];
// }

export const metadata: Metadata = {
  title: "Selenique Studio: We are a creative duo specializing in AI-powered visual content.",
  description:
    "Our work combines technology and artistry to create images that feel authentic, expressive, and emotionally engaging. ✨We collaborate with brands and creators who value strong storytelling and distinctive aesthetics - from AI photoshoots and branded visuals to tailored prompt design.😎",
};

export default async function HomeEntry({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const deviceType = await getDeviceType();
  const { lang } = await params
  const finalLang = lang || i18n.defaultLocale

  if (!i18n.locales.includes(finalLang)) {
    return notFound()
  }

  return (
    <Layout locale={finalLang}>
      <HomePage deviceType={deviceType} />;
    </Layout>
  );
}
