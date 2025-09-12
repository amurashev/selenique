"use client";

import React from "react";

import styles from "./styles.module.css";
import { PriceWithUnit } from "@/components/ui/price";

export const PriceCard: React.FC<{
  title: string;
  children: React.ReactNode;
  price: Record<string, number>;
}> = ({ children, title, price }) => {
  return (
    <div className={styles.card}>
      <div className={styles.firstLine}>
        <h3 className={styles.title}>{title}</h3>
        <strong className={styles.price}>
          <PriceWithUnit value={price} />
        </strong>
      </div>
      <div>
        <div className={styles.text}>{children}</div>
      </div>
    </div>
  );
};

export default PriceCard;
