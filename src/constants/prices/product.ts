"use client";

import { iiModelPageRoute } from "@/constants/routes";
import { BaseRouteType, Route } from "@/utils/routing";

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
    titleKey: string;
    titleShortKey?: string;
    descriptionKey: string;
    price: Record<string, number>;
    priceUnit: string;
    images: string[];
    mainImage?: string;
    route?: Route<BaseRouteType>;
  }
> = {
  test_photo: {
    titleKey: "products.prices.test_photo.name",
    descriptionKey: "products.prices.test_photo.description",
    price: {
      ru: 0,
      en: 0,
    },
    priceUnit: "",
    images: [],
  },
  remove_background: {
    titleKey: "products.prices.remove_background.name",
    descriptionKey: "products.prices.remove_background.description",
    price: {
      ru: 100,
      en: 2,
    },
    priceUnit: "photo",
    images: [`/product/price/cut_photo/1.webp`],
  },
  subject_photo_simple: {
    titleKey: "products.prices.subject_photo_simple.name",
    descriptionKey: "products.prices.subject_photo_simple.description",
    price: {
      ru: 400,
      en: 8,
    },
    priceUnit: "photo",
    mainImage: "/product/price/one_tone/3.webp",
    images: [
      `/product/price/one_tone/1.webp`,
      `/product/price/one_tone/2.webp`,
      `/product/price/one_tone/3.webp`,
    ],
  },
  subject_photo_image: {
    titleKey: "products.prices.subject_photo_image.name",
    descriptionKey: "products.prices.subject_photo_image.description",
    price: {
      ru: 600,
      en: 10,
    },
    priceUnit: "photo",
    images: [
      `/product/price/image/1.webp`,
      `/product/price/image/2.webp`,
      `/product/price/image/3.webp`,
    ],
    mainImage: "/product/price/image/3.webp",
  },
  subject_photo_people: {
    titleKey: "products.prices.subject_photo_people.name",
    descriptionKey: "products.prices.subject_photo_people.description",
    price: {
      ru: 750,
      en: 15,
    },
    priceUnit: "photo",
    mainImage: "/product/price/with_people/3.webp",
    images: [
      `/product/price/with_people/1.webp`,
      `/product/price/with_people/2.webp`,
      `/product/price/with_people/3.webp`,
    ],
  },
  catalog: {
    titleKey: "products.prices.catalog.name",
    descriptionKey: "products.prices.catalog.description",
    price: {
      ru: 800,
      en: 15,
    },
    priceUnit: "photo",
    mainImage: "/product/price/catalog/2.webp",
    images: [
      `/product/price/catalog/1.webp`,
      `/product/price/catalog/2.webp`,
      `/product/price/catalog/3.webp`,
    ],
  },
  lookbook: {
    titleKey: "products.prices.lookbook.name",
    descriptionKey: "products.prices.lookbook.description",
    price: {
      ru: 800,
      en: 15,
    },
    priceUnit: "photo",
    mainImage: "/product/price/lookbook/2.webp",
    images: [
      `/product/price/lookbook/1.webp`,
      `/product/price/lookbook/2.webp`,
      `/product/price/lookbook/3.webp`,
    ],
  },
  ii_model: {
    titleKey: "products.prices.ii_model.name",
    titleShortKey: "pproducts.rices.ii_model.name_short",
    descriptionKey: "products.prices.ii_model.description",
    price: {
      ru: 2000,
      en: 30,
    },
    priceUnit: "model",
    images: [
      `/product/price/model/1.webp`,
      `/product/price/model/4.webp`,
      `/product/price/model/3.webp`,
    ],
    route: iiModelPageRoute,
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
  { title: "Мини", count: 3, discount: 10 },
  { title: "Мини", count: 5, discount: 15 },
  { title: "Стандарт", count: 10, discount: 20 },
];
