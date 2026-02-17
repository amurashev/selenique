"use client";

import React from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

import { PromptBook } from "@/components/types";
import { guidePageRoute } from "@/constants/routes";
import StarIcon from "@/components/ui/icons/star";

import styles from "./styles.module.css";
import { Guide } from "@/constants/guides";

const GuideItem: React.FC<{
  item: Guide;
}> = ({ item }) => {
  const { formatMessage, locale } = useIntl();

  const { slug, lang, name, isBestseller, vertImage, gumroadLink, noLanding } = item;

  const url = noLanding
    ? gumroadLink
    : guidePageRoute.getUrl(locale, {
        params: {
          slug,
        },
      });

  return (
    <Link key={slug} href={url} className={styles.card}>
      {lang && (
        <img
          src={`/flags/${lang}.png`}
          alt={name}
          className={styles.flagImage}
        />
      )}
      <div className={styles.box}>
        <img src={vertImage} title={name} alt={name} className={styles.image} />
      </div>
      {isBestseller && (
        <div className={styles.bestseller}>Bestseller</div>
      )}

      {/* {Boolean(reviewsRating) && (
        <div className={styles.ratingBox}>
          <div className={styles.startBox}>
            <StarIcon size={11} />
            <span><strong>{reviewsRatingFixed}</strong></span>
          </div>
        </div>
      )} */}
    </Link>
  );
};

export default GuideItem;
