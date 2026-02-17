import { PriceType } from "@/components/types";

export type GuideLocaleItem = {
  id: number;
  gumroadSlug: string;
  boostyId?: string;
  name: string;
  description: string;
  price: PriceType;
  noLanding?: boolean;
  isBestseller?: boolean;
};

export type GuideItem = {
  locales: Record<string, GuideLocaleItem>;
};

export type Guide = GuideLocaleItem & {
  slug: string;
  lang: string;
  vertImage: string;
  purchaseLink: string;
  boostyLink: string;
  gumroadLink: string;
};

export const GUIDES: Record<string, GuideItem> = {
  "virtual-influence-guide": {
    locales: {
      en: {
        id: 33,
        gumroadSlug: "virtual-influence-guide",
        name: "Iconista lab: Virtual Influence: The 48-Hour Playbook",
        description:
          "Build an AI influencer from scratch and grow your Instagram presence—no camera, no tech skills, no followers required.",
        price: {
          en: 67,
        },
        isBestseller: true,
      },
      ru: {
        id: 41,
        gumroadSlug: "virtual-influence-guide-ru",
        boostyId: "7a892ee4-c67c-4eba-80f2-2f43c64fcd58",
        name: "Iconista Lab: Пошаговый гайд по созданию ИИ инфлюенсера",
        description:
          "Построй ИИ-инфлюенсера с нуля и развивай аккаунт в Instagram — без камеры, без технических навыков, без подписчиков для старта.",
        price: {
          ru: 3990,
        },
        isBestseller: true,
      },
    },
  },
  "ai-for-fashion-brands": {
    locales: {
      ru: {
        id: 43,
        gumroadSlug: "ai-for-fashion-brands-guide-ru",
        boostyId: "1435ceb3-6d80-48f7-82b1-2643bad96a14",
        name: "Практический мини-курс: AI-съёмка для fashion-брендов",
        description:
          "Если вы работаете в fashion, вы знаете:съёмки - это дорого, долго и зависимо от десятков факторов. Этот курс - о том, как перевести большую часть продакшна на AI и выстроить управляемую систему съёмок внутри бренда.",
        price: {
          ru: 5990,
        },
      },
    },
  },
  "create-virtual-influencer": {
    locales: {
      en: {
        noLanding: true,
        isBestseller: true,
        id: 47,
        gumroadSlug: "create-virtual-influencer-guide",
        boostyId: "",
        name: "Create your own Virtual Influencer (step-by-step guide)",
        description:
          "This comprehensive guide provides a complete roadmap to building a professional AI virtual influencer, allowing you to create a high-income digital presence without ever showing your face on camera. It covers everything from technical tool setup to advanced video and monetization strategies.",
        price: {
          en: 14.9,
        },
      },
    },
  },
  "virtual-influence-instagram-playbook": {
    locales: {
      en: {
        noLanding: true,
        id: 46,
        gumroadSlug: "virtual-influence-instagram-playbook",
        boostyId: "",
        name: "Virtual Influencer’s Handbook: Strategy, Growth, And Profit",
        description:
          "This guide is a comprehensive, step-by-step system designed to help you build, grow, and monetize a professional virtual influencer brand on Instagram without ever needing to appear on camera. It transforms a complex creative process into a highly efficient business model.",
        price: {
          en: 14.9,
        },
      },
    },
  },
};
