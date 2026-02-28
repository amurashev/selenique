"use client";

import React from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

import { PromptBook } from "@/components/types";
import { promptBookPageRoute } from "@/constants/routes";
import StarIcon from "@/components/ui/icons/star";
import { BestsellerBox } from "@/components/ui/bestseller";

import styles from "./styles.module.css";

const PromptbookItem: React.FC<{
  item: PromptBook;
}> = ({ item }) => {
  const { formatMessage, locale } = useIntl();

  const {
    slug,
    name,
    vertImage,
    isBestseller,
    reviewsRating,
    reviewsRatingFixed,
  } = item;

  const url = promptBookPageRoute.getUrl(locale, {
    params: {
      slug,
    },
  });

  return (
    <Link key={slug} href={url} className={styles.card}>
      <div className={styles.box}>
        <img src={vertImage} title={name} alt={name} className={styles.image} />
      </div>
      {isBestseller && <BestsellerBox />}

      {Boolean(reviewsRating) && (
        <div className={styles.ratingBox}>
          <div className={styles.startBox}>
            <StarIcon size={11} />
            <span>
              <strong>{reviewsRatingFixed}</strong>
            </span>
          </div>
        </div>
      )}
    </Link>
  );
};

export default PromptbookItem;
