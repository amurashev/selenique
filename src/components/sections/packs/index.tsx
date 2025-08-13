"use client";

import React from "react";
import { useIntl } from "react-intl";

import { Pack } from "../pack";
import Section from "../section";

import styles from "./styles.module.css";

export const Packs: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section title={formatMessage({ id: "packs.title" })}>
      <div className={styles.packs}>
        <Pack
          name="Beauty aesthetics (120 images)"
          imageSrc="/packs/pack1.jpg"
        />
        <Pack
          name="Beauty aesthetics (120 images)"
          imageSrc="/packs/pack1.jpg"
        />
        <Pack
          name="Beauty aesthetics (120 images)"
          imageSrc="/packs/pack1.jpg"
        />
      </div>
    </Section>
  );
};

export default Packs;
