import React from "react";

import { Pack } from "../pack";

import styles from "./styles.module.css";

export const Packs: React.FC = () => {
  return (
    <section className={styles.box}>
      <div className={styles.boxContainer}>

        <Pack name="Realism Ads Pack" />
        <Pack name="WOW Effect Pack" />
        <Pack name="PBundle" />
      </div>
    </section>
  );
};

export default Packs;
