"use client";

import React from "react";
import { useIntl } from "react-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";

import Link from "next/link";
import { affiliatePageRoute } from "@/constants/routes";
import { COMMISSION } from "@/constants/affiliate";

export default function RightSide({
  purchaseLink,
  boostyLink,
}: {
  purchaseLink: string;
  boostyLink: string;
}) {
  const { formatMessage, locale } = useIntl();

  const showRussiaHints = ["en", "ru"].includes(locale);

  return (
    <div className={styles.links}>
      <div className={styles.linksSmall}>
        {purchaseLink && (
          <Link className={styles.link} href={purchaseLink} target="_blank">
            {formatMessage({ id: "prompt_books.get_prompt_pack" })}
          </Link>
        )}

        {boostyLink && showRussiaHints && (
          <Link className={styles.link} href={boostyLink} target="_blank">
            {formatMessage({ id: "common.buy_now_russia" })}
          </Link>
        )}
      </div>

      {showRussiaHints && (
        <div className={styles.hint}>
          {formatMessage({ id: "prompt_books.payment_russia_hint" })}
        </div>
      )}

      {/* <div className={styles.linksSmall}>
        <div className={styles.affiliateBoxText}>
          {formatMessage(
            { id: "affiliate.texts.item1" },
            { commission: COMMISSION, strong: (el) => <strong>{el}</strong> }
          )}
        </div>

        <Link
          href={affiliatePageRoute.getUrl(locale)}
          className={styles.seeAllButton}
        >
          {formatMessage({ id: "affiliate.hero.subtitle" })}
        </Link>
      </div> */}
    </div>
  );
}
