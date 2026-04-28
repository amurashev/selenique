export type Poster = {
  id: number;
  // slug: string;
  title: string;
  etsyID: number
};


export const POSTERS: Record<string, Poster> = {
  "dark-nun-poster-neon-halo-art-gothic": {
    id: 1,
    etsyID: 4494881421,
    title: 'Dark Nun Poster, Neon Halo Art, Gothic Fashion Wall Art',
  },
  "sphynx-cat-kimono": {
    id: 2,
    etsyID: 4495502564,
    title: 'Sphynx Cat Kimono Portrait Print | Japanese Floral Animal Art',
  },
  "moody-ocean-whale": {
    id: 3,
    etsyID: 4495600866,
    title: 'Moody Ocean Whale Printable Wall Art, Humpback Wildlife Poster',
  },
  "classical-statue": {
    id: 4,
    etsyID: 4495981045,
    title: 'Classical Statue Printable Wall Art | Modern Surreal Sculpture',
  },
}