export type PossibleLocales = "en" | "ru";

export type PriceType = Record<string, number>;

export type PromptBookRaw = {
  isDisabled?: boolean
  name: string;
  price: PriceType;
  text: string;
  related?: string[];
  links: {
    patreon?: string;
    cm?: string;
    etsy?: string;
    gumroad?: string
  };
  images: string[];
};

export type PromptBook = PromptBookRaw & {
  slug: string;
};
