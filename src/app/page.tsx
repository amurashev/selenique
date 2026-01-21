import HomeEntry, { metadata } from "./[lang]/page";

// TODO: fix meta
// export const metadata: Metadata = {
//   title: "Селеник Studio",
//   description:
//     "Мы занимаемся премиальной обработкой фото для маркетплейсов и создаём каталожные съёмки на ИИ-моделях. Это помогает брендам быстро и без студии получать красивые, единые по стилю кадры для карточек товаров и сайтов.",
// };

export { metadata };
// eslint-disable-next-line @typescript-eslint/no-explicit-any, react/display-name
export default async (params: any) => <HomeEntry {...params} />;
