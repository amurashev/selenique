"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../sections/section";

import styles from "./styles.module.css";

const ITEMS = [
  {
    text: "consultations.what_teach.item1",
  },
  {
    text: "consultations.what_teach.item2",
  },
  {
    text: "consultations.what_teach.item3",
  },
  {
    text: "consultations.what_teach.item4",
  },
];

export const WhatTeach: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({ id: "consultations.what_teach.title" })}
      // text={formatMessage({ id: "consultations.who_is_client.text" })}
      isShort
      // isGray
    >
      <div className={styles.sections}>
        <div className={styles.imageBox}>
          <img
            src={"/product/items/food.webp"}
            alt={formatMessage({ id: "consultations.who_is_client.title" })}
            className={styles.image}
          />
        </div>
        <div className={styles.textBox}>
          {ITEMS.map((item) => (
            <p
              key={item.text}
              className={styles.text}
              dangerouslySetInnerHTML={{
                __html: formatMessage({ id: item.text }),
              }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhatTeach;
