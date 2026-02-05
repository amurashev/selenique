"use client";

import React from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

import styles from "./styles.module.css";

export default function Categories(
  { data, selectedIndex, onItemClick }: 
  { data: string[], selectedIndex: string, onItemClick: (value: string) => void }
) {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.list}>
      {data.map((item) => (
        <span
          key={item}
          onClick={() => onItemClick(item)}
          className={selectedIndex === item ? styles.itemIsActive : styles.item}>
            {/* {formatMessage({ id: item })} */}
            {item}
          </span>
      ))}
    </div>
  );
}
