import { CLIPART_BUNDLES } from ".";

export const getClipartBundlesList = (locale: string) => {
  return Object.keys(CLIPART_BUNDLES)
    .map((item) => {
      const data = CLIPART_BUNDLES[item];

      return data;
    })
    .filter((item) => item.id);
};
