"use client";

import React from "react";
import { useIntl } from "react-intl";

import GuideItem from "../_guide-item";
import Section from "../../layout/section";

import styles from "./styles.module.css";
import GUIDES from "@/content/guides";

export const Guides: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section title={formatMessage({ id: "guides.title" })} isGray>
      <div className={styles.guides}>
        {GUIDES.map((item) => (
          <GuideItem key={item.name} name={item.name} image={item.image} />
        ))}
      </div>
    </Section>
  );
};

export default Guides;
