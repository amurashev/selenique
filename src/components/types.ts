export type PossibleLocales = "en" | "ru";

export type PriceType = Record<string, number>;

export type PromptCategories = | "fashion"
  | "business"
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
  | "avatar"
  | "food"
  | "character_reference"

export type PromptModels = | "gemini"
  | "nano_banana"
  | "midjourney"
  | "chat_gpt"

export type DigitalItem = {
  id: number;
  gumroadSlug: string
  boostyId?: string
  isDisabled?: boolean;
  isBestseller?: boolean
  price?: PriceType;
  // summary?: string;
  // why?: string
  // text?: string;
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
  og?: boolean
  isGrowing?: boolean
};

export type PromptBook = PromptBookRaw & {
  slug: string;
  name: string;
  summary: string;
  description: string;
  why?: string
  text: string;
  testPrompt?: string

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


