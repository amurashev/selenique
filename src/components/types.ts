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
  | "product"
  | "studio"
  | "headshot"
  | "maternity"
  | "lifestyle"
  | "faceless"
  | "portrait"
  | "bundles"
  | "design"

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
  isBestseller?: boolean
  name: string;
  price: PriceType;
  summary?: string;
  text: string;
  fileType?: "link"
  links?: {
    cm?: string;
  };
  images: number[];
};

export type PromptBookRaw = DigitalItem & {
  number?: number;
  pack?: number[]
  type?: "bundle" | "pack"
  tags: PromptCategories[];
  mainCategory?: PromptCategories
};

export type PromptBook = PromptBookRaw & {
  slug: string;
  // rating: { rating: number, count: number }
  sales: number
  reviewsRating: number
  reviewsRatingFixed: string
  reviewsCount: number
  point: number
  vertImage: string
  purchaseLink: string
  boostyLink: string
};


