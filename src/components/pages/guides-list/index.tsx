"use client";

import { useIntl } from "react-intl";
import Link from "next/link";

import styles from "./page.module.css";
import { GUIDES, guidesOrdered } from "@/constants/guides";

import GuideItem from "@/components/sections/guide-item";
import { ChevronLeft } from "@/components/sections/arrows";
import { homePage } from "@/constants/routes";

export default function GuidesListPage() {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.page}>
      <div className={styles.backBox}>
        <Link href={homePage.getUrl(locale)}>
          <ChevronLeft size={28} color="#ffffff" />
        </Link>
      </div>
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
