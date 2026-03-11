"use client";

import Link from "next/link";
import { useIntl } from "react-intl";
import styles from "@/components/sections/landing-black/page.module.css";
import innerStyles from "./page.module.css";

import { aiAvatarPageRoute } from "@/constants/routes";

import ShortHeader from "@/components/layout/short-header";
import Footer from "@/components/layout/footer";
import HeroSimple from "@/components/sections/landing-black/hero-simple";
import {
  SectionGray,
  SectionColor,
} from "@/components/sections/landing-black/sections";
import FAQBase from "@/components/sections/faq";
import { PromptBook } from "@/components/types";
import PromptbookItem from "@/components/sections/promptbook-item";
import ImagesSlider from "@/components/sections/landing-black/images-slider";
import Builder from "./builder";

// import PromptBuilder from "./prompt-builder";

export default function AiAvatarGeneratorPage({
  promptPack,
}: {
  promptPack: PromptBook;
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.page}>
      <ShortHeader route={aiAvatarPageRoute} />
      <main className={styles.main}>
        <HeroSimple
          title={formatMessage({ id: "ai_avatar.generator.title" })}
          text={formatMessage({ id: "ai_avatar.generator.text" })}
        />

        <SectionGray
          title={formatMessage({ id: "ai_avatar.generator.how.title" })}
        >
          <Builder />
        </SectionGray>

        <SectionColor
          title={formatMessage({ id: "ai_avatar.generator.full.title" })}
        >
          <div className={innerStyles.guideLine}>
            <div className={innerStyles.guideLineImage}>
              <PromptbookItem item={promptPack} />
            </div>
            <div className={innerStyles.guideLineText}>
              <p
                dangerouslySetInnerHTML={{
                  __html: promptPack.description,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: promptPack.text,
                }}
              />

              <Link href={promptPack.purchaseLink} className={innerStyles.link}>
                {formatMessage({ id: "ai_avatar.generator.full.cta" })}
              </Link>
            </div>
          </div>
        </SectionColor>

        <SectionGray
          title={formatMessage({ id: "ai_avatar.generator.why.title" })}
        >
          <div className={innerStyles.content}>
            <p>{formatMessage({ id: "ai_avatar.generator.why.text1" })}</p>
            <ul>
              {[1, 2, 3, 4].map((key) => (
                <li key={key}>
                  {formatMessage({
                    id: `ai_avatar.generator.why.benefits.item${key}`,
                  })}
                </li>
              ))}
            </ul>
            <p>{formatMessage({ id: "ai_avatar.generator.why.text2" })}</p>
          </div>
        </SectionGray>

        <SectionColor title="">
          <ImagesSlider
            alt="AI avatar generated with prompt example"
            images={[30, 5, 13, 26, 6, 18, 2, 21, 14].map(
              (index) => `/images/ai-avatar/created/${index}.jpg`
            )}
          />
        </SectionColor>

        <SectionGray
          title={formatMessage({ id: "ai_avatar.generator.faq.title" })}
        >
          <FAQBase
            items={[1, 2, 3, 4].map((key) => ({
              title: formatMessage({
                id: `ai_avatar.generator.faq.item${key}.title`,
              }),
              text: formatMessage({
                id: `ai_avatar.generator.faq.item${key}.text`,
              }),
            }))}
          />
        </SectionGray>
      </main>

      <Footer />
    </div>
  );
}
