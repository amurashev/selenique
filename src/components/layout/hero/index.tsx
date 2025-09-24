"use client";

import React from "react";

import styles from "./styles.module.css";

interface HeroBotikaProps {
  title: string;
  text?: string;
  /** Right-side image (group of models). PNG/JPG with transparent or white bg works best */
  imageSrc?: string;
}

export const Hero: React.FC<HeroBotikaProps> = ({ text, title, imageSrc }) => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url("${imageSrc}")` }}
    >
      <div className={styles.overlay} />
      <div className={styles.heroContainer}>
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>{title}</h1>
          {text && <p className={styles.heroSubtitle}>{text}</p>}

          {/* <Button onClick={goToForm}>
            {formatMessage({ id: "products.hero.cta" })}
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
