import { PriceType } from "@/components/types";

export type GuideLocaleItem = {
  id: number;
  gumroadSlug: string
  boostyId?: string
  name: string
  description: string
  price: PriceType
};

export type GuideItem = {
  locales: Record<string, GuideLocaleItem>
};

export type Guide = GuideLocaleItem & {
  slug: string
  vertImage: string
};

export const GUIDES: Record<string, GuideItem> = {
  "virtual-influence-guide": {
    locales: {
      en: {
        id: 33,
        gumroadSlug: "virtual-influence-guide",
        name: "Iconista lab: Virtual Influence: The 48-Hour Playbook",
        description: "Build an AI influencer from scratch and grow your Instagram presence—no camera, no tech skills, no followers required.",
        price: {
          en: 67,
        },
      },
      ru: {
        id: 41,
        gumroadSlug: "virtual-influence-guide-ru",
        boostyId: "7a892ee4-c67c-4eba-80f2-2f43c64fcd58",
        name: "Iconista Lab: Пошаговый гайд по созданию ИИ инфлюенсера",
        description: "Построй ИИ-инфлюенсера с нуля и развивай аккаунт в Instagram — без камеры, без технических навыков, без подписчиков для старта.",
        price: {
          ru: 3990
        },
      },
    }
  },
}