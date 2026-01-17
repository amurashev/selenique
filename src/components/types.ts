export type PossibleLocales = "en" | "ru";

export type PriceType = Record<string, number>;

export type PromptBookRaw = {
  id: number;
  gumroadId?: string;
  isDisabled?: boolean;
  name: string;
  number: number;
  price: PriceType;
  summary?: string;
  text: string;
  tags: (
    | "fashion"
    | "business"
    | "red_carpet"
    | "cosmetic"
    | "fantasy"
    | "men"
    | "women"
    | "kids"
    | "beauty"
    | "jewelry"
    | "christmas"
  )[];
  // related?: string[];
  links: {
    patreon?: string;
    cm?: string;
    etsy?: string;
    gumroad?: string;
  };
  images: number[];
};

export type PromptBook = PromptBookRaw & {
  slug: string;
};

export type GuideRaw = {
  id: number;
  isDisabled: boolean
  gumroadId?: string;
  name: string;
  price: PriceType;
  summary: string
  text: string;
  links: {
    cm?: string;
    etsy?: string;
    gumroad?: string;
  };
  images: number[];
};

export type Guide = GuideRaw & {
  slug: string;
};
