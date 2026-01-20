export type PossibleLocales = "en" | "ru";

export type PriceType = Record<string, number>;


export type DigitalItem = {
  id: number;
  gumroad: {
    id: string
    slug: string
  }
  isDisabled?: boolean;
  name: string;
  price: PriceType;
  summary?: string;
  text: string;
  // related?: string[];
  links?: {
    cm?: string;
  };
  images: number[];
};

export type PromptBookRaw = DigitalItem & {
  number: number;
  packs?: number
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
    | "bundle"
  )[];
};

export type PromptBook = PromptBookRaw & {
  slug: string;
};

export type GuideRaw = DigitalItem & {
};

export type Guide = GuideRaw & {
  slug: string;
};
