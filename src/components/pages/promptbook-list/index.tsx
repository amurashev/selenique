"use client";

import { useIntl } from "react-intl";
import Link from "next/link";

import styles from "./page.module.css";
import { promptbooksOrdered } from "@/constants/promptbooks";

import { homePage } from "@/constants/routes";
import { ChevronLeft } from "@/components/sections/arrows";
import PromptbookList from "@/components/sections/promptbook-list";

export default function PromptbookListPage() {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.page}>
      <div className={styles.backBox}>
        <Link href={homePage.getUrl(locale)}>
          <ChevronLeft size={28} color="#ffffff" />
        </Link>
      </div>
      <main className={styles.main}>
        <h1>{formatMessage({ id: "prompt_books.title" })}</h1>
        <PromptbookList list={promptbooksOrdered} />
        <div className={styles.buttonBox}>
          <Link className={styles.seeAll} href={homePage.getUrl(locale)}>
            {formatMessage({ id: "home.prompt_books.see_all" })}
          </Link>
        </div>
      </main>
    </div>
  );
}
