export type ImagesPackRaw = {
  id: number;
  etsyID: number;
  gumroad?: string;
  cmLink?: string
  count: number;
  size: number[];
  orientation: 'h' | 'v'
  ar: "9:16" | "3:4" | "2:3"
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
  title: string
  description: string;
  keywords: string;
  imagesContent: string[];
};

export const IMAGES_PACKS: Record<string, ImagesPackRaw> = {
  "faceless-stock-photos-lifestyle": {
    id: 1,
    etsyID: 4500430540,
    cmLink: '292227597-330-Faceless-Stock-Photos',
    count: 330,
    size: [1536, 2752],
    ar: "9:16",
    orientation: 'v',
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
  // "luxury-skincare-stock-photos-body": {
  //   id: 3,
  //   etsyID: 4350697370,
  //   count: 120,
  //   images: [],
  //   title: "Luxury Skincare Stock Photos | Body & Wellness Photography",
  // },
  // "sport-aesthetic-stock-images": {
  //   id: 4,
  //   etsyID: 4355918918,
  //   count: 110,
  //   images: [],
  //   title: "Sport Stock Photos | Fitness Images",
  // },
};
