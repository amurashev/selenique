import { PriceType } from "@/components/types";

export type GuideLocaleItem = {
  id: number;
  gumroadSlug: string
  boostyId?: string
  name: string
  description: string
  price: PriceType
  noLanding?: boolean
};

export type GuideItem = {
  locales: Record<string, GuideLocaleItem>
};

export type Guide = GuideLocaleItem & {
  slug: string
  vertImage: string
  purchaseLink: string
  boostyLink: string
  gumroadLink: string
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
  "ai-for-fashion-brands": {
    locales: {
      ru: {
        id: 43,
        gumroadSlug: "ai-for-fashion-brands-guide-ru",
        boostyId: "",
        name: "Практический мини-курс: AI-съёмка для fashion-брендов",
        description: "Если вы работаете в fashion, вы знаете:съёмки - это дорого, долго и зависимо от десятков факторов. Этот курс - о том, как перевести большую часть продакшна на AI и выстроить управляемую систему съёмок внутри бренда.",
        price: {
          ru: 5990
        },
      },
    }
  },
  "virtual-influence-instagram-playbook": {
    locales: {
      en: {
        noLanding: true,
        id: 46,
        gumroadSlug: "virtual-influence-instagram-playbook",
        boostyId: "",
        name: "Mastering Virtual Influence: The Step-by-Step Instagram Playbook",
        description: "This guide is a comprehensive, 7-part roadmap designed to help you build, grow, and monetize a virtual persona on Instagram. This guide provides a step-by-step action plan to automate 94% of your content creation using AI, master the Instagram algorithm through strategic engagement, and scale your digital brand from zero to a realistic 2K–5K monthly income within one year.",
        price: {
          en: 14.9
        },
      },
    }
  }
}