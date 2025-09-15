"use client";

import { PriceType } from "@/components/types";

export type PhotoshotPrice = "lite" | "basic" | "pro";

export const PHOTOSHOT_PRICES_DATA: Record<
  PhotoshotPrice,
  {
    titleKey: string;
    adv: Record<string, string>;
    price: PriceType;
    images: string[];
  }
> = {
  lite: {
    titleKey: "ii_photoshoot.price.item1.title",
    adv: {
      item1: "ii_photoshoot.price.item1.adv1",
      item2: "ii_photoshoot.price.item1.adv2",
      item3: "ii_photoshoot.price.item1.adv3",
    },
    price: {
      ru: 3900,
      en: 2,
    },
    images: [],
  },
  basic: {
    titleKey: "ii_photoshoot.price.item2.title",
    adv: {
      item1: "ii_photoshoot.price.item2.adv1",
      item2: "ii_photoshoot.price.item2.adv2",
      item3: "ii_photoshoot.price.item2.adv3",
    },
    price: {
      ru: 5900,
      en: 2,
    },
    images: [],
  },
  pro: {
    titleKey: "ii_photoshoot.price.item3.title",
    adv: {
      item1: "ii_photoshoot.price.item3.adv1",
      item2: "ii_photoshoot.price.item3.adv2",
      item3: "ii_photoshoot.price.item3.adv3",
    },
    price: {
      ru: 14900,
      en: 2,
    },
    images: [],
  },
};

export const PHOTOSHOT_PRICE_LIST: PhotoshotPrice[] = ["lite", "basic", "pro"];
