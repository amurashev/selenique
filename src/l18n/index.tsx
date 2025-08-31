import { i18n, Locale } from "../../i18n-config";

import { getDictionary } from "./dictionaries";
import ServerIntlProvider from "./serverIntlProvider";

export default async function PageWithL18n({
  locale = i18n.defaultLocale,
  children,
}: {
  locale?: Locale;
  children: React.ReactNode;
}) {
  const messages = await getDictionary(locale);

  return (
    <ServerIntlProvider locale={locale} messages={messages}>
      {children}
    </ServerIntlProvider>
  );
}
