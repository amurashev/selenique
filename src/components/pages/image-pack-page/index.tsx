"use client";

import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useMetrica } from "next-yandex-metrica";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./page.module.css";
import { PromptBook, PromptCategories } from "@/components/types";

import {
  homePage,
} from "@/constants/routes";

import ImagesBox from "./images-box";
import RightSide from "./right-side";
import Related from "./related";
import Reviews from "./reviews";
import { ChevronLeft } from "@/components/sections/arrows";
import Advantages from "./advantages";
import Header from "./header";

import { TextBox, TextTag } from "./text";
import Footer from "@/components/layout/footer";
import { COMMISSION } from "@/constants/affiliate";

import BestSellers from "./best-sellers";
import ImageContent from "./image-content";
import ShortHeader from "@/components/layout/short-header";
import FAQBase from "@/components/sections/faq";
import { ImagesPack } from "@/content/images-packs";
import MobileButtons from "./mobile-buttons";

export default function ImagePackPage({
  data,
  // related = [],
  bestSellers,
}: {
  data: ImagesPack;
  // related?: PromptBook[];
  bestSellers: ImagesPack[];
}) {
  const { formatMessage, locale } = useIntl();
  const { reachGoal } = useMetrica();

  const { id, slug, etsyLink, gumroadLink, cmLink, title, description, mainImage, imagesContent } =
    data;
  const finalTopText = description;

  return (
    <div className={styles.page}>
      <ShortHeader
        route={homePage}
        title={title}
        color="white"
      />
      <main className={styles.main}>
        <div className={styles.imagesBox}>
          <ImagesBox images={[mainImage]} />
        </div>

        <div className={styles.line}>
          <div className={styles.leftSide}>
            <Header data={data} />

            {finalTopText && <TextTag text={finalTopText} />}
          </div>

          <div className={styles.rightSide}>
            <Advantages data={data} />
          </div>
        </div>

        <div className={styles.content}>
          {imagesContent && imagesContent?.length > 0 && (
            <div className={styles.section}>
              <ImageContent images={imagesContent} />
            </div>
          )}
          {/* <div className={styles.line}>
            <div className={styles.textBox}>
              <div className={styles.section}>
                <Advantages data={data} />
              </div>

              {etsyLink && (
                <div className={`${styles.section} ${styles.onlyMobile}`}>
                  <RightSide purchaseLink={etsyLink} boostyLink={""} />
                </div>
              )}
            </div>

            <div className={styles.rightSide}>
              <div className={styles.rightSideBox}>
                {!isDisabled ? (
                  <RightSide
                    purchaseLink={purchaseLink}
                    boostyLink={boostyLink}
                  />
                ) : (
                  <div className={styles.rightSideBox}>
                    <div className={styles.naMessage}>
                      Not available for now
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div> */}

          {/* <div className={styles.section}>
            <h2>FAQ</h2>
            <FAQBase
              type="2"
              items={[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => ({
                title: formatMessage({
                  id: `prompt_books.faq.item${key}.title`,
                }),
                text: formatMessage({
                  id: `prompt_books.faq.item${key}.text`,
                }),
              }))}
            />
          </div> */}
          <div className={styles.section}>
            <Reviews />
          </div>
          {/* {related.length !== 0 && (
            <div className={styles.section}>
              <Related related={related} url={backUrl} />
            </div>
          )} */}

          {/* <div className={styles.section}>
            <BestSellers items={bestSellers} url={backUrl} />
          </div> */}
        </div>

        <MobileButtons
          etsyLink={etsyLink}
          gumroadLink={gumroadLink}
          cmLink={cmLink}
        />
       
      </main>
      <Footer />
    </div>
  );
}
