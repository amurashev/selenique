import { intensiveNeurovideoPageRoute } from "./routes";

export const COURSES_DATA = {
  intensive_neurovideo: {
    titleKey: "intensive_neurovideo.hero.title",
    menuTitleKey: "intensive_neurovideo.menu.title",
    image: "/intensive_ai/bg.webp",
    route: intensiveNeurovideoPageRoute,
    prices: {
      basic: {
        titleKey: "intensive_neurovideo.prices.item1.title",
        textKey: "intensive_neurovideo.prices.item1.text",
        resultKey: "intensive_neurovideo.prices.item1.result",
        advantages: [
          "intensive_neurovideo.prices.item1.adv1",
          "intensive_neurovideo.prices.item1.adv2",
          "intensive_neurovideo.prices.item1.adv3",
        ],
        price: { ru: 9900, en: 0 },
      },
      pro: {
        titleKey: "intensive_neurovideo.prices.item2.title",
        textKey: "intensive_neurovideo.prices.item2.text",
        resultKey: "intensive_neurovideo.prices.item2.result",
        advantages: [
          "intensive_neurovideo.prices.item2.adv1",
          "intensive_neurovideo.prices.item2.adv2",
          "intensive_neurovideo.prices.item2.adv3",
          "intensive_neurovideo.prices.item2.adv4",
        ],
        price: { ru: 15900, en: 0 },
      },
      vip: {
        titleKey: "intensive_neurovideo.prices.item3.title",
        textKey: "intensive_neurovideo.prices.item3.text",
        resultKey: "intensive_neurovideo.prices.item3.result",
        advantages: [
          "intensive_neurovideo.prices.item3.adv1",
          "intensive_neurovideo.prices.item3.adv2",
          "intensive_neurovideo.prices.item3.adv3",
          "intensive_neurovideo.prices.item3.adv4",
          "intensive_neurovideo.prices.item3.adv5",
        ],
        price: { ru: 69900, en: 0 },
      },
    },
  },
};

export const COURSES = ["intensive_neurovideo"];
