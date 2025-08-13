"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../section";

import styles from "./styles.module.css";

export const FAQItem: React.FC<{
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
  const { formatMessage } = useIntl();
  return (
    <Section title={formatMessage({ id: "faq.title" })} isGray isShort>
      <div className={styles.sections}>
        <FAQItem
          imageSrc="/faq/screen1.png"
          name={formatMessage({ id: "faq.faq1.title" })}
          text={formatMessage({ id: "faq.faq1.text" })}
        />
        <FAQItem
          isRight
          imageSrc="/faq/screen2.png"
          name={formatMessage({ id: "faq.faq2.title" })}
          text={formatMessage({ id: "faq.faq2.text" })}
        />
        <FAQItem
          imageSrc="/faq/screen3.png"
          name={formatMessage({ id: "faq.faq3.title" })}
          text={formatMessage({ id: "faq.faq3.text" })}
        />
        <FAQItem
          isRight
          imageSrc="/faq/screen4.png"
          name={formatMessage({ id: "faq.faq4.title" })}
          text={formatMessage({ id: "faq.faq4.text" })}
        />
      </div>
    </Section>
  );
};

export default FAQ;
