import { iiModelPageRoute, iiPhotoShootPageRoute, productPageRoute, aiConsultationPageRoute } from "./routes";

export const SERVICES = [
  {
    titleKey: "products.hero.title",
    menuTitleKey: "products.menu.title",
    image: "/product/bg2_small.webp",
    route: productPageRoute,
  },
  {
    titleKey: "consultations.hero.title",
    menuTitleKey: "consultations.menu.title",
    image: "/consultations/bg_small.webp",
    route: aiConsultationPageRoute,
  },
  {
    titleKey: "ii_photoshoot.hero.title",
    menuTitleKey: "ii_photoshoot.menu.title",
    image: "/photoshoot/bg_small.webp",
    route: iiPhotoShootPageRoute,
  },
  {
    titleKey: "ii_model.hero.title",
    menuTitleKey: "ii_model.menu.title",
    image: "/ii_models/bg_small.webp",
    route: iiModelPageRoute,
  },
];
