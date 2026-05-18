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
  "gold-geometric-frames-clipart-art-decor": {
    id: 6,
    etsyID: 4477666591,
    count: 80,
    images: [1, 2, 3, 4, 5, 6, 7],
    title: "Gold Geometric Frames Clipart | Art Deco Borders, Luxury Wedding Graphics",
  },
  "bbq-clipart-bundle-grill-burgers-corn": {
    id: 7,
    etsyID: 4480194375,
    count: 50,
    images: [1, 2, 3, 4, 5],
    title: "BBQ Clipart Bundle | Grill, Burgers, Corn, Chicken Wings Illustrations",
  },
  "watercolor-nail-salon-clipart-manicure": {
    id: 8,
    etsyID: 4474507593,
    count: 55,
    images: [1, 2, 3, 4, 5, 6],
    title: "Watercolor Nail Salon Clipart | Manicure, Nail Polish, Beauty Graphics",
  },
  "90s-pixel-sticker-clipart-bundle-retro": {
    id: 9,
    etsyID: 4481929724,
    count: 50,
    images: [1, 2, 3, 4, 5, 6],
    title: "90s Pixel Sticker Clipart Bundle, Retro Gaming PNGs, Y2K Style Icons",
  },
  "lass-of-2026-graduation-clipart-black": {
    id: 10,
    etsyID: 4478167508,
    count: 65,
    images: [1, 2, 3, 4, 5, 6, 7],
    title: "Class of 2026 Graduation Clipart | Black Gold PNG Bundle",
  },
}



