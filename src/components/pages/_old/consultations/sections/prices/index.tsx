"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../../layout/section";

import styles from "./styles.module.css";
import PriceCard from "@/components/sections/price-card";

export const Prices: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({ id: "consultations.prices.title" })}
    >
      <div className={styles.sections}>
        <PriceCard
          title={formatMessage({ id: "consultations.price.title" })}
          price={{ ru: 6990, en: 100 }}
        >
          <>
            <p>
              <b>{formatMessage({ id: "consultations.price.duration" })}</b>:{" "}
              {formatMessage({ id: "consultations.price.duration_value" })}
            </p>
            <p>{formatMessage({ id: "consultations.price.description" })}</p>
          </>
        </PriceCard>
      </div>
    </Section>
  );
};

export default Prices;
