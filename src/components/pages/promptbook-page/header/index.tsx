"use client";

import React from "react";
import { useIntl } from "react-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";

import Categories from "../categories";
import StarIcon from "@/components/ui/icons/star";


export default function Header({ data }: { data: PromptBook }) {
  const { formatMessage, locale } = useIntl();

  const { name, isBestseller, reviewsCount, reviewsRating, reviewsRatingFixed } = data;

  return (

    <div className={styles.box}>

      {(Boolean(reviewsRating) || isBestseller) && (
        <div className={styles.ratingBox}>
          {isBestseller && (
            <div className={styles.bestseller}>Bestseller</div>
          )}
          {Boolean(reviewsRating) && (
            <>
              <div className={styles.startBox}>
                <StarIcon size={16} style={{
                  position: "relative",
                  top: '-1px',
                }} />
                <span><strong>{reviewsRatingFixed}</strong></span>
                <span>({formatMessage({ id: 'common.review' }, { number: reviewsCount })})</span>
              </div>
              {/* <span className={styles.divider}>|</span> */}
            </>
          )}
          {/* {Boolean(sales) && (
            <span><strong>{sales}</strong> {formatMessage({ id: 'common.sales' })}</span>
          )} */}
          &nbsp;
        </div>
      )}
      <div className={styles.titleBox}>
        <h1 className={styles.title}>{name}</h1>
      </div>

      {/* <span className={styles.divider}>|</span>
        <span><strong>1</strong> review</span> */}
      <div className={styles.categoriesBox}>
        <Categories data={data} />
      </div>
    </div>
  );
}
