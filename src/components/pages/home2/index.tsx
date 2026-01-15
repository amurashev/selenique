"use client";

import Link from "next/link";
import { useIntl } from "react-intl";

import styles from "./page.module.css";

import Header from "@/components/layout/header";
import { SERVICES } from "@/constants/services";
import Footer from "@/components/layout/footer";
import { PROMTBOOKS, promptbooksOrdered } from "@/constants/promptbooks";
import { GUIDES, guidesOrdered } from "@/constants/guides";
import {
  promptBookListPageRoute,
  guidesListPageRoute,
} from "@/constants/routes";

import PromptbookItem from "@/components/sections/promptbook-item";
import GuideItem from "@/components/sections/guide-item";
import Profile from "./profile";

export default function HomePage() {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.inner}>
          <Profile />
          <div className={styles.section}>
            <h3>{formatMessage({ id: "home.prompt_books.popular" })}</h3>
            <div className={styles.list}>
              {promptbooksOrdered.slice(0, 4).map((slug) => {
                const item = {
                  ...PROMTBOOKS[slug],
                  slug,
                };
                return <PromptbookItem key={slug} item={item} />;
              })}
            </div>

            <div className={styles.buttonBox}>
              <Link
                className={styles.seeAll}
                href={promptBookListPageRoute.getUrl(locale)}
              >
                {formatMessage({ id: "home.prompt_books.see_all" })}
              </Link>
            </div>
          </div>

          {/* <div className={styles.section}>
              <h1>{formatMessage({ id: "home.guides.title" })}</h1>
              <div className={styles.list}>
                {guidesOrdered.slice(0, 6).map((slug) => {
                  const item = {
                    ...GUIDES[slug],
                    slug,
                  };
                  return <GuideItem key={slug} item={item} />;
                })}
              </div>

              <div className={styles.buttonBox}>
                <Link
                  className={styles.linkSecondary}
                  href={guidesListPageRoute.getUrl(locale)}
                >
                  {formatMessage({ id: "home.guides.see_all" })}
                </Link>
              </div>
            </div> */}
        </div>
      </main>
    </div>
  );
}
