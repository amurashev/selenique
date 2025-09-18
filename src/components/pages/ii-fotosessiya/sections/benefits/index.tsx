"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../layout/section";
import ItemsList from "@/components/sections/items-list";

import styles from "./styles.module.css";

const ITEMS = [
  {
    text: "ii_photoshoot.benefits.item1.text",
  },
  {
    text: "ii_photoshoot.benefits.item2.text",
  },
  {
    text: "ii_photoshoot.benefits.item3.text",
  },
  {
    text: "ii_photoshoot.benefits.item4.text",
  },
  {
    text: "ii_photoshoot.benefits.item5.text",
  },
];

const IMAGES = [
  "/ii_models/76.png",
  "/ii_models/72.png",
];

export const Benefits: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({ id: "ii_photoshoot.benefits.title" })}
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

export default Benefits;
