"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../layout/section";

import styles from "./styles.module.css";

const ITEMS = [
  {
    title: "consultations.what_teach.item1.title",
    text: "consultations.what_teach.item1.text",
    images: [
      `/consultations/catalog/1.webp`,
      `/consultations/catalog/2.webp`,
      `/consultations/catalog/3.webp`,
    ],
  },
  {
    title: "consultations.what_teach.item2.title",
    text: "consultations.what_teach.item2.text",
    images: [
      `/consultations/items/1.webp`,
      `/consultations/items/2.webp`,
      `/consultations/items/3.webp`,
    ],
  },
  {
    title: "consultations.what_teach.item3.title",
    text: "consultations.what_teach.item3.text",
    images: [
      `/consultations/lookbook/1.webp`,
      `/consultations/lookbook/2.webp`,
      `/consultations/lookbook/3.webp`,
    ],
  },
];

export const WhatTeach: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({ id: "consultations.what_teach.title" })}
      // text={formatMessage({ id: "consultations.who_is_client.text" })}
      // isShort
      isGray
    >
      <div className={styles.sections}>
        <div className={styles.itemsBox}>
          {ITEMS.map((item) => (
            <div key={item.text} className={styles.card}>
              <h3 className={styles.title}>
                {formatMessage({ id: item.title })}
              </h3>
              <p
                className={styles.text}
                dangerouslySetInnerHTML={{
                  __html: formatMessage({ id: item.text }),
                }}
              />
              <div className={styles.images}>
                {item.images.map((image) => (
                  <div key={image} className={`${styles.imageBox}`}>
                    <img className={styles.image} src={image} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhatTeach;
