import type { Metadata } from "next";
import { YandexMetricaProvider } from "next-yandex-metrica";

// import { Montserrat } from "next/font/google";

import "./globals.css";

// const font1 = Montserrat({
//   variable: "--font-heading",
//   subsets: ["cyrillic"],
//   weight: "600",
// });

export const metadata: Metadata = {
  title: "Selenique Studio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="yandex-verification" content="932ef8348a3151c0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={``}>
        <YandexMetricaProvider
          tagID={104019685}
          initParameters={{
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
          }}
          router="app"
        >
          {children}
        </YandexMetricaProvider>
      </body>
    </html>
  );
}
