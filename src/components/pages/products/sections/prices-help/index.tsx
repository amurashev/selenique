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
import { PRODUCT_PRICE_LIST, PRODUCT_PRICES_DATA } from "@/constants/prices";
import { PriceWithUnit } from "@/components/ui/price";

type ItemType = "item" | "cloth";
type BackgroundType =
  | "simple"
  | "image"
  | "with_people"
  | "catalog"
  | "lookbook";

const FIRST_STEP = [
  {
    index: "item",
    titleKey: "products.price_help.first_step.item",
    image: PRODUCT_PRICES_DATA["subject_photo_simple"].mainImage as string,
  },
  {
    index: "cloth",
    titleKey: "products.price_help.first_step.cloth",
    image: PRODUCT_PRICES_DATA["catalog"].mainImage as string,
  },
];

const SECOND_STEP_ITEM = [
  {
    index: "simple",
    titleKey: "products.price_help.second_step.simple",
    image: PRODUCT_PRICES_DATA["subject_photo_simple"].mainImage as string,
  },
  {
    index: "image",
    titleKey: "products.price_help.second_step.image",
    image: PRODUCT_PRICES_DATA["subject_photo_image"].mainImage as string,
  },
  {
    index: "with_people",
    titleKey: "products.price_help.second_step.with_people",
    image: PRODUCT_PRICES_DATA["subject_photo_people"].mainImage as string,
  },
];

const SECOND_STEP_CLOTH = [
  {
    index: "catalog",
    titleKey: "products.price_help.second_step.catalog",
    image: PRODUCT_PRICES_DATA["catalog"].mainImage as string,
  },
  {
    index: "lookbook",
    titleKey: "products.price_help.second_step.lookbook",
    image: PRODUCT_PRICES_DATA["lookbook"].mainImage as string,
  },
];

const Item = ({
  title,
  image,
  isSelected,
  onClick,
}: {
  title: string;
  image: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.imageBox} ${
        isSelected ? styles.imageBoxIsSelected : ""
      }`}
    >
      <img className={styles.image} src={image} />
      <strong>{title}</strong>
    </div>
  );
};

export const PriceHelp: React.FC = () => {
  const { formatMessage } = useIntl();
  const [itemType, setItemType] = useState<undefined | ItemType>("item");
  const [backgroundType, setBackgroundType] = useState<
    undefined | BackgroundType
  >("simple");

  let priceData;

  if (backgroundType === "simple")
    priceData = PRODUCT_PRICES_DATA["subject_photo_simple"];
  if (backgroundType === "image")
    priceData = PRODUCT_PRICES_DATA["subject_photo_image"];
  if (backgroundType === "with_people")
    priceData = PRODUCT_PRICES_DATA["subject_photo_people"];
  if (backgroundType === "catalog") priceData = PRODUCT_PRICES_DATA["catalog"];
  if (backgroundType === "lookbook")
    priceData = PRODUCT_PRICES_DATA["lookbook"];

  return (
    <Section
      title={formatMessage({ id: "products.price_help.title" })}
      // isGray={true}
      // side="left"
    >
      <div className={styles.sections}>
        <div className={styles.steps}>
          <div className={styles.step1}>
            <h3>
              {formatMessage({ id: "products.price_help.you_need_photo" })}:
            </h3>

            <div className={styles.images}>
              {FIRST_STEP.map((item) => (
                <Item
                  key={item.titleKey}
                  title={formatMessage({ id: item.titleKey })}
                  image={item.image}
                  isSelected={item.index === itemType}
                  onClick={() => {
                    setItemType(item.index as ItemType);

                    if (item.index === "item") setBackgroundType("simple");
                    if (item.index === "cloth") setBackgroundType("catalog");
                  }}
                />
              ))}
            </div>
          </div>

          <div className={styles.arrow}>&rarr;</div>

          <div className={styles.step2}>
            <h3>
              {formatMessage({
                id: "products.price_help.select_photo_background",
              })}
              :
            </h3>
            {itemType === "item" && (
              <div className={styles.images}>
                {SECOND_STEP_ITEM.map((item) => (
                  <Item
                    key={item.titleKey}
                    title={formatMessage({ id: item.titleKey })}
                    image={item.image}
                    isSelected={item.index === backgroundType}
                    onClick={() =>
                      setBackgroundType(item.index as BackgroundType)
                    }
                  />
                ))}
              </div>
            )}
            {itemType === "cloth" && (
              <div className={styles.images}>
                {SECOND_STEP_CLOTH.map((item) => (
                  <Item
                    key={item.titleKey}
                    title={formatMessage({ id: item.titleKey })}
                    image={item.image}
                    isSelected={item.index === backgroundType}
                    onClick={() =>
                      setBackgroundType(item.index as BackgroundType)
                    }
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        {priceData && (
          <div className={styles.service}>
            <h3>
              {formatMessage({ id: "products.price_help.selected_service" })}:
            </h3>
            <div className={styles.priceDetail}>
              {formatMessage({ id: priceData.titleKey })}:&nbsp;
              <span className={styles.price}>
                <PriceWithUnit
                  value={priceData.price}
                  isFrom
                  unit={priceData.priceUnit}
                />
              </span>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default PriceHelp;
