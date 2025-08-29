"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../sections/section";

import styles from "./styles.module.css";

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
    <Section title={formatMessage({ id: "prices.title" })}>
      <div className={styles.sections}>
        {PRICES.map((item) => (
          <div key={item.title} className={styles.card}>
            <h3 className={styles.title}>
              {formatMessage({ id: item.title })}
            </h3>
            <h4
              dangerouslySetInnerHTML={{
                __html: formatMessage({ id: item.subtitle }),
              }}
              className={styles.subtitle}
            />
            <p className={styles.price}>{formatMessage({ id: item.price })}</p>

            <ul className={styles.list}>
              {item.advantages.map((adv) => (
                <li key={adv} className={styles.item}>
                  <span className={styles.icon}>✅</span>
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
