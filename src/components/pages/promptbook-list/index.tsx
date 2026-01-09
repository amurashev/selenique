"use client";

import { useIntl } from "react-intl";

import styles from "./page.module.css";
import { PROMTBOOKS, promptbooksOrdered } from "@/constants/promptbooks";

import Header from "@/components/layout/header";
import PromptbookItem from "@/components/sections/promptbook-item";

export default function PromptbookListPage() {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1>Our Prompt Books</h1>
        <div className={styles.list}>
          {promptbooksOrdered.map((slug) => {
            const item = {
              ...PROMTBOOKS[slug],
              slug
            };
            return (
              <PromptbookItem key={slug} item={item} />
            );
          })}
        </div>
      </main>
    </div>
  );
}
