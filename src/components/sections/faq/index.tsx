"use client";

import React from "react";

import styles from "./styles.module.css";

export const FAQItem: React.FC<{
  title: string;
  text: string;
  imageSrc?: string;
  isRight?: boolean;
}> = ({ title, text = "" }) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.sectionContainer}`}>
        <div className={`${styles.sectionTextBox}`}>
          <h3 className={styles.sectionTitle}>{title}</h3>
          <p className={styles.sectionText}>{text}</p>
        </div>
      </div>
    </section>
  );
};

export const FAQBase: React.FC<{
  items: { title: string; text: string }[];
}> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <FAQItem key={item.title} title={item.title} text={item.text} />
      ))}
    </div>
  );
};

export default FAQBase;
