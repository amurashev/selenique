"use client";

import React from "react";
import { useIntl } from "react-intl";
import Link from "next/link";
import Image from "next/image";

import { PromptBook } from "@/components/types";
import { promptBookPageRoute } from "@/constants/routes";
import StarIcon from "@/components/ui/icons/star";
import { BestsellerBox } from "@/components/ui/bestseller";
import { FreeBox } from "@/components/ui/free";

import styles from "./styles.module.css";

const PromptbookItem: React.FC<{
  item: PromptBook;
}> = ({ item }) => {
  const { formatMessage, locale } = useIntl();

  const {
    id,
    slug,
    name,
    vertImage,
    isBestseller,
    isFree,
    reviewsRating,
    reviewsRatingFixed,
    isDirectLink,
    gumroadLink,
  } = item;

  const url = isDirectLink
    ? gumroadLink
    : promptBookPageRoute.getUrl(locale, {
        params: {
          slug,
        },
      });

  return (
    <Link key={slug} href={url} className={styles.card}>
      <div className={styles.box}>
        <Image
          width={260}
          height={292}
          loading="lazy"
          src={vertImage}
          title={name}
          alt={name}
          className={styles.image}
        />
      </div>
      {isBestseller && !isFree && <BestsellerBox />}
      {isFree && <FreeBox />}

      {Boolean(reviewsRating) && (
        <div className={styles.ratingBox}>
          <div className={styles.startBox}>
            <StarIcon style={{ top: "-1px", position: "relative" }} size={13} />
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
