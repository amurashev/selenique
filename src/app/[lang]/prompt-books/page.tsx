import { promptBookListPageRoute } from "@/constants/routes";
import { redirect } from "next/navigation";

import { i18n, Locale } from "../../../../i18n-config";

export default async function PromptbookPageEntry({
  params,
}: {
  params: Promise<{ slug: string; lang: Locale }>;
}) {
  const { lang } = await params;
  const finalLang = lang || i18n.defaultLocale;

  return redirect(promptBookListPageRoute.getUrl(finalLang));
}
