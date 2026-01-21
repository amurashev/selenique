import { Metadata } from "next";

import Layout from "@/components/layout";

import GuidesListPage from "@/components/pages/guides-list";

import { i18n, Locale } from "../../../../i18n-config";

export const metadata: Metadata = {
  title: "AI Guides & Creative Resources for Digital Creators",
  description:
    "Practical AI guides and creative resources for designers, creators, and digital professionals. Learn faster, work smarter, and build consistent results with AI tools.",
};

export default async function PromptbookPageEntry({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  return (
    <Layout locale={finalLang}>
      <GuidesListPage />
    </Layout>
  );
}
