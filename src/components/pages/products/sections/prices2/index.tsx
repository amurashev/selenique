"use client";

import React, { useState } from "react";
import { useIntl } from "react-intl";

import Section from "../../../../layout/section";

import styles from "./styles.module.css";
import InfoBox from "@/components/ui/info";
import { title } from "process";
import { iiModelPageRoute } from "@/constants/routes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  PRODUCT_PRICE_LIST,
  PRODUCT_PRICE_PACKAGES,
  PRODUCT_PRICES_DATA,
} from "@/constants/prices";
import PriceItem from "./price-item";

// const PriceItem = ({
//   title,
//   text,
//   price,
//   images,
// }: {
//   title: string;
//   text: string;
//   price: string;
//   images: string[];
// }) => {
//   return (
//     <div className={styles.card}>
//       <div className={styles.leftSide}>
//         <div className={styles.cardDetails}>
//           <h3 className={styles.title}>{title}</h3>
//           <div
//             dangerouslySetInnerHTML={{
//               __html: text,
//             }}
//             className={styles.subtitle}
//           />
//           <div className={styles.price}>{price}</div>
//         </div>
//       </div>
//       <div className={styles.images}>
//         {images.map((image) => (
//           <div
//             key={image}
//             className={`${styles.imageBox} ${
//               images.length === 1 ? styles.imageBox1 : ""
//             }`}
//           >
//             <img className={styles.image} src={image} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export const PricesV2: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Section
      title={formatMessage({ id: "products.prices.title" })}
      isGray={true}
      side="left"
    >
      <div className={styles.sections}>
        {PRODUCT_PRICE_LIST.map((item) => {
          const priceData = PRODUCT_PRICES_DATA[item];
          return (
            <PriceItem
              key={priceData.titleKey}
              title={formatMessage({ id: priceData.titleKey })}
              price={priceData.price}
              priceUnit={priceData.priceUnit}
              text={formatMessage({ id: priceData.descriptionKey })}
              images={priceData.images}
              link={priceData.link}
            />
          );
        })}

        <div className={styles.info}>
          <InfoBox variant="success">
            <h5>{formatMessage({ id: "products.prices.discount" })}</h5>
            <div className={styles.packages}>
              {PRODUCT_PRICE_PACKAGES.map((item) => (
                <div key={item.title} className={styles.packageItem}>
                  <div>
                    {item.count}{" "}
                    {formatMessage({ id: "common.prices.types.photo" })}{" "}→{" "}
                    <strong>{item.discount}%</strong>
                  </div>
                </div>
              ))}
            </div>
          </InfoBox>
          <InfoBox variant="info">
            <strong>
              {formatMessage({ id: "products.prices.prepayment" })}
            </strong>
          </InfoBox>
        </div>
      </div>
    </Section>
  );
};

export default PricesV2;
