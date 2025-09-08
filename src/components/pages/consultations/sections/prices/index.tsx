"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../sections/section";

import styles from "./styles.module.css";
import InfoBox from "@/components/ui/info";
import { title } from "process";

const CheckMarkIcon = () => (
  <svg
    fill="#ffffff"
    viewBox="0 0 1920 1920"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M1743.858 267.012 710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z"
        fillRule="evenodd"
      ></path>
    </g>
  </svg>
);

const PRICES = [
  {
    title: "Предметная съёмка на простом/градиентном фоне",
    subtitle:
      "Минималистичные фото с акцентом только на товар. Чистый фон или мягкий градиент — быстрый и стильный вариант для маркетплейсов и соцсетей. Идеально, если нужно показать продукт максимально ясно и без отвлекающих деталей.",
    price: "от 390 руб./фото",
    images: [
      `/product/price/one_tone/1.webp`,
      `/product/price/one_tone/2.webp`,
      `/product/price/one_tone/3.webp`,
    ],
  },
];

const PriceItem = ({
  title,
  text,
  price,
  images,
}: {
  title: string;
  text: string;
  price: string;
  images: string[];
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.leftSide}>
        <div className={styles.cardDetails}>
          <h3 className={styles.title}>{title}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: text,
            }}
            className={styles.subtitle}
          />
        <div className={styles.price}>{price}</div>
        </div>

      </div>
      <div className={styles.images}>
        {images.map((image) => (
          <div
            key={image}
            className={`${styles.imageBox} ${
              images.length === 1 ? styles.imageBox1 : ""
            }`}
          >
            <img className={styles.image} src={image} />
          </div>
        ))}
      </div>

      {/* <ul className={styles.list}>
              {item.advantages.map((adv) => (
                <li key={adv} className={styles.item}>
                  <span className={styles.icon}><CheckMarkIcon /></span>
                  <span
                    key={adv}
                    dangerouslySetInnerHTML={{
                      __html: formatMessage({ id: adv }),
                    }}
                  />
                </li>
              ))}
            </ul> */}
      {/* <button>Выбрать</button> */}
    </div>
  );
};

export const Prices: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Section
      title={formatMessage({ id: "consultations.prices.title" })}
      isGray={true}
    >
      <div className={styles.sections}>
        {PRICES.map((item) => (
          <PriceItem
            key={item.title}
            title={item.title}
            text={item.subtitle}
            price={item.price}
            images={item.images}
          />
        ))}
      </div>
    </Section>
  );
};

export default Prices;
