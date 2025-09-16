"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../layout/section";

import styles from "./styles.module.css";
// import PriceCard from "@/components/sections/price-card";
import {
  PHOTOSHOT_PRICE_LIST,
  PHOTOSHOT_PRICES_DATA,
} from "@/constants/prices/photosession";
import { PriceWithUnit } from "@/components/ui/price";
import { PriceType } from "@/components/types";

const PriceCard = ({ title, price }: { title: string; price: PriceType }) => {
  return (
    <div>
      <h3>{title}</h3>
      <PriceWithUnit value={price} />
    </div>
  );
};

export const Price: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({ id: "ii_photoshoot.price.title" })}
      // text={formatMessage({ id: "ii_model.price.text" })}
      // isGray
    >
      <div className={styles.sections}>
        {PHOTOSHOT_PRICE_LIST.map((item) => (
          <PriceCard
            key={item}
            title={formatMessage({
              id: PHOTOSHOT_PRICES_DATA[item].titleKey,
            })}
            price={PHOTOSHOT_PRICES_DATA[item].price}
          />
        ))}
      </div>
    </Section>
  );
};

export default Price;
