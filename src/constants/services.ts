import { iiModelPageRoute, productPageRoute } from "./routes";

export const SERVICES = [
  {
    titleKey: "products.hero.title",
    menuTitleKey: "products.menu.title",
    image: "/product/bg2.webp",
    url: productPageRoute.getUrl(),
  },
  {
    titleKey: "ii_model.hero.title",
    menuTitleKey: "ii_model.menu.title",
    image: "/ii_models/bg.webp",
    url: iiModelPageRoute.getUrl(),
  },
];
