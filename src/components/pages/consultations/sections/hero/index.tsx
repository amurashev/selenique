"use client";

import React from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";
import { Button } from "@/components/ui/button";
import { goToForm } from "../../utils";

interface HeroBotikaProps {
  /** Right-side image (group of models). PNG/JPG with transparent or white bg works best */
  imageSrc?: string;
}

export const Hero: React.FC<HeroBotikaProps> = () => {
  const { formatMessage } = useIntl();

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.heroContainer}>
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>
            {`${formatMessage({ id: "consultations.hero.title" })}`}
          </h1>

          <p className={styles.heroSubtitle}>
            {formatMessage({ id: "consultations.hero.text" })}
          </p>

          {/* <Button onClick={goToForm}>
            {formatMessage({ id: "products.hero.cta" })}
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
