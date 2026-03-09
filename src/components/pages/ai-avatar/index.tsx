"use client";

import Link from "next/link";
import { useIntl } from "react-intl";
// import styles from "@/components/sections/landing-black/page.module.css";
import styles from "./page.module.css";

import { aiAvatarFAQPageRoute, aiAvatarWhatIsItPageRoute, homePage } from "@/constants/routes";

import { PromptBook } from "@/components/types";

import PromptbookItem from "@/components/sections/promptbook-item";
import GuideItem from "@/components/sections/guide-item";
import { Guide } from "@/constants/guides";
import BasePageLayout from "@/components/layout/base-page";

import ProductSlider, {
  ProductSliderItem,
} from "@/components/pages/_lists/promptbook-list/product-slider";
import GroupHeader from "@/components/sections/group-header";
import { ChevronRight } from "@/components/sections/arrows";

export default function AiAvatarPage({
  guidesList,
  promptPacks,
}: {
  promptPacks: PromptBook[];
  guidesList: Guide[];
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <BasePageLayout route={homePage}>
      <main className={styles.main}>
        {/* <HeroSimple
          title={formatMessage(
            { id: "ai_avatar.hero.title" },
            { commission: COMMISSION }
          )}
          text={formatMessage({ id: "ai_avatar.hero.text" })}
        /> */}

        <div className={styles.chapter}>
          <div className={styles.chapterRow1}>
            <h2>{formatMessage({ id: "ai_avatar.what_is_it.title" })}</h2>
            <p>{formatMessage({ id: "ai_avatar.what_is_it.text2" })}</p>
          </div>
          <Link
            href={aiAvatarWhatIsItPageRoute.getUrl(locale)}
            className={styles.chapterRow2}
          >
            <ChevronRight size={36} />
          </Link>
        </div>

        <hr className={styles.hr} />

        <div className={styles.section}>
          <GroupHeader
            title={formatMessage({ id: "ai_avatar.how_to_create.title" })}
          />
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
        </div>

        <hr className={styles.hr} />

        <div className={styles.chapter}>
          <div className={styles.chapterRow1}>
            <h2>{formatMessage({ id: "ai_avatar.faq.title" })}</h2>
            <p>{formatMessage({ id: "ai_avatar.faq.text" })}</p>
          </div>
          <Link
            href={aiAvatarFAQPageRoute.getUrl(locale)}
            className={styles.chapterRow2}
          >
            <ChevronRight size={36} />
          </Link>
        </div>


        <hr className={styles.hr} />

        <div className={styles.section}>
          <GroupHeader
            title={formatMessage({ id: "ai_avatar.prompts.title" })}
          />
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
        </div>
      </main>
    </BasePageLayout>
  );
}
