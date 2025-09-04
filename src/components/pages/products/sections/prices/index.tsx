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
    title: "Вырезание товара на белый фон",
    subtitle:
      "Цифровая обработка, при которой товар аккуратно отделяется от исходного фона и размещается на чистом белом. Такой вариант идеально подходит для маркетплейсов и интернет-магазинов, где важна строгая подача товара без лишних деталей.",
    price: "от 100 руб./фото",
    images: [`/product/price/cut_photo/1.webp`],
  },
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
  {
    title: "Имиджевая предметная съемка",
    subtitle:
      "Атмосферные кадры, где продукт подаётся в окружении фактур, реквизита и света. Такой контент продаёт эмоцию и усиливает имидж бренда. Подходит для рекламных кампаний, соцсетей и баннеров.",
    price: "от 690 руб./фото",
    images: [
      `/product/price/image/1.webp`,
      `/product/price/image/2.webp`,
      `/product/price/image/3.webp`,
    ],
  },
  {
    title: "Предметная съёмка с людьми",
    subtitle:
      "Фотографии товара в реальном использовании: руки, модели, взаимодействие с продуктом. Такой контент повышает доверие покупателей и помогает представить товар «в жизни». Рекомендуется для маркетплейсов, лендингов и соцсетей.",
    price: "от 990 руб./фото",
    images: [
      `/product/price/with_people/1.webp`,
      `/product/price/with_people/2.webp`,
      `/product/price/with_people/3.webp`,
    ],
  },
  {
    title: "Каталог на однотонном фоне",
    subtitle:
      "Классический стандарт для онлайн-витрин и маркетплейсов. Однотонном фон подчёркивает товар и отвечает техническим требованиям площадок (Wildberries, Ozon и др.). Лучший выбор для карточек товаров и интернет-магазинов.",
    price: "от 780 руб./ракурс",
    images: [
      `/product/price/catalog/1.webp`,
      `/product/price/catalog/2.webp`,
      `/product/price/catalog/3.webp`,
    ],
  },
  {
    title: "Съёмка лукбука",
    subtitle:
      "Стильные образы с моделями в профессиональной подаче. Полноценные кадры для рекламных кампаний, социальных сетей и пресс-релизов. Создаём визуальный стиль бренда, готовый к публикации в журналах и промо-материалах.",
    price: "от 1990 руб./фото",
    images: [
      `/product/price/lookbook/1.webp`,
      `/product/price/lookbook/2.webp`,
      `/product/price/lookbook/3.webp`,
    ],
  },
  {
    title: "Создание уникальной консистентной модели для каталога",
    subtitle:
      "Разработка виртуальной модели, которая будет использоваться для всей линейки одежды или аксессуаров. Гарантия единого стиля и узнаваемости бренда. Позволяет масштабировать съёмку каталога без затрат на реальных моделей и студии.",
    price: "4990 руб./модель",
    images: [
      `/product/price/model/1.webp`,
      `/product/price/model/4.webp`,
      `/product/price/model/3.webp`,
    ],
  },
];

const PACKAGES = [
  { title: "Мини", count: "5 фото", discount: "10%" },
  { title: "Стандарт", count: "10 фото", discount: "15%" },
  { title: "Профи", count: "20 фото", discount: "20%" },
  { title: "Макси", count: "50+ фото", discount: "30%" },
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
        </div>

        <div className={styles.price}>{price}</div>
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
      title={formatMessage({ id: "products.prices.title" })}
      isGray={true}
      // side="left"
      // size="960"
    >
      <div className={styles.additional}>
        <InfoBox variant="success">
          Тестовое фото товара - <strong>Бесплатно</strong>
        </InfoBox>

        <InfoBox variant="info">
          <h5>Скидка за количество</h5>
          <div className={styles.packages}>
            {PACKAGES.map((item) => (
              <div key={item.title} className={styles.packageItem}>
                <div>
                  {item.count} → <strong>{item.discount}</strong>
                </div>
              </div>
            ))}
          </div>
        </InfoBox>
      </div>

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

      {/* <div className={styles.additional}>
        <h4>Скидка за количество</h4>
        <div className={styles.packages}>
          {PACKAGES.map((item) => (
            <div key={item.title} className={styles.packageItem}>
              <strong className={styles.packageTitle}>{item.title}</strong>
              <div>
                {item.count} → {item.discount}
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </Section>
  );
};

export default Prices;
