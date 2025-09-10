"use client";

import { iiModelPageRoute } from "@/constants/routes";

export type ProductService =
  | "test_photo"
  | "remove_background"
  | "subject_photo_simple"
  | "subject_photo_image"
  | "subject_photo_people"
  | "catalog"
  | "lookbook"
  | "ii_model";

export const PRODUCT_PRICES_DATA: Record<
  ProductService,
  {
    title: string;
    titleShort?: string
    price: number;
    priceUnit: string;
    description: string;
    images: string[];
    link?: string;
  }
> = {
  test_photo: {
    title: "Тестовое фото товара",
    price: 0,
    priceUnit: "",
    description: "Пришлите 1–2 качественных фото товара и коротко опишите желаемый результат или прикрепите референсы — мы сделаем бесплатный тест-кадр в нужной эстетике (каталожный белый фон или lifestyle-сцена). Срок: 24–48 часов.",
    images: [],
  },
  remove_background: {
    title: "Вырезание товара на белый фон",
    price: 100,
    priceUnit: "фото",
    description:
      "Цифровая обработка, при которой товар аккуратно отделяется от исходного фона и размещается на чистом белом. Такой вариант идеально подходит для маркетплейсов и интернет-магазинов, где важна строгая подача товара без лишних деталей.",
    images: [`/product/price/cut_photo/1.webp`],
  },
  subject_photo_simple: {
    title: "Предметная съёмка на простом/градиентном фоне",
    description:
      "Минималистичные фото с акцентом только на товар. Чистый фон или мягкий градиент — быстрый и стильный вариант для маркетплейсов и соцсетей. Идеально, если нужно показать продукт максимально ясно и без отвлекающих деталей.",
    price: 390,
    priceUnit: "фото",
    images: [
      `/product/price/one_tone/1.webp`,
      `/product/price/one_tone/2.webp`,
      `/product/price/one_tone/3.webp`,
    ],
  },
  subject_photo_image: {
    title: "Имиджевая предметная съемка",
    description:
      "Атмосферные кадры, где продукт подаётся в окружении фактур, реквизита и света. Такой контент продаёт эмоцию и усиливает имидж бренда. Подходит для рекламных кампаний, соцсетей и баннеров.",
    price: 690,
    priceUnit: "фото",
    images: [
      `/product/price/image/1.webp`,
      `/product/price/image/2.webp`,
      `/product/price/image/3.webp`,
    ],
  },
  subject_photo_people: {
    title: "Предметная съёмка с людьми",
    description:
      "Фотографии товара в реальном использовании: руки, модели, взаимодействие с продуктом. Такой контент повышает доверие покупателей и помогает представить товар «в жизни». Рекомендуется для маркетплейсов, лендингов и соцсетей.",
    price: 990,
    priceUnit: "фото",
    images: [
      `/product/price/with_people/1.webp`,
      `/product/price/with_people/2.webp`,
      `/product/price/with_people/3.webp`,
    ],
  },
  catalog: {
    title: "Каталог на однотонном фоне",
    description:
      "Классический стандарт для онлайн-витрин и маркетплейсов. Однотонном фон подчёркивает товар и отвечает техническим требованиям площадок (Wildberries, Ozon и др.). Лучший выбор для карточек товаров и интернет-магазинов.",
    price: 790,
    priceUnit: "ракурс",
    images: [
      `/product/price/catalog/1.webp`,
      `/product/price/catalog/2.webp`,
      `/product/price/catalog/3.webp`,
    ],
  },
  lookbook: {
    title: "Съёмка лукбука",
    description:
      "Стильные образы с моделями в профессиональной подаче. Полноценные кадры для рекламных кампаний, социальных сетей и пресс-релизов. Создаём визуальный стиль бренда, готовый к публикации в журналах и промо-материалах.",
    price: 1990,
    priceUnit: "фото",
    images: [
      `/product/price/lookbook/1.webp`,
      `/product/price/lookbook/2.webp`,
      `/product/price/lookbook/3.webp`,
    ],
  },
  ii_model: {
    title: "Создание уникальной консистентной модели для каталога",
    titleShort: 'Разработка виртуальной модели',
    description:
      "Разработка виртуальной модели, которая будет использоваться для всей линейки одежды или аксессуаров. Гарантия единого стиля и узнаваемости бренда. Позволяет масштабировать съёмку каталога без затрат на реальных моделей и студии.",
    price: 4990,
    priceUnit: "модель",
    images: [
      `/product/price/model/1.webp`,
      `/product/price/model/4.webp`,
      `/product/price/model/3.webp`,
    ],
    link: iiModelPageRoute.getUrl(),
  },
};

export const PRODUCT_PRICE_LIST: ProductService[] = [
  "test_photo",
  "remove_background",
  "subject_photo_simple",
  "subject_photo_image",
  "subject_photo_people",
  "catalog",
  "lookbook",
  "ii_model",
];

export const PRODUCT_PRICE_PACKAGES = [
  { title: "Мини", count: "5 фото", discount: "10%" },
  { title: "Стандарт", count: "10 фото", discount: "15%" },
  { title: "Профи", count: "20 фото", discount: "20%" },
  { title: "Макси", count: "50+ фото", discount: "30%" },
];
