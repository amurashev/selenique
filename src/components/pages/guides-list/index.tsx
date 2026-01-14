"use client";

import { useIntl } from "react-intl";

import styles from "./page.module.css";
import { GUIDES, guidesOrdered } from "@/constants/guides";

import Header from "@/components/layout/header";
import GuideItem from "@/components/sections/guide-item";

export default function GuidesListPage() {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1>{formatMessage({ id: "home.guides.title" })}</h1>
        <div className={styles.list}>
          {guidesOrdered.map((slug) => {
            const item = {
              ...GUIDES[slug],
              slug,
            };
            return <GuideItem key={slug} item={item} />;
          })}
        </div>
      </main>
    </div>
  );
}
