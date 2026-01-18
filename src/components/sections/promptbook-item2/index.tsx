"use client";

import React from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

import { PromptBook } from "@/components/types";
import { promptBookPageRoute } from "@/constants/routes";

import styles from "./styles.module.css";

const PromptbookItem: React.FC<{
  item: PromptBook;
}> = ({ item }) => {
  const { formatMessage, locale } = useIntl();

  const { id, slug, name, summary } = item;

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
      <div className={styles.box}>
        <img src={`/promptbooks/${id}/vert.jpg`} alt={name} className={styles.image} />
      </div>
      {/* <div className={styles.button}>
        {formatMessage({ id: "common.buy_now" })}
      </div> */}
    </Link>
  );
};

export default PromptbookItem;
