"use client";

import Link from "next/link";
import { useIntl } from "react-intl";
import styles from "@/components/sections/landing-black/page.module.css";
import innerStyles from "./page.module.css";

import { aiAvatarPageRoute, homePage } from "@/constants/routes";

import { PromptBook } from "@/components/types";

import PromptbookItem from "@/components/sections/promptbook-item";
import GuideItem from "@/components/sections/guide-item";
import { Guide } from "@/constants/guides";
import BasePageLayout from "@/components/layout/base-page";

import {
  SectionColor,
  SectionGray,
  SectionGrayShort,
} from "@/components/sections/landing-black/sections";

import ProductSlider, {
  ProductSliderItem,
} from "@/components/pages/_lists/promptbook-list/product-slider";
import GroupHeader from "@/components/sections/group-header";
import FAQBase from "@/components/sections/faq";
import ImagesSlider from "@/components/sections/landing-black/images-slider";
import ShortHeader from "@/components/layout/short-header";
import Footer from "@/components/layout/footer";
import HeroSimple from "@/components/sections/landing-black/hero-simple";

// import PromptBuilder from "./prompt-builder";

export default function AiAvatarFAQPage() {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.page}>
      <ShortHeader route={aiAvatarPageRoute} />
      <main className={styles.main}>
        <HeroSimple
          title={formatMessage({ id: "ai_avatar.faq.title" })}
          text={formatMessage({ id: "ai_avatar.faq.text" })}
        />

        <SectionGrayShort
          title={formatMessage({ id: "ai_avatar.faq.item1.title" })}
        >
          <p>{formatMessage({ id: "ai_avatar.faq.item1.text" })}</p>
        </SectionGrayShort>
        <hr className={styles.hr} />
        <SectionGrayShort
          title={formatMessage({ id: "ai_avatar.faq.item2.title" })}
        >
          <p>{formatMessage({ id: "ai_avatar.faq.item2.text" })}</p>
        </SectionGrayShort>
        <hr className={styles.hr} />
        <SectionGrayShort
          title={formatMessage({ id: "ai_avatar.faq.item3.title" })}
        >
          <p>{formatMessage({ id: "ai_avatar.faq.item3.text" })}</p>
        </SectionGrayShort>
        <hr className={styles.hr} />
        <SectionGrayShort
          title={formatMessage({ id: "ai_avatar.faq.item4.title" })}
        >
          <p>{formatMessage({ id: "ai_avatar.faq.item4.text" })}</p>
        </SectionGrayShort>
        <hr className={styles.hr} />
        <SectionGrayShort
          title={formatMessage({ id: "ai_avatar.faq.item5.title" })}
        >
          <p>{formatMessage({ id: "ai_avatar.faq.item5.text" })}</p>
        </SectionGrayShort>
        <hr className={styles.hr} />
        <SectionGrayShort
          title={formatMessage({ id: "ai_avatar.faq.item6.title" })}
        >
          <p>{formatMessage({ id: "ai_avatar.faq.item6.text" })}</p>
        </SectionGrayShort>
        <hr className={styles.hr} />
        <SectionGrayShort
          title={formatMessage({ id: "ai_avatar.faq.item7.title" })}
        >
          <p>{formatMessage({ id: "ai_avatar.faq.item7.text" })}</p>
        </SectionGrayShort>
      </main>

      <Footer />
    </div>
  );
}
