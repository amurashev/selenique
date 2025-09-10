"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../layout/section";

import styles from "./styles.module.css";

const ITEMS = [
  {
    text: "consultations.who_is_client.item1",
    image: "/consultations/clients/1.jpeg",
  },
  {
    text: "consultations.who_is_client.item2",
    image: "/consultations/clients/2.jpeg",
  },
  {
    text: "consultations.who_is_client.item3",
    image: "/consultations/clients/4.jpg",
  },
  {
    text: "consultations.who_is_client.item4",
    image: "/consultations/clients/3.png",
  },
];

export const WhoIsClient: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({ id: "consultations.who_is_client.title" })}
      text={formatMessage({ id: "consultations.who_is_client.text" })}
      // isShort
      side="left"
      isGray
    >
      <div className={styles.sections}>
        {ITEMS.map((item) => (
          <div key={item.text} className={styles.item}>
            <div className={styles.imageBox}>
              <img
                src={item.image}
                alt={formatMessage({
                  id: item.text,
                })}
                className={styles.image}
              />
            </div>
            <h3 className={styles.text}>{formatMessage({ id: item.text })}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default WhoIsClient;
