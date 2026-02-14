"use client";

import styles from "./page.module.css";

import ShortHeader from "@/components/layout/short-header";
import Footer from "@/components/layout/footer";

import { Route, BaseRouteType } from "@/utils/routing";

export default function BasePageLayout({
  children,
  route,
  title,
  seoContent,
}: {
  children: React.ReactNode;
  route?: Route<BaseRouteType>;
  title?: string;
  seoContent?: string;
}) {
  return (
    <div className={styles.page}>
      <ShortHeader route={route} title={title} />
      <main className={styles.main}>
        {children}

        {seoContent && (
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: seoContent,
            }}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
