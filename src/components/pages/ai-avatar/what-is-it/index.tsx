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
import Example from "./example";
// import PromptBuilder from "./prompt-builder";

export default function AiAvatarWhatIsItPage({
  guidesList,
}: {
  guidesList: Guide[];
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.page}>
      <ShortHeader route={aiAvatarPageRoute} />
      <main className={styles.main}>
        <HeroSimple
          title={formatMessage({ id: "ai_avatar.what_is_it.title" })}
          text={formatMessage({ id: "ai_avatar.what_is_it.text2" })}
        />

        <SectionGray id="first_section" title="">
          <div className={styles.texts}>
            <p>{formatMessage({ id: "ai_avatar.what_is_it.about.text1" })}</p>
            <p>{formatMessage({ id: "ai_avatar.what_is_it.about.text2" })}</p>
            <p>{formatMessage({ id: "ai_avatar.what_is_it.about.text3" })}</p>
          </div>
        </SectionGray>

        <SectionColor
          title={formatMessage({ id: "ai_avatar.what_is_it.examples.title" })}
        >
          <p>{formatMessage({ id: "ai_avatar.what_is_it.examples.text" })}</p>

          <ProductSlider>
            {[
              { index: "lilmiquela", followers: "2.3M" },
              { index: "noonoouri", followers: "476K" },
              { index: "fit_aitana", followers: "393K" },
              { index: "imma.gram", followers: "386K" },
            ].map((item, key) => (
              <Example
                key={key}
                index={item.index}
                followers={item.followers}
              />
            ))}
          </ProductSlider>
        </SectionColor>

        <SectionGray
          title={formatMessage({ id: "ai_avatar.what_is_it.2026.title" })}
        >
          <p>{formatMessage({ id: "ai_avatar.what_is_it.2026.text" })}</p>
        </SectionGray>

        <SectionColor
          title={formatMessage({ id: "ai_avatar.what_is_it.why.title" })}
        >
          <div className={styles.blocksList3El}>
            {[1, 2, 3, 4, 5, 6].map((item, key) => (
              <div key={key} className={styles.blocksListItem}>
                <h4 className={styles.blocksListItemTitle}>
                  {formatMessage({
                    id: `ai_avatar.what_is_it.why.item${key + 1}.title`,
                  })}
                </h4>
                <p>
                  {formatMessage({
                    id: `ai_avatar.what_is_it.why.item${key + 1}.text`,
                  })}
                </p>
              </div>
            ))}
          </div>
        </SectionColor>


        <SectionGray
          id="first_section"
          title={formatMessage({ id: "ai_avatar.how_to_create.title" })}
        >
          <p>{formatMessage({ id: "ai_avatar.how_to_create.text" })}</p>

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
