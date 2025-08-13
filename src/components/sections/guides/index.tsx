"use client";

import React from "react";
import { useIntl } from "react-intl";

import GuideItem from "../guide-item";
import Section from "../section";

import styles from "./styles.module.css";

export const Guides: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section title={formatMessage({ id: "guides.title" })} isGray>
      <div className={styles.guides}>
        <GuideItem name="Free Realism Guide (PDF)" image="/hero_image.jpg" />
        <GuideItem name="Free Realism Guide (PDF)" image="/hero_image.jpg" />
        <GuideItem name="Free Realism Guide (PDF)" image="/hero_image.jpg" />
      </div>
    </Section>
  );
};

export default Guides;
