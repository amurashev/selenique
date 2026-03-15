import React from "react";

import styles from "./styles.module.css";

export const Free = ({
  size = "medium",
}: {
  size?: "medium" | "big";
}) => {
  return <div className={`${styles[size]}`}>Free</div>;
};

export const FreeBox = ({
  size = "medium",
}: {
  size?: "medium" | "big";
}) => {
  return (
    <div className={styles.box}>
      <Free size={size} />
    </div>
  );
};
