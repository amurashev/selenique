"use client";

import React from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";

import { affiliatePageRoute } from "@/constants/routes";

export default function RightSide({
  backUrl,
  purchaseLink,
  boostyLink,
}: {
  backUrl: string;
  purchaseLink: string;
  boostyLink: string;
}) {
  const { formatMessage, locale } = useIntl();
  const showRussiaHints = ["en", "ru"].includes(locale);

  return (
    <div className={styles.rightSideBox}>
      <div className={styles.links}>
        <div className={styles.linksSmall}>
          {purchaseLink && (
            <Link className={styles.link} href={purchaseLink} target="_blank">
              {formatMessage({ id: "clipart.get_etsy" })}
            </Link>
          )}
{/* 
          {boostyLink && showRussiaHints && (
            <Link className={styles.link} href={boostyLink} target="_blank">
              {formatMessage({ id: "common.buy_now_russia" })}
            </Link>
          )} */}
        </div>

        {showRussiaHints && (
          <div className={styles.hint}>
            {formatMessage({ id: "prompt_books.payment_russia_hint" })}
          </div>
        )}

        {/* <div className={styles.linksSmall}>
          <Link className={styles.seeAllButton} href={backUrl}>
            {formatMessage({ id: "prompt_books.see_all" })}
          </Link>

          <Link
            href={affiliatePageRoute.getUrl(locale)}
            className={styles.seeAllButton}
          >
            {formatMessage({ id: "affiliate.hero.subtitle" })}
          </Link>
        </div> */}
      </div>
    </div>
  );
}
