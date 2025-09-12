import { route } from "@/utils/routing";

export const homePage = route({
  ru: "/",
  en: "/en",
});
export const productPageRoute = route({
  ru: "/obrabotka-foto-tovarov-dlya-marketpleysov",
  en: "/en/creating-photo-for-e-commerce",
});
export const iiModelPageRoute = route({
  ru: "/virtualnaya-ii-model-dlya-kataloga",
  en: "/en/virtual-model-for-the-catalog",
});
export const productPortfolioPageRoute = route({
  ru: "/products-portfolio/[type]",
  en: "/en/products-portfolio/[type]",
});
// export const aiConsultationPageRoute = route({
//   ru: "/konsultatsii-po-neirosetyam",
//   en: "/konsultatsii-po-neirosetyam",
// });
export const modelsPageRoute = route({
  ru: "/models/[type]",
  en: "/en/models/[type]",
});

export const modelPageRoute = route({
  ru: "/models/[type]/[id]",
  en: "/en/models/[type/[id]",
});