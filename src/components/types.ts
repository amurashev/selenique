export type PossibleLocales = "en" | "ru";

export type PriceType = Record<string, number>;

export type PromptCategories = | "fashion"
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
  | "product"
  | "studio"
  | "headshot"
  | "maternity"
  | "lifestyle"
  | "faceless"
  | "portrait"

export type PromptModels = | "gemini"
  | "nano_banana"
  | "midjourney"
  | "chat_gpt"

export type DigitalItem = {
  id: number;
  gumroad: {
    id: string
    slug: string
  }
  boostyId?: string
  isDisabled?: boolean;
  name: string;
  price: PriceType;
  summary?: string;
  text: string;
  fileType?: "link"
  // related?: string[];
  links?: {
    cm?: string;
  };
  images: number[];
};

export type PromptBookRaw = DigitalItem & {
  number?: number;
  pack?: number[]
  type?: "guide",
  tags: PromptCategories[];
};

export type PromptBook = PromptBookRaw & {
  slug: string;
};

export type GuideRaw = DigitalItem & {
};

export type Guide = GuideRaw & {
  slug: string;
};
