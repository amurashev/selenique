"use client";

import { useIntl } from "react-intl";
import Link from "next/link";

import styles from "./page.module.css";
import { guidesOrdered } from "@/constants/promptbooks";

import { homePage } from "@/constants/routes";
import PromptbookList from "@/components/sections/promptbook-list";
import ShortHeader from "@/components/sections/short-header";

export default function GuidesListPage() {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.page}>
      <ShortHeader
        route={homePage}
        title={formatMessage({ id: "guides.title_short" })}
      />
      <main className={styles.main}>
        <h1>{formatMessage({ id: "guides.title" })}</h1>
        <p>{formatMessage({ id: "guides.text" })}</p>
        <PromptbookList list={[...guidesOrdered]} />
        <div className={styles.buttonBox}>
          <Link className={styles.seeAll} href={homePage.getUrl(locale)}>
            {formatMessage({ id: "home.guides.see_all" })}
          </Link>
        </div>
      </main>
    </div>
  );
}
