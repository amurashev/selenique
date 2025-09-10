"use client";

import React from "react";

import styles from "./styles.module.css";

export const PriceCard: React.FC<{
  title: string;
  children: React.ReactNode;
  price: number;
  currency?: string
}> = ({ children, title, price, currency = 'руб.' }) => {
  return (
    <div className={styles.card}>
      <div className={styles.firstLine}>
        <h3 className={styles.title}>{title}</h3>
        <strong className={styles.price}>{price}{currency}</strong>
      </div>
      <div>
        <div className={styles.text}>{children}</div>
      </div>
    </div>
  );
};

export default PriceCard;
