"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../layout/section";
import ItemsList from "@/components/sections/items-list";

import styles from "./styles.module.css";

const ITEMS = [
  {
    text: "ii_model.what_is_that.item1.title",
  },
  {
    text: "ii_model.what_is_that.item2.title",
  },
  {
    text: "ii_model.what_is_that.item3.title",
  },
  {
    text: "ii_model.what_is_that.item4.title",
  },
];

const IMAGES = [
  "/models/women/2/2.webp",
  // "/models/women/2/3.webp",
  "/models/women/2/6.webp",
];

export const WhatIsThat: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({ id: "ii_model.what_is_that.text" })}
      // text={formatMessage({ id: "ii_model.what_is_that.text" })}
      // isShort
      // side="left"
      isGray
    >
      <div className={styles.sections}>
        <div className={styles.images}>
          {IMAGES.map((image) => (
            <div key={image} className={styles.imageBox}>
              <img src={image} className={styles.image} />
            </div>
          ))}
        </div>

        <div className={styles.items}>
          <ItemsList
            items={ITEMS.map((item) => formatMessage({ id: item.text }))}
          />

          {/* {ITEMS.map((item) => (
            <div key={item.text} className={styles.item}>
              <h3 className={styles.text}>
                {formatMessage({ id: item.text })}
              </h3>
            </div>
          ))} */}
        </div>
      </div>
    </Section>
  );
};

export default WhatIsThat;
