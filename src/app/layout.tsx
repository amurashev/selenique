import type { Metadata } from "next";
import { YandexMetricaProvider } from "next-yandex-metrica";

// import { } from "next/font/google";

import "./globals.css";
import Link from "next/link";

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
    <html>
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
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={``}>
        {/* <ul>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/ru">RU</Link>
          </li>
          <li>
            <Link href="/en">EN</Link>
          </li>
          <li>
            <Link href="/es">ES</Link>
          </li>
        </ul> */}
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
