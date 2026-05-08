export type ImagesPack = {
  id: number;
  // slug: string;
  title: string;
  etsyID: number
  count: number
  images: number[]
};


export const IMAGES_PACKS: Record<string, ImagesPack> = {
  "faceless-stock-photos-lifestyle": {
    id: 1,
    etsyID: 4500430540,
    count: 330,
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: "Faceless Stock Photos Lifestyle",
  },
  "tarot-and-spiritual-stock-photos": {
    id: 2,
    etsyID: 4501555429,
    count: 120,
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: "Tarot and Spiritual Stock Photos | Tarot Cards, Crystals, Moon Rituals, Witch Aesthetic & Spiritual Morning",
  },
  "luxury-skincare-stock-photos-body": {
    id: 3,
    etsyID: 4350697370,
    count: 120,
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: "Luxury Skincare Stock Photos | Body & Wellness Photography",
  },
  "sport-aesthetic-stock-images": {
    id: 4,
    etsyID: 4355918918,
    count: 110,
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: "Sport Stock Photos | Fitness Images",
  },
}

