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
  affiliatePageRoute,
  homePage,
} from "@/constants/routes";
import { EMAIL, INSTAGRAM_NAME, THREADS_NAME } from "@/constants/contacts";
import {
  EmailIcon,
  InstagramIcon,
  ThreadsIcon,
} from "@/components/ui/icons/socials";

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
          {formatMessage({ id: "common.name" })}
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
              href={affiliatePageRoute.getUrl(locale)}
              className={styles.menuLink}
            >
              {formatMessage({ id: "header.menu.affiliate" })}
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
        <hr className={styles.hr} />

        <div className={styles.icons}>
          <Link
            href={`https://www.threads.com/@${THREADS_NAME}`}
            target="_blank"
          >
            <ThreadsIcon size={19} color="#919496" />
          </Link>
          <Link
            href={`https://www.instagram.com/${INSTAGRAM_NAME}`}
            target="_blank"
          >
            <InstagramIcon size={18} color="#919496" />
          </Link>
          <Link href={`mailto:${EMAIL}`}>
            <EmailIcon size={21} color="#919496" />
          </Link>
        </div>
      </div>
    </div>
  );
}
