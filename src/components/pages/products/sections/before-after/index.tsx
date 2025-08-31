"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../sections/section";

import styles from "./styles.module.css";

export const BeforeAfter: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Section
      title={formatMessage({ id: "before_after.title" })}
      text={formatMessage({ id: "before_after.text" })}
      isGray
      isShort
    >
      <div className={styles.sections}>
        <div className={styles.imageBox}>
          <img
            src={"/product/before.webp"}
            alt="Image Before"
            className={styles.image}
          />
        </div>
        <div className={styles.imageBox}>
          <img
            src={"/product/after.webp"}
            alt="Image After"
            className={styles.image}
          />
        </div>
      </div>
    </Section>
  );
};

export default BeforeAfter;
