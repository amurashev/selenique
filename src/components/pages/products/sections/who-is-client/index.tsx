"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../sections/section";

import styles from "./styles.module.css";

const ITEMS = [
  {
    image: "/product/items/beauty.webp",
    text: "who_is_client.item1",
  },
  {
    image: "/product/items/fashion.webp",
    text: "who_is_client.item2",
  },
  {
    image: "/product/items/gadgets.webp",
    text: "who_is_client.item3",
  },
  {
    image: "/product/items/food.webp",
    text: "who_is_client.item4",
  },
  {
    image: "/product/items/acessories.webp",
    text: "who_is_client.item5",
  },
];

export const WhoIsClient: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Section
      title={formatMessage({ id: "who_is_client.title" })}
      text={formatMessage({ id: "who_is_client.text" })}
      isShort
      isGray
    >
      <div className={styles.sections}>
        {ITEMS.map((item) => (
          <div key={item.text} className={styles.section}>
            <div className={styles.imageBox}>
              <img src={item.image} alt={item.text} className={styles.image} />
            </div>

            <h3>{formatMessage({ id: item.text })}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhoIsClient;
