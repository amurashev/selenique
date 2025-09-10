"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../layout/section";

import styles from "./styles.module.css";

import ItemsList from "@/components/sections/items-list";

export const Risks: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Section
      title={formatMessage({ id: "consultations.risks.title" })}
      side="left"
    >
      <div className={styles.sections}>
        <ItemsList
          items={[1, 2, 3].map((item) =>
            formatMessage({
              id: `consultations.risks.item${item}`,
            })
          )}
        />
      </div>
    </Section>
  );
};

export default Risks;
