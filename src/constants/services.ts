import { iiModelPageRoute, productPageRoute } from "./routes";

export const SERVICES = [
  {
    titleKey: "products.hero.title",
    menuTitleKey: "products.menu.title",
    image: "/product/bg2_small.webp",
    route: productPageRoute,
  },
  {
    titleKey: "ii_model.hero.title",
    menuTitleKey: "ii_model.menu.title",
    image: "/ii_models/bg_small.webp",
    route: iiModelPageRoute,
  },
];
