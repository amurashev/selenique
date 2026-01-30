"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { PromptBook } from "@/components/types";
import PromptbookItem from "@/components/sections/promptbook-item2";

import styles from "./styles.module.css";

export const settings = {
  dots: false,
  infinite: false,
  lazyLoad: true,
  speed: 500,
  centerMode: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: null,
  prevArrow: null,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 1,
      },
    },
  ],
} as any; // eslint-disable-line @typescript-eslint/no-explicit-any

export default function Related({
  related,
}: {
  related: PromptBook[];
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.related}>
      <h2>{formatMessage({ id: "prompt_books.you_may_like" })}</h2>
      <Slider {...settings} className={styles.slider}>
        {/* <div className={styles.list}> */}
          {related.map((item) => (
            <div key={item.id} className={styles.item}>
              <PromptbookItem key={item.id} item={item} />
            </div>
          ))}
        {/* </div> */}
      </Slider>
    </div>
  );
}
