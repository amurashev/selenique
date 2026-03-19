"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { PromptBook } from "@/components/types";
import PromptbookItem from "@/components/sections/promptbook-item";

import styles from "./styles.module.css";
import GroupHeader from "@/components/sections/group-header";

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

export default function BestSellers({
  items,
  url,
}: {
  items: PromptBook[];
  url: string;
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.related}>
      <GroupHeader
        title={formatMessage({ id: "home.prompt_books.popular.title" })}
        // label={formatMessage({ id: "co.see_all" })}
        // href={url}
        isWhite
      />
      <Slider {...settings} className={styles.slider}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            <PromptbookItem key={item.id} item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
