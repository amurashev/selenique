"use client";

import React from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

import { PromptBook } from "@/components/types";
import { promptBookPageRoute, guidePageRoute } from "@/constants/routes";

import styles from "./styles.module.css";

const PromptbookItem: React.FC<{
  item: PromptBook;
}> = ({ item }) => {
  const { formatMessage, locale } = useIntl();

  const { id, slug, name, type, summary } = item;

  const url = type === "guide" ? guidePageRoute.getUrl(locale, {
    params: {
      slug,
    },
  }) : promptBookPageRoute.getUrl(locale, {
    params: {
      slug,
    },
  })

  // TODO" localise
  const fixedId = locale === "ru" && id === 33 ? 41 : 33

  return (
    <Link
      key={slug}
      href={url}
      className={styles.card}
    >
      <div className={styles.box}>
        <img src={`/promptbooks/${fixedId}/vert.jpg`} title={name} alt={name} className={styles.image} />
      </div>
      {/* <div className={styles.button}>
        {formatMessage({ id: "common.buy_now" })}
      </div> */}
    </Link>
  );
};

export default PromptbookItem;
