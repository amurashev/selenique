"use client";

import React from "react";

import styles from "./styles.module.css";

export const Section: React.FC<{
  title: string;
  text?: string;
  children: React.ReactNode;
  isGray?: boolean;
  isShort?: boolean;
  size?: "800" | "600" | "960";
}> = ({ title, text, isGray, isShort, size, children }) => {
  return (
    <section className={`${styles.box} ${isGray ? styles.boxGray : ""}`}>
      <div
        className={`${styles.boxContainer} ${
          isShort ? styles.boxContainerIsShort : ""
        }
        ${size === "600" ? styles.boxContainer600 : ""}
        ${size === "800" ? styles.boxContainer800 : ""}
        ${size === "960" ? styles.boxContainer960 : ""}`}
      >
        <h2 className={styles.title}>{title}</h2>
        {text ? <p className={styles.text}>{text}</p> : null}
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
