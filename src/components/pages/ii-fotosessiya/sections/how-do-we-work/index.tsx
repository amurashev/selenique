"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../layout/section";

import styles from "./styles.module.css";

const IMAGES = [
  "/photoshoot/clients/6.webp",
  "/photoshoot/clients/1.webp",
  "/photoshoot/clients/3.webp",
  "/photoshoot/clients/7.webp",
];

export const HowDoWeWork: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({ id: "ii_photoshoot.how_we_work.title" })}
      text={formatMessage({ id: "ii_photoshoot.how_we_work.text" })}
      isGray
      // side="left"
    >
      <div className={styles.sections}>
        <div className={styles.images}>
          {IMAGES.map((image) => (
            <div key={image} className={styles.imageBox}>
              <img src={image} className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowDoWeWork;
