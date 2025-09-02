"use client";

import React from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";
import Section from "@/components/sections/section";

export const FAQItem: React.FC<{
  name: string;
  text: string;
  imageSrc?: string;
  isRight?: boolean;
}> = ({ name, text = "" }) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.sectionContainer}`}>
        <div className={`${styles.sectionTextBox}`}>
          <h3 className={styles.sectionTitle}>{name}</h3>
          <p className={styles.sectionText}>{text}</p>
        </div>
      </div>
    </section>
  );
};

export const FAQ: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Section title={formatMessage({ id: "products.faq.title" })}  size="720">
      <div className={styles.sections}>
      <FAQItem
          name={formatMessage({ id: "products.faq.faq6.title" })}
          text={formatMessage({ id: "products.faq.faq6.text" })}
        />
        <FAQItem
          name={formatMessage({ id: "products.faq.faq1.title" })}
          text={formatMessage({ id: "products.faq.faq1.text" })}
        />
        <FAQItem
          name={formatMessage({ id: "products.faq.faq2.title" })}
          text={formatMessage({ id: "products.faq.faq2.text" })}
        />
        <FAQItem
          name={formatMessage({ id: "products.faq.faq3.title" })}
          text={formatMessage({ id: "products.faq.faq3.text" })}
        />
        <FAQItem
          name={formatMessage({ id: "products.faq.faq4.title" })}
          text={formatMessage({ id: "products.faq.faq4.text" })}
        />
        <FAQItem
          name={formatMessage({ id: "products.faq.faq5.title" })}
          text={formatMessage({ id: "products.faq.faq5.text" })}
        />
      </div>
    </Section>
  );
};

export default FAQ;
