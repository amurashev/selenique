"use client";

import Link from "next/link";
import { useIntl } from "react-intl";
import { useMetrica } from "next-yandex-metrica";

import styles from "./styles.module.css";

export default function Join(
  {
    // purchaseLink,
    // summary,
  }: {
    // purchaseLink: string;
    // summary?: string;
  }
) {
  const { formatMessage, locale } = useIntl();
  const { reachGoal } = useMetrica();

  return (
    <div>
      <p className={styles.summary}>
        {formatMessage({ id: "affiliate.join.text" })}
      </p>
      <div className={styles.links}>
        <Link
          className={styles.link}
          href={"https://seleniquestudio.gumroad.com/affiliates"}
          target="_blank"
          // onClick={() => {
          //   reachGoal("virtualInfluencePage_continue-Click");
          // }}
        >
          {formatMessage({ id: "affiliate.join.cta" })}
        </Link>
      </div>
    </div>
  );
}
