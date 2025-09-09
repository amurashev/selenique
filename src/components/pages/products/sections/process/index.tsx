"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../sections/section";

import styles from "./styles.module.css";

export const FAQItem: React.FC<{
  name: string;
  text: string;
  num: number;
  imageSrc?: string;
  isRight?: boolean;
}> = ({ name, text, num, imageSrc = "/screen_1.png", isRight = false }) => {
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
          <h5
            className={styles.sectionTitle}
            dangerouslySetInnerHTML={{
              __html: `${num}. ${name}`,
            }}
          />

          <p
            className={styles.sectionText}
            dangerouslySetInnerHTML={{
              __html: `${text}`,
            }}
          />
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

export const Process: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Section
      title={formatMessage({ id: "products.process.title" })}
      side="left"
      isGray={true}
    >
      <div className={styles.sections}>
        <FAQItem
          isRight
          imageSrc="/product/process/screen1.webp"
          name={formatMessage({ id: "products.process.item1.title" })}
          text={formatMessage({ id: "products.process.item1.text" })}
          num={1}
        />
        <FAQItem
          isRight
          imageSrc="/product/process/screen2.webp"
          name={formatMessage({ id: "products.process.item2.title" })}
          text={formatMessage({ id: "products.process.item2.text" })}
          num={2}
        />
        <FAQItem
          isRight
          imageSrc="/product/process/screen3.webp"
          name={formatMessage({ id: "products.process.item3.title" })}
          text={formatMessage({ id: "products.process.item3.text" })}
          num={3}
        />
        <FAQItem
          isRight
          imageSrc="/product/process/screen4.webp"
          name={formatMessage({ id: "products.process.item4.title" })}
          text={formatMessage({ id: "products.process.item4.text" })}
          num={4}
        />
      </div>
    </Section>
  );
};

export default Process;
