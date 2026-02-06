"use client";

import React from "react";
import { useIntl } from "react-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";

import PromptbookItem from "@/components/sections/promptbook-item";
import { REVIEWS } from "@/constants/reviews";
import Slider from "react-slick";

export const settings = {
  dots: false,
  infinite: false,
  lazyLoad: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
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
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.6,
        slidesToScroll: 1,
      },
    },
  ],
} as any; // eslint-disable-line @typescript-eslint/no-explicit-any

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="3 3 18 18"
    width={16}
    height={16}
    focusable="false"
  >
    <path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path>
  </svg>
);

const StarIcon = () => {
  return (
    <svg style={{
      position: "relative",
      top: '-1px',
    }} version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
      width="16px" height="16px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
      <path fill="#ffb900" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265
	C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642
	c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854
	c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72
	c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"/>
    </svg>
  )
}

export default function Reviews() {
  const { formatMessage, locale } = useIntl();
  const count = Object.keys(REVIEWS).length;

  return (
    <div className={styles.box}>
      <h2 className={styles.title}>
        {formatMessage({ id: "prompt_books.reviews" })} ({count})
      </h2>
      <Slider {...settings} className={styles.list}>
        {Object.keys(REVIEWS).map((id) => {
          const { author, authorId, text, date, mark } = REVIEWS[id];
          return (
            <div key={id} className={styles.item}>
             <div className={styles.itemInner}>
              <div className={styles.stars}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <div className={styles.text}>{text}</div>
              <div className={styles.userBox}>
                <img
                  className={styles.image}
                  src={`/reviews_authors/${authorId}.jpg`}
                />
                <div className={styles.line}>
                  <strong>{author}</strong>
                  <div className={styles.date}>
                    {date}
                  </div>
                </div>
              </div>
            </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
