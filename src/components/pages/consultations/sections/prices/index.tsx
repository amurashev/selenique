"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../layout/section";

import styles from "./styles.module.css";
import PriceCard from "@/components/sections/price-card";

export const Prices: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Section
      title={formatMessage({ id: "consultations.prices.title" })}
      // isGray={true}
    >
      <div className={styles.sections}>
        <PriceCard title="Часовая консультация" price={6990}>
          <>
            <p>
              <b>Длительность</b>: 60 мин
            </p>
            <p>
              За час разбираем вашу нишу и текущие карточки, показываем слабые
              места, формулируем два готовых текста-задания для нейросети под
              ваш товар и площадку, делаем 5–10 пробных кадров (ракурсы, фон,
              свет) и отдаём понятный список улучшений с приоритетами. На выходе
              — что можно сделать уже сегодня своими силами, какие кадры
              отправлять в тест и как привести каталог к единому виду; при
              необходимости подскажу, что лучше отдать на доработку.
            </p>
          </>
        </PriceCard>
      </div>
    </Section>
  );
};

export default Prices;
