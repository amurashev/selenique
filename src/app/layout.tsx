import type { Metadata } from "next";
import { Poiret_One, Oswald } from "next/font/google";

import "./globals.css";

const font1 = Poiret_One({
  variable: "--font-heading",
  subsets: ["cyrillic"],
  weight: '400'
});

// const font2 = Oswald({
//   variable: "--font-geist-sans",
//   subsets: ["cyrillic"],
// });

export const metadata: Metadata = {
  title: "Selenique: AI Fashion Ads & WOW Resources",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${font1.variable}`}>
        {children}
      </body>
    </html>
  );
}
