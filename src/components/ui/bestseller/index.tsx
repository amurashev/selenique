import React from "react";

import styles from "./styles.module.css";

export const Bestseller = ({
  size = "medium",
}: {
  size?: "medium" | "big";
}) => {
  return <div className={`${styles[size]}`}>Bestseller</div>;
};

export const BestsellerBox = ({
  size = "medium",
}: {
  size?: "medium" | "big";
}) => {
  return (
    <div className={styles.box}>
      <Bestseller size={size} />
    </div>
  );
};
