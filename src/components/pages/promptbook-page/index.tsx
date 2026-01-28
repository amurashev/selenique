"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./page.module.css";
import { Guide, PromptBook } from "@/components/types";

import {
  promptBookListPageRoute,
  guidesListPageRoute,
} from "@/constants/routes";

import ImagesBox from "./images-box";
import RightSide from "./right-side";
import Related from "./related";
import { ChevronLeft } from "@/components/sections/arrows";
import Reviews from "./reviews";
import ShortHeader from "@/components/layout/short-header";
import Bundle from "./bundle";
import Advantages from "./advantages";
import Categories from "./categories";

export default function PromptbookPage({ data }: { data: PromptBook }) {
  const { formatMessage, locale } = useIntl();
  const { id, gumroad, name, fileType, type, text, images, isDisabled } = data;
  const pack = (data as PromptBook).pack || [];
  const packsNumber = pack.length || 1;

  const backUrl =
    type !== "guide"
      ? promptBookListPageRoute.getUrl(locale)
      : guidesListPageRoute.getUrl(locale);

  // const purchaseLink = `https://gumroad.com/checkout?layout=profile&product=${gumroadId}&quantity=1&referrer=https%3A%2F%2Fseleniquestudio.gumroad.com%2F`;
  const purchaseLink = `https://seleniquestudio.gumroad.com/l/${gumroad.slug}?wanted=true`;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <div className={styles.backBox}>
          <Link href={backUrl}>
            <ChevronLeft size={28} />
          </Link>
        </div> */}
        <ShortHeader route={promptBookListPageRoute} title={name} color="white" />
        <div className={styles.imagesBox}>
          <ImagesBox id={id} images={images} />
        </div>
        <h1 className={styles.title}>{name}</h1>

        <div className={styles.line}>
          <div className={styles.textBox}>
            <Advantages data={data} />


            {packsNumber > 1 && (data as PromptBook).pack && (
              <Bundle data={data as PromptBook} />
            )}

            <div
              className={styles.text}
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />

            <Categories data={data} />


            <Link className={styles.seeAllButton} href={backUrl}>
              {formatMessage({ id: "prompt_books.see_all" })}
            </Link>

            <div className={styles.hint}>
              {formatMessage({ id: "prompt_books.payment_russia_hint" })}
            </div>
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

        <Reviews />
        {/* {related.length !== 0 && (
          <Related related={related} />
        )} */}

        {gumroad.slug && (
          <div className={styles.mobileButton}>
            <Link className={styles.link} href={purchaseLink} target="_blank">
              {formatMessage({ id: "common.buy_now" })}
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
