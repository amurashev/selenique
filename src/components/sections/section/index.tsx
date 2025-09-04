"use client";

import React from "react";

import styles from "./styles.module.css";

export const Section: React.FC<{
  id?: string;
  title: string;
  text?: string;
  children: React.ReactNode;
  side?: "left"
  isGray?: boolean;
  isShort?: boolean;
  size?: "800" | "600" | "960" | "720";
}> = ({ id, title, side, text, isGray, isShort, size, children }) => {
  return (
    <section
      id={id}
      className={`${styles.box} ${isGray ? styles.boxGray : ""}`}
    >
      <div
        className={`${styles.boxContainer} ${
          isShort ? styles.boxContainerIsShort : ""
        }
        ${size === "600" ? styles.boxContainer600 : ""}
        ${size === "720" ? styles.boxContainer720 : ""}
        ${size === "800" ? styles.boxContainer800 : ""}
        ${size === "960" ? styles.boxContainer960 : ""}
        ${side === "left" ? styles.boxContainerLeft : ""}
        `}
      >
        <div className={styles.textBox}>
          <h2 className={styles.title}>{title}</h2>
          {text ? (
            <p
              className={styles.text}
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          ) : null}
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
};

export default Section;
