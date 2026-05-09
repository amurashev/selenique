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
}

