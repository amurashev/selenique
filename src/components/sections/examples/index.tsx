import React from "react";

import { Pack } from "../pack";

import styles from "./styles.module.css";

export const Examples: React.FC = () => {
  return (
    <section className={styles.box}>
      <div className={styles.boxContainer}>

        <h2 className={styles.title}>Примеры работ</h2>
      </div>
    </section>
  );
};

export default Examples;
