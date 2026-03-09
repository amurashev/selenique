"use client";

import { useIntl } from "react-intl";
import Link from "next/link";

import { guidePageRoute } from "@/constants/routes";

import styles from "./styles.module.css";
import { useState } from "react";

export default function Example({
  index,
  followers,
}: {
  index: string;
  followers: string;
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.box}>
      <div className={styles.item}>
        <img
          src={`/images/ai-avatar/examples/${index}.jpg`}
          className={styles.image}
          title={index}
          alt={index}
        />
        <h4 className={styles.title}>{index}</h4>
        <div>
          <strong>{followers}</strong> followers
        </div>
        <p className={styles.text}>
          {formatMessage({
            id: `ai_avatar.what_is_it.examples.${index}`,
          })}
        </p>
      </div>
    </div>
  );
}
