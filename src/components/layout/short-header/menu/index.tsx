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
  homePage,
} from "@/constants/routes";

import styles from "./styles.module.css";

export default function Menu({
  ref,
  isOpen,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, react/display-name
  ref: any;
  isOpen: boolean;
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <div ref={ref} className={`${isOpen ? styles.open : styles.drawer}`}>
      <div className={styles.linksBox}>
        <Link className={styles.brand} href={homePage.getUrl(locale)}>
          Selenique Studio
        </Link>
        <hr className={styles.hr} />
        <ul className={styles.menuList}>
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
