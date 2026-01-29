"use client";

import React from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

import styles from "./styles.module.css";
import { promptsCategoryPageRoute } from "@/constants/routes";
import { getPromptCategoryTag, PROMPT_CATEGORIES } from "@/constants/prompts";

export default function Categories() {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.box}>
      <strong>
        {formatMessage({ id: "prompt_books.filter_by_category" })}:
      </strong>
      <div className={styles.list}>
        {PROMPT_CATEGORIES.map(item => (
          <Link
            key={item} 
            href={promptsCategoryPageRoute.getUrl(locale, {
              params: {
                slug: item,
              }
            })}
            className={styles.item}>{formatMessage({ id: getPromptCategoryTag(item) })}</Link>
        ))}
      </div>
    </div>
  );
}
