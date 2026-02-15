"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "@/components/layout/section";
import ItemsList from "@/components/sections/items-list";

import styles from "./styles.module.css";

const ITEMS = [
  {
    text: "ii_photoshoot.what_you_get.item2.text",
  },
  {
    text: "ii_photoshoot.what_you_get.item3.text",
  },
  {
    text: "ii_photoshoot.what_you_get.item4.text",
  },
];

export const WhatYouGet: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({ id: "ii_photoshoot.what_you_get.title" })}
      // text={formatMessage({ id: "ii_model.what_you_get.text" })}
      // isShort
      side="left"
      // isGray
    >
      <div className={styles.sections}>
        <div className={styles.items}>
          <ItemsList
            items={ITEMS.map((item) => formatMessage({ id: item.text }))}
          />
        </div>

        {/* <div className={styles.images}>
          {IMAGES.map((image) => (
            <div key={image} className={styles.imageBox}>
              <img src={image} className={styles.image} />
            </div>
          ))}
        </div> */}
      </div>
    </Section>
  );
};

export default WhatYouGet;
