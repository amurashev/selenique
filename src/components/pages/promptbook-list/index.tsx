"use client";

import Link from "next/link";
import { useIntl } from "react-intl";

import styles from "./page.module.css";
import { PROMTBOOKS } from "@/constants/promptbooks";
import { promptBookPageRoute } from "@/constants/routes";
import Header from "@/components/layout/header";

export default function PromptbookListPage() {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1>Our Prompt Books</h1>
        <div className={styles.list}>
          {Object.keys(PROMTBOOKS).map((slug) => {
            const { name, images} = PROMTBOOKS[slug];
            return (
              <Link
                key={slug}
                href={promptBookPageRoute.getUrl(locale, {
                  params: {
                    slug,
                  },
                })}
                className={styles.card}
              >
                <img src={images[0]} alt={name} className={styles.image} />
                {/* <div className={styles.textBlock}>
                  <h3 className={styles.title}>{name}</h3>
                </div> */}
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
