"use client";

import Link from "next/link";
import { useIntl } from "react-intl";
import styles from "@/components/sections/landing-black/page.module.css";
import innerStyles from "./page.module.css";

import { homePage } from "@/constants/routes";

import { PromptBook } from "@/components/types";

import PromptbookItem from "@/components/sections/promptbook-item";
import GuideItem from "@/components/sections/guide-item";
import { Guide } from "@/constants/guides";
import BasePageLayout from "@/components/layout/base-page";

import Hero from "./hero";
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

export default function AiAvatarPage({
  guidesList,
  promptPacks,
}: {
  promptPacks: PromptBook[];
  guidesList: Guide[];
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.page}>
      <ShortHeader route={homePage} />
      <main className={styles.main}>
        <Hero />

        <SectionGray
          id="first_section"
          title={formatMessage({ id: "ai_avatar.prompts.title" })}
        >
          <p>{formatMessage({ id: "ai_avatar.prompts.text" })}</p>

          <ProductSlider>
            {promptPacks.map((item) => {
              return (
                <ProductSliderItem key={item.slug}>
                  <PromptbookItem item={item} />
                </ProductSliderItem>
              );
            })}
          </ProductSlider>
        </SectionGray>

        <SectionColor title={formatMessage({ id: "ai_avatar.section3.title" })}>
          <p>{formatMessage({ id: "ai_avatar.section3.text" })}</p>
          <div className={innerStyles.prompts}>
            <div>
              <h4>{formatMessage({ id: "ai_avatar.section3.item1.title" })}</h4>
              <p className={innerStyles.prompt}>
                {formatMessage({ id: "ai_avatar.section3.item1.text" })}
              </p>
            </div>
            <div>
              <h4>{formatMessage({ id: "ai_avatar.section3.item2.title" })}</h4>
              <p className={innerStyles.prompt}>
                {formatMessage({ id: "ai_avatar.section3.item2.text" })}
              </p>
            </div>
          </div>
        </SectionColor>

        <SectionGray
          id="first_section"
          title={formatMessage({ id: "ai_avatar.section2.title" })}
        >
          <p>{formatMessage({ id: "ai_avatar.section2.text" })}</p>

          <ProductSlider>
            {guidesList.map((item) => {
              return (
                <ProductSliderItem key={item.slug}>
                  <GuideItem item={item} />
                </ProductSliderItem>
              );
            })}
          </ProductSlider>
        </SectionGray>

        <SectionColor title="">
          <ImagesSlider
            alt="AI avatar generated with prompt example"
            images={[
              "/images/influencer/301.jpg",
              "/images/influencer/302.jpg",
              "/images/influencer/303.jpg",
              "/images/influencer/306.jpg",
              "/images/influencer/305.jpg",
            ]}
          />
        </SectionColor>

        <SectionGray title={formatMessage({ id: "ai_avatar.faq.title" })}>
          <FAQBase
            items={[1, 2, 3, 4, 5, 6, 7].map((key) => ({
              title: formatMessage({
                id: `ai_avatar.faq.item${key}.title`,
              }),
              text: formatMessage({
                id: `ai_avatar.faq.item${key}.text`,
              }),
            }))}
          />
        </SectionGray>
      </main>

      <Footer />
    </div>
  );
}
