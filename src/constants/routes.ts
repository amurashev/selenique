import { route } from "@/utils/routing";

export const homePage = route("/");
export const productPortfolioPageRoute = route("/products-portfolio/[type]");
export const modelsPageRoute = route("/models/[type]");
export const modelPageRoute = route("/models/[type]/[id]");
export const promptBookListPageRoute = route("/prompt-books");
export const promptBookPageRoute = route("/prompt-books/[slug]");

export const guidesListPageRoute = route("/guides");
export const guidePageRoute = route("/guides/[slug]");

export const productPageRoute = route({
  default: "/services/creating-photo-for-e-commerce",
  ru: "/obrabotka-foto-tovarov-dlya-marketpleysov",
  en: "/en/creating-photo-for-e-commerce",
});
export const iiModelPageRoute = route({
  default: "/services/virtual-model-for-the-catalog",
  // ru: "/virtualnaya-ii-model-dlya-kataloga",
  en: "/en/virtual-model-for-the-catalog",
});
export const iiPhotoShootPageRoute = route({
  default: "/services/ai_photoshoot",
  // ru: "/neirofotosessiya",
  en: "/en/ai_photoshoot",
});
export const aiConsultationPageRoute = route({
  default: "/services/ai_consulting",
  // ru: "/konsultatsii-po-neirosetyam",
  en: "/en/ai_consulting",
});
export const intensiveNeurovideoPageRoute = route({
  default: '/',
  ru: "/courses/intensive_neirovideo_s_nulya",
  en: "/",
});


