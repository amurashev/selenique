"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../../layout/section";
import ItemsList from "@/components/sections/items-list";

import styles from "./styles.module.css";

const ITEMS = [
  {
    text: "intensive_neurovideo.after.item1",
  },
  {
    text: "intensive_neurovideo.after.item2",
  },
  {
    text: "intensive_neurovideo.after.item3",
  },
  {
    text: "intensive_neurovideo.after.item4",
  },
];

export const WhatYouGet: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({ id: "intensive_neurovideo.after.title" })}
      // text={formatMessage({ id: "ii_model.what_you_get.text" })}
      // isShort
      // side="left"
      // isGray
    >
      <div className={styles.sections}>
        <div className={styles.top}>
          <div className={styles.imageBox}>
            <img src={"/intensive_ai/image1.jpg"} className={styles.image} />
            <img src={"/intensive_ai/image2.jpg"} className={styles.image} />
          </div>

          <div className={styles.items}>
            <ItemsList
              items={ITEMS.map((item) => formatMessage({ id: item.text }))}
            />
          </div>
        </div>

        <p
          className={styles.post}
          dangerouslySetInnerHTML={{
            __html: formatMessage({ id: "intensive_neurovideo.after.post" }),
          }}
        />

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
