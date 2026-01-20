"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./page.module.css";
import { Guide, PromptBook } from "@/components/types";

import PromptbookItem from "@/components/sections/promptbook-item";
import {
  promptBookListPageRoute,
  guidesListPageRoute,
} from "@/constants/routes";

import ImagesBox from "./images-box";
import RightSide from "./right-side";
import Related from "./related";
import { ChevronLeft } from "@/components/sections/arrows";
import Reviews from "./reviews";
import ShortHeader from "@/components/sections/short-header";

export default function PromptbookPage({
  data,
  type,
}: {
  data: PromptBook | Guide;
  type: "promptbook" | "guide";
}) {
  const { formatMessage, locale } = useIntl();
  const { id, gumroad, name, text, images, isDisabled } = data;

  const backUrl =
    type === "promptbook"
      ? promptBookListPageRoute.getUrl(locale)
      : guidesListPageRoute.getUrl(locale);

  // const purchaseLink = `https://gumroad.com/checkout?layout=profile&product=${gumroadId}&quantity=1&referrer=https%3A%2F%2Fseleniquestudio.gumroad.com%2F`;
  const purchaseLink = `https://seleniquestudio.gumroad.com/l/${gumroad.slug}?wanted=true`;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.backBox}>
          <Link href={backUrl}>
            <ChevronLeft size={28} />
          </Link>
        </div>
        <div className={styles.imagesBox}>
          <ImagesBox id={id} images={images} type={type} />
        </div>
        <h1 className={styles.title}>{name}</h1>

        <div className={styles.line}>
          <div className={styles.textBox}>
            {/* <h2>About</h2> */}
            <ul className={styles.advantages}>
              <li>
                <strong>File type:</strong> 1 PDF
              </li>
              {type === "promptbook" && (
                <li>
                  <strong>Best for:</strong> Gemini, Nano banana
                </li>
              )}
              {(data as PromptBook).number && (
                <li>
                  <strong>Number of prompts in pack: </strong>
                  {(data as PromptBook).number}
                </li>
              )}
            </ul>
            <div
              className={styles.text}
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />

            <Link className={styles.seeAllButton} href={backUrl}>
              See all Prompt Books
            </Link>
          </div>

          <div className={styles.rightSide}>
            {!isDisabled ? (
              <RightSide data={data} backUrl={backUrl} purchaseLink={purchaseLink} />
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
  <div className={styles.mobileButton} >
          <Link className={styles.link} href={purchaseLink} target="_blank">
            {formatMessage({ id: "common.buy_now" })}
          </Link></div>
        )}
      </main>
    </div>
  );
}
