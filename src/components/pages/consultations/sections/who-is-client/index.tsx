"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../sections/section";

import styles from "./styles.module.css";

const ITEMS = [
  {
    text: "consultations.who_is_client.item1",
  },
  {
    text: "consultations.who_is_client.item2",
  },
  {
    text: "consultations.who_is_client.item3",
  },
  {
    text: "consultations.who_is_client.item4",
  },
];

export const WhoIsClient: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({ id: "consultations.who_is_client.title" })}
      text={formatMessage({ id: "consultations.who_is_client.text" })}
      isShort
      isGray
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
            <p key={item.text} className={styles.text}>
              {formatMessage({ id: item.text })}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhoIsClient;
