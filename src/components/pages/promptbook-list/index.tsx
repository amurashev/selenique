"use client";

import Link from "next/link";
import { useIntl } from "react-intl";

import styles from "./page.module.css";

export default function PromptbookListPage() {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Promptbook List page
      </main>
    </div>
  );
}
