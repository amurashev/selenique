export type ClipartBundle = {
  id: number;
  // slug: string;
  title: string;
  etsyID: number
  count: number
  images: number[]
};


export const CLIPART_BUNDLES: Record<string, ClipartBundle> = {
  "watercolor-gender-reveal": {
    id: 1,
    etsyID: 4475407614,
    count: 50,
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: "Watercolor Gender Reveal Clipart Bundle | Pink Blue Baby Shower Graphics",
  },
  "graduation-class-of-2026": {
    id: 2,
    etsyID: 4470339750,
    count: 50,
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: "Graduation Clipart Bundle, Class of 2026 PNG Graphics, Congrats Grad Party Decor",
  },
  "blush-gold-floral-clipart-bundle": {
    id: 3,
    etsyID: 4471314300,
    count: 66,
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: "Blush Gold Floral Clipart Bundle, Watercolor Peonies, Roses, Frames",
  },
  "mystical-digital-stickers-witchy-clipart": {
    id: 4,
    etsyID: 4484561830,
    count: 52,
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    title: "Mystical Celestial Clipart Bundle, Black Gold Witchy PNG Stickersr",
  },
}

