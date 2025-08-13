"use client";

import React from "react";

import styles from "./styles.module.css";

export const Section: React.FC<{
  title: string;
  children: React.ReactNode;
  isGray?: boolean
  isShort?: boolean
}> = ({ title, isGray, isShort, children }) => {
  return (
    <section className={`${styles.box} ${isGray ? styles.boxGray : ''}`}>
      <div className={`${styles.boxContainer} ${isShort ? styles.boxContainerIsShort : ''}`}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
