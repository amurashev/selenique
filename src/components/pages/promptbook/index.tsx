"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./page.module.css";
import { PromptBook } from "@/components/types";

import PromptbookItem from "@/components/sections/promptbook-item";
import { promptBookListPageRoute } from "@/constants/routes";

import ImagesBox from "./images-box";
import RightSide from "./right-side";
import Related from "./related";
import { ChevronLeft } from "@/components/sections/arrows";
import Reviews from "./reviews";

export default function PromptbookPage({ data }: { data: PromptBook }) {
  const { formatMessage, locale } = useIntl();
  const { id, name, text, number, images, isDisabled } = data;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.backBox}>
          <Link href={promptBookListPageRoute.getUrl(locale)}>
            <ChevronLeft size={28} />
          </Link>
        </div>
        <div className={styles.imagesBox}>
          <ImagesBox id={id} images={images} />
        </div>
        <h1 className={styles.title}>{name}</h1>

        <div className={styles.line}>
          <div className={styles.textBox}>
            {/* <h2>About</h2> */}
            <ul className={styles.advantages}>
              <li>
                <strong>File type:</strong> 1 PDF
              </li>
              <li>
                <strong>Best for:</strong> Gemini, Nano banana
              </li>
              <li>
                <strong>Number of prompts in pack:</strong> {number}
              </li>
            </ul>
            <div
              className={styles.text}
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />

            <Link
              className={styles.seeAllButton}
              href={promptBookListPageRoute.getUrl(locale)}
            >
              See all Prompt Books
            </Link>
          </div>

          <div className={styles.rightSide}>
            {!isDisabled ? (
              <RightSide data={data} />
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
      </main>
    </div>
  );
}
