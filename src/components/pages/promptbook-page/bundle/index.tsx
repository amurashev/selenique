"use client";

import React from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";

import PromptbookItem from "@/components/sections/promptbook-item2";

import { PROMTBOOKS } from "@/constants/promptbooks";

export default function Bundle({ data }: { data: PromptBook }) {
  const { formatMessage, locale } = useIntl();
  const packIds = data.pack || [];

  const tempSlugArray = Object.keys(PROMTBOOKS).filter((slug) => {
    const pack = PROMTBOOKS[slug];
    return packIds.includes(pack.id);
  });

  return (
    <div>
      <h3>{formatMessage({ id: "prompt_books.bundle_contains" })}:</h3>
      <div className={styles.list}>
        {tempSlugArray.map((slug) => {
          const item = {
            ...PROMTBOOKS[slug],
            slug,
          };
          return <PromptbookItem key={slug} item={item} />;
        })}
      </div>
    </div>
  );
}
