"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../sections/section";

import styles from "./styles.module.css";
import PriceCard from "@/components/sections/price-card";

export const Price: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({ id: "ii_model.price.title" })}
      // text={formatMessage({ id: "ii_model.price.text" })}
      // isGray
    >
      <div className={styles.sections}>
        <PriceCard title="Разработка виртуальной модели" price="4990руб.">
          <>
            <p>
              Модель будет использоваться для всей линейки одежды или
              аксессуаров. Гарантия единого стиля и узнаваемости бренда.
              Позволяет масштабировать съёмку каталога без затрат на реальных
              моделей и студии.
            </p>
            <p>
              <b>Срок</b>: 1–2 дня.
            </p>
          </>
        </PriceCard>
      </div>
    </Section>
  );
};

export default Price;
