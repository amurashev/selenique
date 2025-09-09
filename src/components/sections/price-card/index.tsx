"use client";

import React from "react";

import styles from "./styles.module.css";

export const PriceCard: React.FC<{
  title: string;
  children: React.ReactNode;
  price: string;
}> = ({ children, title, price }) => {
  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.text}>
          {children}
        </div>
      </div>
      <strong className={styles.price}>{price}</strong>
    </div>
  );
};

export default PriceCard;
