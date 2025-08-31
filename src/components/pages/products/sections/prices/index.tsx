"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../sections/section";

import styles from "./styles.module.css";

const CheckMarkIcon = () => (
  <svg
    fill="#ffffff"
    viewBox="0 0 1920 1920"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
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
    title: "prices.item1.title",
    subtitle: "prices.item1.subtitle",
    price: "prices.item1.price",
    text: "prices.item1.text",
    advantages: [
      "prices.item1.advantages.count",
      "prices.item1.advantages.size",
      "prices.item1.advantages.edit",
    ],
  },
  {
    title: "prices.item2.title",
    subtitle: "prices.item2.subtitle",
    price: "prices.item2.price",
    advantages: [
      "prices.item2.advantages.count",
      "prices.item2.advantages.size",
      "prices.item2.advantages.edit",
    ],
  },
  {
    title: "prices.item3.title",
    subtitle: "prices.item3.subtitle",
    price: "prices.item3.price",
    advantages: [
      "prices.item3.advantages.count",
      "prices.item3.advantages.size",
      "prices.item3.advantages.edit",
      "prices.item3.advantages.psd",
    ],
  },
];

export const Prices: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Section title={formatMessage({ id: "prices.title" })} isGray>
      <div className={styles.sections}>
        {PRICES.map((item) => (
          <div key={item.title} className={styles.card}>
            <h3 className={styles.title}>
              {formatMessage({ id: item.title })}
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: formatMessage({ id: item.subtitle }),
              }}
              className={styles.subtitle}
            />
            <p className={styles.price}>{formatMessage({ id: item.price })}</p>

            <ul className={styles.list}>
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
            </ul>
            {/* <button>Выбрать</button> */}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Prices;
