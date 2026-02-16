"use client";

import React from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

import { i18n } from "../../../../../i18n-config";

import styles from "./styles.module.css";

export default function Languages({
  ref,
  isOpen,
  onSelect,
}: {
  ref: any;
  isOpen: boolean;
  onSelect: (newFlag: string) => void
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <div
      className={`${styles.box} ${isOpen ? styles.open : styles.drawer}`}
      ref={ref}
    >
      {[
        i18n.locales.map((item) => {
          return (
            <Link key={item} href="#">
              <img
                src={`/flags/${item}.png`}
                alt={"Selenique.Studio"}
                className={styles.imageSuggested}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onSelect(item);
                }}
              />
            </Link>
          );
        }),
      ]}
    </div>
  );
}
