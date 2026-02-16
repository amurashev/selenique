"use client";

import React, { useState, useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import { usePathname, redirect } from "next/navigation";
import Link from "next/link";

import {
  promptBookListPageRoute,
  guidesListPageRoute,
  promptBundleListPageRoute,
  productPortfolioPageRoute,
} from "@/constants/routes";

import styles from "./styles.module.css";

export default function Menu({ ref, isOpen }: { ref: any; isOpen: boolean }) {
  const { formatMessage, locale } = useIntl();

  return (
    <div
      ref={ref}
      className={`${styles.box} ${isOpen ? styles.open : styles.drawer}`}
    >
      <div className={styles.linksBox}>
        <ul className={styles.menuList}>
          <span className={styles.menuHeader}>
            {formatMessage({ id: "footer.navigation" })}
          </span>
          <li className={styles.menuItem}>
            <Link
              href={promptBookListPageRoute.getUrl(locale)}
              className={styles.menuLink}
            >
              {formatMessage({ id: "footer.prompts" })}
            </Link>
          </li>

          <li className={styles.menuItem}>
            <Link
              href={promptBundleListPageRoute.getUrl(locale)}
              className={styles.menuLink}
            >
              {formatMessage({ id: "footer.prompt_bundles" })}
            </Link>
          </li>

          <li className={styles.menuItem}>
            <Link
              href={guidesListPageRoute.getUrl(locale)}
              className={styles.menuLink}
            >
              {formatMessage({ id: "footer.guides" })}
            </Link>
          </li>

          <li className={styles.menuItem}>
            <Link
              href={productPortfolioPageRoute.getUrl(locale, {
                params: { type: "all" },
              })}
              className={styles.menuLink}
            >
              {formatMessage({ id: "header.menu.portfolio" })}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
