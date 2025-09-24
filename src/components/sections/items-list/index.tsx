"use client";

import React from "react";

import styles from "./styles.module.css";

const itemStyles = {
  small: styles.itemSmall,
  normal: styles.itemNormal,
  large: styles.itemLarge,
};

const iconStyles = {
  small: styles.iconSmall,
  normal: styles.iconMedium,
  large: styles.iconLarge,
};

export const ItemsList: React.FC<{
  items: string[];
  type?: "small" | "normal" | "large";
}> = (props) => {
  const { items, type = "large" } = props;

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item} className={itemStyles[type]}>
          <span className={iconStyles[type]}>✔</span>
          <p
            className={styles.text}
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
