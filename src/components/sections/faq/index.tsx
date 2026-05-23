"use client";

import React, { useState } from "react";

import styles from "./styles.module.css";

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#86868b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};

export const FAQItem: React.FC<{
  title: string;
  text: string;
  imageSrc?: string;
  isRight?: boolean;
  color?: "white" | "black";
}> = ({ title, text = "", color = "white" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const itemClass = color === "white" ? styles.item : styles.itemBlack
  const headerClass = color === "white" ? styles.header : styles.headerBlack
  const bodyClass = color === "white" ? styles.body : styles.bodyBlack
  return (
    <div className={itemClass}>
      <button
        className={headerClass}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className={`${styles.icon} ${isOpen ? styles.open : ""}`}>
          <Arrow />
        </span>
      </button>
      <div
        dangerouslySetInnerHTML={{
          __html: text,
        }}
        className={isOpen ? bodyClass : styles.bodyHidden}
      />
    </div>
  );
};

export const FAQBase: React.FC<{
  items: { title: string; text: string }[];
  color?: "white" | "black";
}> = ({ items, color = "white" }) => {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <FAQItem key={item.title} title={item.title} text={item.text} color={color} />
      ))}
    </div>
  );
};

export default FAQBase;
