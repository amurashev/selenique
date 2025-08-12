"use client";

import React from "react";
import { useIntl } from "react-intl";

import GuideItem from "../guide-item";

import styles from "./styles.module.css";

export const Guides: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <section className={styles.box}>
      <div className={styles.boxContainer}>
        <h2 className={styles.title}>{formatMessage({ id: "guides.title" })}</h2>

        <div className={styles.guides}>
          <GuideItem name="Free Realism Guide (PDF)" image="" />
        </div>
      </div>
    </section>
  );
};

export default Guides;
