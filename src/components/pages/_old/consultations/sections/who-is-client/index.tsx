"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../../layout/section";

import styles from "./styles.module.css";
import ItemsList from "@/components/sections/items-list";

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
      isGray
    >
      <div className={styles.sections}>
        <div className={styles.images}>
          
        {[
          "/consultations/clients/1.jpeg",
          "/consultations/clients/2.jpeg",
          // "/consultations/clients/3.png",
        ].map((item) => (
          <div key={item} className={styles.imageBox}>
            <img
              src={item}
              className={styles.image}
            />
          </div>
        ))}
        </div>
        <ItemsList
          items={ITEMS.map((item) =>
            formatMessage({
              id: item.text,
            })
          )}
        />
      </div>
    </Section>
  );
};

export default WhoIsClient;
