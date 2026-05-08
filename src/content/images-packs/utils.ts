import { IMAGES_PACKS } from ".";

export const getImagePacksList = (locale: string) => {
  return Object.keys(IMAGES_PACKS)
    .map((item) => {
      const data = IMAGES_PACKS[item];

      return data;
    })
    .filter((item) => item.id);
};
