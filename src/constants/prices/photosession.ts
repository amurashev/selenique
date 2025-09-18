"use client";

import { PriceType } from "@/components/types";

export type PhotoshotPrice = "basic"

export const PHOTOSHOT_PRICES_DATA: Record<
  PhotoshotPrice,
  {
    titleKey: string;
    textKey?: string
    count: string
    term: string
    // adv: Record<string, string>;
    price: PriceType;
    images: string[];
  }
> = {
  // lite: {
  //   titleKey: "ii_photoshoot.price.item1.title",
  //   adv: {
  //     item1: "ii_photoshoot.price.item1.adv1",
  //     item2: "ii_photoshoot.price.item1.adv2",
  //     item3: "ii_photoshoot.price.item1.adv3",
  //   },
  //   price: {
  //     ru: 3900,
  //     en: 2,
  //   },
  //   images: [],
  // },
  basic: {
    titleKey: "ii_photoshoot.price.item2.title",
    textKey: "ii_photoshoot.price.item2.text",
    count: "ii_photoshoot.price.item2.count",
    term: "ii_photoshoot.price.item2.term",
    price: {
      ru: 4900,
      en: 50,
    },
    images: [],
  },
  // pro: {
  //   titleKey: "ii_photoshoot.price.item3.title",
  //   adv: {
  //     item1: "ii_photoshoot.price.item3.adv1",
  //     item2: "ii_photoshoot.price.item3.adv2",
  //     item3: "ii_photoshoot.price.item3.adv3",
  //   },
  //   price: {
  //     ru: 14900,
  //     en: 2,
  //   },
  //   images: [],
  // },
};

export const PHOTOSHOT_PRICE_LIST: PhotoshotPrice[] = ["basic"];
