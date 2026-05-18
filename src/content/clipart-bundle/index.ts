export type ClipartBundleRaw = {
  id: number;
  slug?: string;
  title: string;
  etsyID: number
  count: number
  images: number[]
  isDisabled?: boolean
};

export type ClipartBundle = ClipartBundleRaw & {
  slug: string;
  etsyLink: string
  boostyLink: string
  thumbImage: string
  description: string
  keywords: string
  imagesContent: string[] 
};

export const CLIPART_BUNDLES: Record<string, ClipartBundleRaw> = {
  "watercolor-gender-reveal": {
    id: 1,
    etsyID: 4475407614,
    count: 50,
    images: [1, 2, 3, 4, 5],
    title: "Watercolor Gender Reveal Clipart Bundle | Pink Blue Baby Shower Graphics",
  },
  "graduation-class-of-2026": {
    id: 2,
    etsyID: 4470339750,
    count: 50,
    images: [1, 2, 3, 4],
    title: "Graduation Clipart Bundle, Class of 2026 PNG Graphics, Congrats Grad Party Decor",
  },
  "blush-gold-floral-clipart-bundle": {
    id: 3,
    etsyID: 4471314300,
    count: 66,
    images: [1, 2, 3, 4, 5, 6, 7, 8],
    title: "Blush Gold Floral Clipart Bundle, Watercolor Peonies, Roses, Frames",
  },
  "mystical-digital-stickers-witchy-clipart": {
    id: 4,
    etsyID: 4484561830,
    count: 52,
    images: [1, 2, 3, 4, 5],
    title: "Mystical Celestial Clipart Bundle, Black Gold Witchy PNG Stickersr",
  },
  "90s-vibe-clipart-png-retro-y2k-icons": {
    id: 5,
    etsyID: 4481927315,
    count: 63,
    images: [1, 2, 3, 4, 5,6],
    title: "90s Vibe Clipart PNG, Retro Y2K Icons, Pixel Heart Graphics",
  },
  "gold-geometric-frames-clipart-art-deco": {
    id: 6,
    etsyID: 4477666591,
    count: 80,
    images: [1, 2, 3, 4, 5, 6, 7],
    title: "Gold Geometric Frames Clipart | Art Deco Borders, Luxury Wedding Graphics",
  },
}

