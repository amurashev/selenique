"use client";

import React from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";

export const Section: React.FC<{
  name: string;
  text: string;
  imageSrc?: string;
  isRight?: boolean;
}> = ({ name, text = "", imageSrc = "/screen_1.png", isRight = false }) => {
  return (
    <section className={styles.section}>
      <div
        className={`${styles.sectionContainer} ${
          isRight ? styles.sectionContainerRight : ""
        }`}
      >
        <div
          className={`${styles.sectionTextBox} ${
            isRight ? styles.sectionTextBoxRight : ""
          }`}
        >
          <h3 className={styles.sectionTitle}>{name}</h3>
          <p className={styles.sectionText}>{text}</p>
        </div>

        <div
          className={`${styles.sectionVisual}  ${
            isRight ? styles.sectionVisualRight : ""
          }`}
        >
          <img
            src={imageSrc}
            alt="Fashion image"
            className={styles.visualImage}
          />
        </div>
      </div>
    </section>
  );
};

export const FAQ: React.FC = () => {
  const { formatMessage, locale } = useIntl();
  return (
    <section className={styles.box}>
      <div className={styles.boxContainer}>
        <h2 className={styles.title}>{formatMessage({ id: "faq.title" })}</h2>
        <div className={styles.sections}>
          <Section
            imageSrc="/screen1.png"
            name={formatMessage({ id: "faq.faq1.title" })}
            text={formatMessage({ id: "faq.faq1.text" })}
          />
          <Section
            isRight
            imageSrc="/screen2.png"
            name={formatMessage({ id: "faq.faq2.title" })}
            text={formatMessage({ id: "faq.faq2.text" })}
          />
          <Section
            imageSrc="/screen3.png"
            name={formatMessage({ id: "faq.faq3.title" })}
            text={formatMessage({ id: "faq.faq3.text" })}
          />
          <Section
            isRight
            imageSrc="/screen4.png"
            name={formatMessage({ id: "faq.faq4.title" })}
            text={formatMessage({ id: "faq.faq4.text" })}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
