"use client";

import React from "react";

import styles from "./styles.module.css";

export const ItemsList: React.FC<{ items: string[] }> = (props) => {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          <span className={styles.icon}>✔</span>
          <p
            dangerouslySetInnerHTML={{
              __html: item,
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
