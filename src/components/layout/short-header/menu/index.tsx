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
  aiAvatarPageRoute,
  postersListPageRoute,
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
          {[
            [promptBookListPageRoute.getUrl(locale), "footer.prompts"],
            [guidesListPageRoute.getUrl(locale), "footer.guides"],
            [postersListPageRoute.getUrl(locale), "posters.title_short"],
            [aiAvatarPageRoute.getUrl(locale), "footer.ai_avatar"],
            [affiliatePageRoute.getUrl(locale), "header.menu.affiliate"],
            [
              productPortfolioPageRoute.getUrl(locale, {
                params: { type: "all" },
              }),
              "header.menu.portfolio",
            ],
          ].map((item) => (
            <li className={styles.menuItem}>
              <Link href={item[0]} className={styles.menuLink}>
                {formatMessage({ id: item[1] })}
              </Link>
            </li>
          ))}
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
