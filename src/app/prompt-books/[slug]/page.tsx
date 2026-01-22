import { promptBookPageRoute } from "@/constants/routes";
import { redirect } from "next/navigation";
import { i18n, Locale } from "../../../../i18n-config";

export default async function PromptbookPageEntry({
  params,
}: {
  params: Promise<{ slug: string; lang: Locale }>;
}) {
  const { slug, lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  return redirect(promptBookPageRoute.getUrl(finalLang, {
    params: {
      slug,
    }
  }));
}
