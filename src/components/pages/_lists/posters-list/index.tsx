"use client";

import { useIntl } from "react-intl";
import Link from "next/link";

import styles from "./page.module.css";

import { homePage } from "@/constants/routes";
import BasePageLayout from "@/components/layout/base-page";
import { Poster } from "@/content/posters";
import PosterItem from "@/components/sections/poster-item";

export default function PostersListPage({
  posters,
}: {
  posters: Poster[];
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <BasePageLayout
      route={homePage}
      title={formatMessage({ id: "posters.title_short" })}
    >
      <h1>{formatMessage({ id: "posters.title" })}</h1>
      <p>{formatMessage({ id: "posters.text" })}</p>

      <div className={styles.list}>
        {posters.map((item) => {
          return (
            <div key={item.id} className={styles.item}>
              <PosterItem item={item} />
            </div>
          );
        })}
      </div>
    </BasePageLayout>
  );
}
