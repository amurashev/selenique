import PageWithL18n from "@/l18n";
import { Locale } from "../../../i18n-config";

export default function Layout({
  locale,
  children,
}: Readonly<{
  locale?: Locale;
  children: React.ReactNode;
}>) {
  return <PageWithL18n locale={"ru"}>{children}</PageWithL18n>;
}
