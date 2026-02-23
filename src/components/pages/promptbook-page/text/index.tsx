"use client";

import React from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";

export default function Text({ text }: { text: string }) {
  const { formatMessage, locale } = useIntl();

  return (
    <p
      className={styles.text}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
}
