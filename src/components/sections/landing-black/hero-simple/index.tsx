"use client";

import { useIntl } from "react-intl";

import styles from "./styles.module.css";

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

export default function HeroSimple({ title, text }: { title: string; text: string }) {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.hero}>
      <div className={styles.h1Box}>
        <h1 className={styles.h1}>{title}</h1>
        <div className={styles.textBox}>
          <p
            dangerouslySetInnerHTML={{
              __html: text,
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
