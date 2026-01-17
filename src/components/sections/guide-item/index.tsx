"use client";

import React, { useState } from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

import styles from "./styles.module.css";
import { Guide } from "@/components/types";
import { guidePageRoute } from "@/constants/routes";

const GuideItem: React.FC<{
  item: Guide;
}> = ({ item }) => {
  const { formatMessage, locale } = useIntl();

  const { id, slug, name, summary } = item;
  return (
    <Link
      key={slug}
      href={guidePageRoute.getUrl(locale, {
        params: {
          slug,
        },
      })}
      className={styles.card}
    >
      <div className={styles.box}>
        <img
          src={`/guides/${id}/vert.jpg`}
          alt={name}
          className={styles.image}
        />
        <div className={styles.textBlock}>
          <div className={styles.title}>{name}</div>
          <div className={styles.text}>{summary}</div>
        </div>
      </div>
      <div className={styles.button}>
        {formatMessage({ id: "common.buy_now" })}
      </div>
    </Link>
  );
};

export default GuideItem;
