"use client";

import React, { useState } from "react";

import styles from "./styles.module.css";
import item1 from "./item1.module.css";
import item2 from "./item2.module.css";

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

export const FAQItem1: React.FC<{
  title: string;
  text: string;
  imageSrc?: string;
  isRight?: boolean;
}> = ({ title, text = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={item1.item}>
      <button className={item1.header} onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className={`${item1.icon} ${isOpen ? item1.open : ""}`}>
          <Arrow />
        </span>
      </button>
      <div
        dangerouslySetInnerHTML={{
          __html: text,
        }}
        className={isOpen ? item1.body : item1.bodyHidden}
      />
    </div>
  );
};

export const FAQItem2: React.FC<{
  title: string;
  text: string;
  imageSrc?: string;
  isRight?: boolean;
}> = ({ title, text = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={item2.item}>
      <button className={item2.header} onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className={`${item2.icon} ${isOpen ? item2.open : ""}`}>
          <Arrow />
        </span>
      </button>
      <div
        dangerouslySetInnerHTML={{
          __html: text,
        }}
        className={isOpen ? item2.body : item2.bodyHidden}
      />
    </div>
  );
};

export const FAQBase: React.FC<{
  items: { title: string; text: string }[];
  type?: "1" | "2";
}> = ({ items, type = "1" }) => {
  return (
    <div className={styles.list}>
      {items.map((item) => {
        if (type === "2") {
          return (
            <FAQItem2 key={item.title} title={item.title} text={item.text} />
          );
        }

        return (
          <FAQItem1 key={item.title} title={item.title} text={item.text} />
        );
      })}
    </div>
  );
};

export default FAQBase;
