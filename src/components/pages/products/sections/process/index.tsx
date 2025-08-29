"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../sections/section";

import styles from "./styles.module.css";

export const FAQItem: React.FC<{
  name: string;
  num: number;
  imageSrc?: string;
  isRight?: boolean;
}> = ({ name, num, imageSrc = "/screen_1.png", isRight = false }) => {
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
          <p
            className={styles.sectionTitle}
            dangerouslySetInnerHTML={{
              __html: `${num}. ${name}`,
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
    <Section title={formatMessage({ id: "process.title" })} size="960" isGray>
      <div className={styles.sections}>
        <FAQItem
          isRight
          imageSrc="/product/process/screen1.png"
          name={formatMessage({ id: "process.item1" })}
          num={1}
        />
        <FAQItem
          isRight
          imageSrc="/product/process/screen2.png"
          name={formatMessage({ id: "process.item2" })}
          num={2}
        />
        <FAQItem
          isRight
          imageSrc="/product/process/screen3.png"
          name={formatMessage({ id: "process.item3" })}
          num={3}
        />
        <FAQItem
          isRight
          imageSrc="/product/process/screen4.png"
          name={formatMessage({ id: "process.item4" })}
          num={4}
        />
      </div>
    </Section>
  );
};

export default Process;
