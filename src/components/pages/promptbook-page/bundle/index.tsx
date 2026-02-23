"use client";

import React from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";

import PromptbookItem from "@/components/sections/promptbook-item";

export default function Bundle({
  bundleContent,
}: {
  bundleContent: PromptBook[];
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <div>
      <h3>{formatMessage({ id: "prompt_books.bundle_contains" })}:</h3>
      <div className={styles.list}>
        {bundleContent.map((item) => {
          return <PromptbookItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
