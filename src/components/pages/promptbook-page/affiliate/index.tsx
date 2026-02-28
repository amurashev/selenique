"use client";

import React from "react";
import { useIntl } from "react-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";
import { COMMISSION } from "@/constants/affiliate";

import { affiliatePageRoute } from "@/constants/routes";

export default function Affiliate() {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.affiliateBox}>
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
    </div>
  );
}
