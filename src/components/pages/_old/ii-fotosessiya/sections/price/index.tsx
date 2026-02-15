"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "@/components/layout/section";

import styles from "./styles.module.css";
import PriceCard from "@/components/sections/price-card";
import {
  PHOTOSHOT_PRICE_LIST,
  PHOTOSHOT_PRICES_DATA,
} from "@/constants/prices/photosession";
import { PriceWithUnit } from "@/components/ui/price";
import { PriceType } from "@/components/types";
import InfoBox from "@/components/ui/info";

// const PriceCard = ({ title, price }: { title: string; price: PriceType }) => {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <PriceWithUnit value={price} />
//     </div>
//   );
// };

export const Price: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({ id: "ii_photoshoot.price.title" })}
      // text={formatMessage({ id: "ii_model.price.text" })}
      isGray
    >
      <div className={styles.sections}>
        <PriceCard
          title={formatMessage({ id: PHOTOSHOT_PRICES_DATA["basic"].titleKey })}
          price={PHOTOSHOT_PRICES_DATA["basic"].price}
        >
          <>
            <p>
              <b>{formatMessage({ id: "ii_photoshoot.price.items.count" })}</b>
              {": "}
              {formatMessage({ id: PHOTOSHOT_PRICES_DATA["basic"].count })}
            </p>
            <p>
              <b>{formatMessage({ id: "ii_photoshoot.price.items.term" })}</b>
              {": "}
              {formatMessage({ id: PHOTOSHOT_PRICES_DATA["basic"].term })}
            </p>
          </>
        </PriceCard>

        <InfoBox variant="info">
          <strong>{formatMessage({ id: "products.prices.prepayment" })}</strong>
        </InfoBox>
      </div>
    </Section>
  );
};

export default Price;
