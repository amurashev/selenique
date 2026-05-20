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
  clipartBundlesListPageRoute,
} from "@/constants/routes";

import { ChevronLeft } from "@/components/sections/arrows";

import RightSide from "./right-side";
import Advantages from "./advantages";
import Header from "./header";
import Footer from "@/components/layout/footer";
import { COMMISSION } from "@/constants/affiliate";
import ImageContent from "./image-content";
import ShortHeader from "@/components/layout/short-header";
import { ClipartBundle } from "@/content/clipart-bundle";
import { TextTag } from "../promptbook-page/text";
import Affiliate from "../promptbook-page/affiliate";
import Reviews from "../promptbook-page/reviews";

export default function ClipartBundlePage({
  data,
  // related = [],
  // bundleContent,
  // bestSellers,
}: {
  data: ClipartBundle;
  // related?: PromptBook[];
  // bundleContent?: PromptBook[];
  // bestSellers: PromptBook[];
}) {
  const [isRedirect, setIsRedirect] = useState(false);
  const { formatMessage, locale } = useIntl();
  const { reachGoal } = useMetrica();

  const {
    title,
    thumbImage,
    mainImage,
    description,
    imagesContent,
    boostyLink,
    etsyLink,
    isDisabled,
  } = data;
  const finalTopText = description;
  const backUrl = clipartBundlesListPageRoute.getUrl(locale);

  useEffect(() => {
    
  }, []);

  return (
    <div className={styles.page}>
      <ShortHeader
        route={clipartBundlesListPageRoute}
        title={title}
        color="white"
      />
      <main className={styles.main}>
        <div className={styles.backBox}>
          <Link href={backUrl} className={styles.backBoxLink}>
            <ChevronLeft size={22} color={"#333333"} />
          </Link>
        </div>
        <div className={styles.imagesBox}>
          <div className={styles.imagesBoxItem}>
            <img
              className={styles.imagesBoxImage}
              src={mainImage}
              alt={title}
            />
          </div>
        </div>
        <div className={styles.content}>
          <Header data={data} />

          {finalTopText && <TextTag text={finalTopText} />}

          {imagesContent && imagesContent?.length > 0 && (
            <ImageContent data={data} />
          )}

          <div className={styles.line}>
            <div className={styles.textBox}>
              <div className={styles.section}>
                <Advantages data={data} />
              </div>

              {/* {text && (
                <div className={styles.section}>
                  <TextBox text={text} />
                </div>
              )} */}

              {/* <div className={styles.section}>
                <Affiliate />
              </div> */}

              {/* {purchaseLink && (
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
              )} */}
            </div>

            <div className={styles.rightSide}>
              {!isDisabled ? (
                <RightSide
                  backUrl={backUrl}
                  purchaseLink={etsyLink}
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
            <Reviews />
          </div>
          {/* <div className={styles.section}>
            <BestSellers items={bestSellers} url={backUrl} />
          </div> */}
        </div>

        {etsyLink && (
          <div className={styles.mobileButton}>
            <Link
              className={isRedirect ? styles.linkDisabled : styles.link}
              href={etsyLink}
              target="_blank"
              onClick={() => {
                setIsRedirect(true);
              }}
            >
              {isRedirect ? <span className={styles.loader} /> : null}
              {formatMessage({ id: "clipart.get_etsy" })}
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
