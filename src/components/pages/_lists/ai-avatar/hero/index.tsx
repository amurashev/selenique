"use client";

import { useIntl } from "react-intl";
import Link from "next/link";

import { guidePageRoute } from "@/constants/routes";

import styles from "./styles.module.css";
import { COMMISSION } from "@/constants/affiliate";

const Chevron = () => {
  return (
    <svg
      className={styles.icon}
      xmlns="http://www.w3.org/2000/svg"
      width="48px"
      height="48px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function Hero() {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.hero}>
      <div className={styles.h1Box}>
        <h1 className={styles.h1}>
          {formatMessage({ id: "ai_avatar.hero.title" }, { commission: COMMISSION })}
        </h1>
        <div className={styles.textBox}>
          <p
            dangerouslySetInnerHTML={{
              __html: formatMessage({ id: "ai_avatar.hero.text" }),
            }}
          />
        </div>
      </div>
      <div className={styles.iconBox}>
        <Chevron />
      </div>
    </div>
  );
}
