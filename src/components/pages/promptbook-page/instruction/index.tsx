"use client";

import React from "react";
import { useIntl } from "react-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";

import { ChevronRight } from "@/components/sections/arrows";

export default function Instruction({
  hasCharacterReference,
}: {
  hasCharacterReference: boolean;
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.box}>
      <h3 className={styles.header}>
        {formatMessage({
          id: hasCharacterReference
            ? "prompt_books.instruction.title1"
            : "prompt_books.instruction.title2",
        })}
      </h3>
      <p>
        {formatMessage({
          id: hasCharacterReference
            ? "prompt_books.instruction.text1"
            : "prompt_books.instruction.text2",
        })}
      </p>

      {hasCharacterReference ? (
        <ul className={styles.list}>
          <li className={styles.listItem}>
            {formatMessage({ id: "prompt_books.instruction.item1" })}
          </li>
          <li className={styles.listItemArrow}>
            <ChevronRight color="#222222" />
          </li>
          <li className={styles.listItem}>
            {formatMessage({ id: "prompt_books.instruction.item2" })}
          </li>
          <li className={styles.listItemArrow}>
            <ChevronRight color="#222222" />
          </li>
          <li className={styles.listItem}>
            {formatMessage({ id: "prompt_books.instruction.item3" })}
          </li>
        </ul>
      ) : (
        <ul className={styles.list}>
          <li className={styles.listItem}>
            {formatMessage({ id: "prompt_books.instruction.item2" })}
          </li>
          <li className={styles.listItemArrow}>
            <ChevronRight color="#222222" />
          </li>
          <li className={styles.listItem}>
            {formatMessage({ id: "prompt_books.instruction.item4" })}
          </li>
        </ul>
      )}
    </div>
  );
}
