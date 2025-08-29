"use client";

import React from "react";
import { useIntl } from "react-intl";

import { Pack } from "../pack";
import Section from "../section";
import PACKS from "@/content/packs";

import styles from "./styles.module.css";

export const Packs: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section title={formatMessage({ id: "packs.title" })}>
      <div className={styles.packs}>
        {PACKS.map((item) => (
          <Pack key={item.name} name={item.name} imageSrc={item.image} />
        ))}
      </div>
    </Section>
  );
};

export default Packs;
