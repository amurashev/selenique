"use client";

import React from "react";
import { useIntl } from "react-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";

import PromptbookItem from "@/components/sections/promptbook-item";
import { REVIEWS } from "@/constants/reviews";

const Star = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" width={16} height={16} focusable="false">
    <path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z"></path>
  </svg>
);

export default function Reviews() {
  const { formatMessage, locale } = useIntl();
  const count = Object.keys(REVIEWS).length

  return (
    <div className={styles.box}>
      <h3 className={styles.title}>All reviews from this shop ({count})</h3>
      <div className={styles.list}>
        {Object.keys(REVIEWS).map((id) => {
          const { author, authorId, text, date, mark } = REVIEWS[id];
          return (
            <div key={id} className={styles.item}>
              <div>
                <img
                  className={styles.image}
                  src={`/reviews_authors/${authorId}.jpg`}
                />
              </div>
              <div className={styles.line}>
                <div>
                  <strong>{author}</strong> on {date}
                </div>
                <div className={styles.stars}>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className={styles.text}>{text}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
