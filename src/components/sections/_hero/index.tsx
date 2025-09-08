"use client";

import React from "react";
import { useIntl } from "react-intl";

import messages from './messages'
import styles from "./styles.module.css";

interface HeroBotikaProps {
  /** Right-side image (group of models). PNG/JPG with transparent or white bg works best */
  imageSrc?: string;
}

export const Hero: React.FC<HeroBotikaProps> = ({
  imageSrc = "/hero_image.jpg",
}) => {
  const { formatMessage, locale } = useIntl();

  console.warn("locale", locale);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>{formatMessage(messages.title)}</h1>

          <p className={styles.heroSubtitle}>
          {formatMessage(messages.text)}
          </p>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.visualPanel}>
            <img
              src={imageSrc}
              alt="Fashion image"
              className={styles.visualImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
