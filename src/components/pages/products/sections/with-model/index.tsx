"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../sections/section";

import styles from "./styles.module.css";

export const WithModel: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Section
      title={formatMessage({ id: "with_model.title" })}
      text={formatMessage({ id: "with_model.text" })}
      isGray
      isShort
    >
      <div className={styles.sections}>
        <div className={styles.imageBox}>
          <img
            src={"/product/before_after.webp"}
            alt="Image Before"
            className={styles.image}
          />
        </div>
      </div>
    </Section>
  );
};

export default WithModel;
