"use client";

import React from "react";
import { useIntl } from "react-intl";

import { Pack } from "../pack";

import styles from "./styles.module.css";

export const Packs: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <section className={styles.box}>
      <div className={styles.boxContainer}>
        <h2 className={styles.title}>{formatMessage({ id: "packs.title" })}</h2>
        <div className={styles.packs}>
          <Pack
            name="Beauty aesthetics (120 images)"
            imageSrc="/packs/pack1.jpg"
          />
          <Pack
            name="Beauty aesthetics (120 images)"
            imageSrc="/packs/pack1.jpg"
          />
          <Pack
            name="Beauty aesthetics (120 images)"
            imageSrc="/packs/pack1.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Packs;
