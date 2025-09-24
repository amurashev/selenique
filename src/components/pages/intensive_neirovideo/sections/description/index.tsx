"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../layout/section";

import styles from "./styles.module.css";
import ItemsList from "@/components/sections/items-list";

export const Description: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <Section
        title={formatMessage({ id: "intensive_neurovideo.intro.text1" })}
        // text={formatMessage({ id: "intensive_neurovideo.intro.text1" })}
        isGray
        // side="left"
        size="960"
      >
        <div className={styles.sections}>
          <div className={styles.texts}>
            <p>{formatMessage({ id: "intensive_neurovideo.intro.text3" })}</p>
          </div>
        </div>
      </Section>

      <div className={styles.section2}>
          <h3>
            {formatMessage({ id: "intensive_neurovideo.intro.items.title" })}
          </h3>
          <div className={styles.section2Inner}>
        <div className={styles.items}>
          <ItemsList
            items={[
              "intensive_neurovideo.intro.item1",
              "intensive_neurovideo.intro.item2",
              "intensive_neurovideo.intro.item3",
              "intensive_neurovideo.intro.item4",
            ].map((item) => formatMessage({ id: item }))}
          />
        </div>
        <div className={styles.imageBox}>
          <img src={"/intensive_ai/image3.jpg"} className={styles.image} />
          <img src={"/intensive_ai/image4.jpg"} className={styles.image} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Description;
