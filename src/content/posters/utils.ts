import { POSTERS } from ".";

export const getPostersList = (locale: string) => {
  return Object.keys(POSTERS)
    .map((item) => {
      const data = POSTERS[item];

      return data;
    })
    .filter((item) => item.id);
};
