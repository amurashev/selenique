"use client";

import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import Link from "next/link";
import { useMetrica } from "next-yandex-metrica";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./page.module.css";
import { PromptBook } from "@/components/types";

import { promptBookListPageRoute } from "@/constants/routes";

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
import Text from "./text";

export default function PromptbookPage({
  data,
  related = [],
  bundleContent,
}: {
  data: PromptBook;
  related?: PromptBook[];
  bundleContent?: PromptBook[];
}) {
  const { formatMessage, locale } = useIntl();
  const { reachGoal } = useMetrica();

  const {
    id,
    purchaseLink,
    text,
    description,
    summary,
    why,
    images,
    isDisabled,
  } = data;
  const pack = (data as PromptBook).pack || [];
  const packsNumber = pack.length || 1;

  const finalTopText = description || summary;

  const backUrl = promptBookListPageRoute.getUrl(locale);

  const showRussiaHints = ["en", "ru"].includes(locale);

  useEffect(() => {
    reachGoal("promptPage_open", {
      id,
    });
  }, []);

  // console.warn("PromptbookPage", data);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.backBox}>
          <Link href={backUrl} className={styles.backBoxLink}>
            <ChevronLeft size={22} color={"#333333"} />
          </Link>
        </div>
        <div className={styles.imagesBox}>
          <ImagesBox id={id} images={images} />
        </div>

        <div className={styles.content}>
          <Header data={data} />

          {finalTopText && (
            <div className={styles.section}>
              <Text text={finalTopText} />
            </div>
          )}

          <div className={styles.hr} />

          <div className={styles.line}>
            <div className={styles.textBox}>
              <Advantages data={data} />

              <div className={styles.hr} />

              {bundleContent && bundleContent.length > 0 && (
                <div className={styles.bundleBox}>
                  <Bundle bundleContent={bundleContent} />
                </div>
              )}

              {/* TODO: Temp workaround for old texts */}
              {text && (
                <div className={styles.section}>
                  <Text text={text} />
                </div>
              )}

              {/* {why && (
                <div className={styles.section}>
                  <h3>Why You Need This</h3>
                  <p
                    className={styles.text}
                    dangerouslySetInnerHTML={{
                      __html: why,
                    }}
                  />
                </div>
              )} */}

              {/* <div className={styles.hr} /> */}

              {/* <div className={styles.section}>
                <Who data={data as PromptBook} />
              </div> */}

              {/* <Text text={data.text} /> */}

              {showRussiaHints && (
                <div className={styles.hint}>
                  {formatMessage({ id: "prompt_books.payment_russia_hint" })}
                </div>
              )}
            </div>

            <div className={styles.rightSide}>
              {!isDisabled ? (
                <RightSide
                  data={data}
                  backUrl={backUrl}
                  purchaseLink={purchaseLink}
                />
              ) : (
                <div className={styles.rightSideBox}>
                  <div className={styles.naMessage}>Not available for now</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <div className={styles.hr} /> */}

        <div className={styles.content}>
          {related.length !== 0 && <Related related={related} />}
          <Link className={styles.seeAllButton} href={backUrl}>
            {formatMessage({ id: "prompt_books.see_all" })}
          </Link>
          <div className={styles.reviewBox}>
            <Reviews />
          </div>
        </div>

        {purchaseLink && (
          <div className={styles.mobileButton}>
            <Link
              className={styles.link}
              href={purchaseLink}
              target="_blank"
              onClick={() => {
                reachGoal("promptPage_buyClick", {
                  id,
                });
              }}
            >
              {formatMessage({ id: "common.continue" })}
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
