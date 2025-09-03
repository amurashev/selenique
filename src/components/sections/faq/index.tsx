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
}> = ({ title, text = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.item}>
      <button className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className={`${styles.icon} ${isOpen ? styles.open : ""}`}>
          <Arrow />
        </span>
      </button>
      {isOpen && <div className={styles.body}>{text}</div>}
    </div>
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
