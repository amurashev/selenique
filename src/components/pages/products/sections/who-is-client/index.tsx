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
    image: "/product/items/jewerly.webp",
    text: "who_is_client.item2",
  },
  {
    image: "/product/items/gadgets.webp",
    text: "who_is_client.item3",
  },
  {
    image: "/product/items/dress.webp",
    text: "who_is_client.item6",
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

const Card = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.textBlock}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};

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
          <Card
            key={item.text}
            title={formatMessage({ id: item.text })}
            image={item.image}
          />
        ))}
      </div>
    </Section>
  );
};

export default WhoIsClient;
