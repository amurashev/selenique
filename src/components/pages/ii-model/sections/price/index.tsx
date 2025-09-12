"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../layout/section";

import styles from "./styles.module.css";
import PriceCard from "@/components/sections/price-card";
import { PRODUCT_PRICES_DATA } from "@/constants/prices";

export const Price: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({ id: "ii_model.price.title" })}
      // text={formatMessage({ id: "ii_model.price.text" })}
      // isGray
    >
      <div className={styles.sections}>
        <PriceCard
          title={formatMessage({
            id: PRODUCT_PRICES_DATA["ii_model"].titleKey,
          })}
          price={PRODUCT_PRICES_DATA["ii_model"].price}
        >
          <>
            <p>
              {formatMessage({
                id: PRODUCT_PRICES_DATA["ii_model"].descriptionKey,
              })}
            </p>
            <p>
              <b>{formatMessage({ id: "ii_model.price.term" })}</b>: {formatMessage({ id: "ii_model.price.term_value" })}.
            </p>
          </>
        </PriceCard>
      </div>
    </Section>
  );
};

export default Price;
