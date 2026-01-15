export type PossibleLocales = "en" | "ru";

export type PriceType = Record<string, number>;

export type PromptBookRaw = {
  id: number
  isDisabled?: boolean
  name: string;
  price: PriceType;
  summary?: string;
  text: string;
  related?: string[];
  links: {
    patreon?: string;
    cm?: string;
    etsy?: string;
    gumroad?: string
  };
  images: number[];
};

export type PromptBook = PromptBookRaw & {
  slug: string;
};

export type GuideRaw = {
  name: string;
  price: PriceType;
  text: string;
  links: {
    cm?: string;
    etsy?: string;
    gumroad?: string
  };
  images: string[];
};

export type Guide = GuideRaw & {
  slug: string;
};
