export type PossibleLocales = "en" | "ru";

export type PriceType = Record<string, number>;

export type PromptBookRaw = {
  name: string;
  price: PriceType;
  text: string;
  links: {
    patreon?: string;
    cm?: string;
    etsy?: string;
  };
  images: string[];
};

export type PromptBook = PromptBookRaw & {
  slug: string;
};
