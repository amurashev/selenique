import type { Metadata } from "next";
import { Poiret_One } from "next/font/google";

import "./globals.css";

const font1 = Poiret_One({
  variable: "--font-heading",
  subsets: ["cyrillic"],
  weight: '400'
});

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
      </head>
      <body className={`${font1.variable}`}>
        {children}
      </body>
    </html>
  );
}
