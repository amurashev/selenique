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

        <div className={innerStyles.list}>
          <div className={innerStyles.inner}>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <>
                <div className={innerStyles.item}>
                  <h2 className={innerStyles.title}>
                    {formatMessage({ id: `ai_avatar.faq.item${item}.title` })}
                  </h2>
                  <p className={innerStyles.text}>
                    {formatMessage({ id: `ai_avatar.faq.item${item}.text` })}
                  </p>
                </div>
                {item != 7 && <hr className={styles.hr} />}
              </>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
