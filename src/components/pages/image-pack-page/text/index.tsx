"use client";

import React from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";

export  function TextBox({ text }: { text: string }) {
  const { formatMessage, locale } = useIntl();

  return (
    <div
      className={styles.text}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
}

export  function TextTag({ text }: { text: string }) {
  const { formatMessage, locale } = useIntl();

  return (
    <div
      className={styles.textTag}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
}
