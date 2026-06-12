export type ImagesPackRaw = {
  id: number;
  etsyID: number;
  gumroad?: string;
  cmLink?: string;
  count: number;
  size: number[];
  orientation: "h" | "v";
  ar: "9:16" | "3:4" | "2:3";
  images: number[];
};

export type ImagesPack = ImagesPackRaw & {
  slug: string;
  pageUrl: string;
  etsyLink?: string;
  cmLink?: string;
  gumroadLink?: string;
  thumbImage: string;
  mainImage: string;
  title: string;
  description: string;
  keywords: string;
  imagesContent: string[];
};

export const IMAGES_PACKS: Record<string, ImagesPackRaw> = {
  "faceless-stock-photos-lifestyle": {
    id: 1,
    etsyID: 4500430540,
    cmLink: "292227597-330-Faceless-Stock-Photos",
    count: 330,
    size: [1536, 2752],
    ar: "9:16",
    orientation: "v",
    images: [4, 5, 6],
  },
  // "tarot-and-spiritual-stock-photos": {
  //   id: 2,
  //   etsyID: 4501555429,
  //   count: 120,
  //   images: [],
  //   title:
  //     "Tarot and Spiritual Stock Photos | Tarot Cards, Crystals, Moon Rituals, Witch Aesthetic & Spiritual Morning",
  // },
  "luxury-skincare-stock-photos-body": {
    id: 3,
    etsyID: 4350697370,
    cmLink: "291785476-130-Body-Aesthetic-Stock-Images",
    gumroad: "body-aesthetic-stock-images",
    count: 130,
    size: [4416, 5888],
    ar: "3:4",
    orientation: "v",
    images: [5, 6, 7, 8],
  },
  "sport-aesthetic-stock-images": {
    id: 4,
    etsyID: 4355918918,
    cmLink: "291785534-110-Sport-Aesthetic-Stock-Images",
    count: 110,
    size: [4416, 5888],
    ar: "3:4",
    orientation: "v",
    images: [5, 6, 7, 8],
  },
  "men-workout-stock-photos": {
    id: 5,
    etsyID: 4499672577,
    cmLink: "292232220-100-Men-Workout-Stock-Photos-Bundle",
    count: 100,
    size: [2208, 2944],
    ar: "3:4",
    orientation: "v",
    images: [7, 8, 9, 10, 11],
  },
  "stock-images-for-yoga-fitness": {
    id: 6,
    etsyID: 4506032361,
    cmLink: "292237092-130-Stock-Images-for-Yoga-Fitness",
    count: 130,
    size: [4608, 8256],
    ar: "9:16",
    orientation: "v",
    images: [7, 8, 9, 10, 11],
  },
  "hair-salon-stock-photos": {
    id: 7,
    etsyID: 4355913092,
    cmLink: "291785522-150-Hair-Aesthetic-Stock-Images",
    count: 150,
    size: [4416, 5888],
    ar: "3:4",
    orientation: "v",
    images: [5, 6, 7, 8],
  },
};
