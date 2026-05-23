"use client";

import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import Link from "next/link";
import { useMetrica } from "next-yandex-metrica";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./page.module.css";
import { PromptBook, PromptCategories } from "@/components/types";

import {
  affiliatePageRoute,
  promptBookListPageRoute,
} from "@/constants/routes";

import ImagesBox from "./images-box";
import RightSide from "./right-side";
import Related from "./related";
import Reviews from "./reviews";
import { ChevronLeft } from "@/components/sections/arrows";
import Bundle from "./bundle";
import Advantages from "./advantages";
import Categories from "./categories";
import Header from "./header";
import Who from "./who";
import { TextBox, TextTag } from "./text";
import Footer from "@/components/layout/footer";
import { COMMISSION } from "@/constants/affiliate";
import Affiliate from "./affiliate";
import Instruction from "./instruction";
import TestPrompt from "./test-prompt";
import BestSellers from "./best-sellers";
import ImageContent from "./image-content";
import ShortHeader from "@/components/layout/short-header";
import FAQBase from "@/components/sections/faq";

export default function PromptbookPage({
  data,
  related = [],
  bundleContent,
  bestSellers,
}: {
  data: PromptBook;
  related?: PromptBook[];
  bundleContent?: PromptBook[];
  bestSellers: PromptBook[];
}) {
  const [isRedirect, setIsRedirect] = useState(false);
  const { formatMessage, locale } = useIntl();
  const { reachGoal } = useMetrica();

  const {
    id,
    slug,
    purchaseLink,
    boostyLink,
    text,
    name,
    description,
    summary,
    tags,
    why,
    testPrompt,
    images,
    heroImages,
    examples,
    isDisabled,
    isGrowing,
    hasVariations,
  } = data;
  const finalTopText = description || summary;
  const backUrl = promptBookListPageRoute.getUrl(locale);
  const showRussiaHints = ["en", "ru"].includes(locale);

  const exclude = ["mythical-character-photo", "portrait-creation-toolkit"];

  const hasCharacterReference =
    tags.some((item) => {
      const referenceCategories: PromptCategories[] = [
        "business",
        "headshot",
        "fashion",
        "lifestyle",
        "fantasy",
        "studio",
        "christmas",
        "avatar",
        "character_reference",
      ];

      return referenceCategories.includes(item);
    }) && !exclude.includes(slug);

  useEffect(() => {
    reachGoal("promptPage_open", {
      id,
    });
  }, []);

  return (
    <div className={styles.page}>
      <ShortHeader route={promptBookListPageRoute} title={name} color="white" />
      <main className={styles.main}>
        {/* <div className={styles.backBox}>
          <Link href={backUrl} className={styles.backBoxLink}>
            <ChevronLeft size={22} color={"#333333"} />
          </Link>
        </div> */}
        <div className={styles.imagesBox}>
          <ImagesBox images={heroImages} />
        </div>
        <div className={styles.content}>
          <Header data={data} />

          {finalTopText && <TextTag text={finalTopText} />}

          {examples && examples?.length > 0 && <ImageContent data={data} />}

          <div className={styles.line}>
            <div className={styles.textBox}>
              <div className={styles.section}>
                <Advantages
                  data={data}
                  hasCharacterReference={hasCharacterReference}
                />
              </div>

              {bundleContent && bundleContent.length > 0 && (
                <div className={styles.section}>
                  <Bundle bundleContent={bundleContent} />
                </div>
              )}

              <div className={styles.section}>
                <Instruction hasCharacterReference={hasCharacterReference} />
              </div>

              {/* TODO: Temp workaround for old texts */}
              {text && (
                <div className={styles.section}>
                  <TextBox text={text} />
                </div>
              )}

              {/* {testPrompt && !hasVariations && (
                <div className={styles.section}>
                  <TestPrompt data={data} />
                </div>
              )} */}

              {/* <div className={styles.section}>
                <Affiliate />
              </div>  */}

              {purchaseLink && (
                <div className={`${styles.section} ${styles.onlyMobile}`}>
                  <Link
                    className={isRedirect ? styles.linkDisabled : styles.link}
                    href={purchaseLink}
                    onClick={() => setIsRedirect(true)}
                  >
                    {isRedirect ? <span className={styles.loader} /> : null}
                    {formatMessage({ id: "prompt_books.get_prompt_pack" })}
                  </Link>

                  {showRussiaHints && (
                    <div className={styles.hint}>
                      {formatMessage({
                        id: "prompt_books.payment_russia_hint",
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* <div className={styles.section}>
                <Who data={data as PromptBook} />
              </div> */}

              {/* {why && (
                <div className={styles.section}>
                  <h3>Why You Need This</h3>
                  <TextTag text={why} />
                </div>
              )} */}
            </div>

            <div className={styles.rightSide}>
              {!isDisabled ? (
                <RightSide
                  backUrl={backUrl}
                  purchaseLink={purchaseLink}
                  boostyLink={boostyLink}
                />
              ) : (
                <div className={styles.rightSideBox}>
                  <div className={styles.naMessage}>Not available for now</div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.section}>
            <FAQBase
              color="black"
              items={[1, 2, 3, 4, 5, 6].map((key) => ({
                title: formatMessage({
                  id: `prompt_books.faq.item${key}.title`,
                }),
                text: formatMessage({
                  id: `prompt_books.faq.item${key}.text`,
                }),
              }))}
            />
          </div>
          <div className={styles.section}>
            <Reviews />
          </div>
          {related.length !== 0 && (
            <div className={styles.section}>
              <Related related={related} url={backUrl} />
            </div>
          )}

          <div className={styles.section}>
            <BestSellers items={bestSellers} url={backUrl} />
          </div>
        </div>

        {purchaseLink && (
          <div className={styles.mobileButton}>
            <Link
              className={isRedirect ? styles.linkDisabled : styles.link}
              href={purchaseLink}
              target="_blank"
              onClick={() => {
                setIsRedirect(true);
                reachGoal("promptPage_buyClick", {
                  id,
                });
              }}
            >
              {isRedirect ? <span className={styles.loader} /> : null}
              {formatMessage({ id: "prompt_books.get_prompt_pack" })}
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
