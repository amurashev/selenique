"use client";

import React from "react";
import { useIntl } from "react-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";

import PromptbookItem from "@/components/sections/promptbook-item";

export default function Related({
  related,
}: {
  related: PromptBook[];
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.related}>
      <h2>You may also like</h2>
      <div className={styles.list}>
        {related.map((item) => (
          <PromptbookItem key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
