import React from "react";

import styles from "./styles.module.css";

interface PackProps {
  name: string
}

export const Pack: React.FC<PackProps> = ({ name }) => {
  return (
    <section className={styles.box}>
      <div className={styles.boxContainer}>
        <h2 className={styles.title}>{name}</h2>
      </div>
    </section>
  );
};

export default Pack;
