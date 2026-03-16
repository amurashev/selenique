"use client";

import React from "react";
import { useIntl } from "react-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";

import Categories from "../categories";
import StarIcon from "@/components/ui/icons/star";
import { Bestseller } from "@/components/ui/bestseller";

export default function Header({ data }: { data: PromptBook }) {
  const { formatMessage, locale } = useIntl();

  const {
    name,
    isBestseller,
    reviewsCount,
    reviewsRating,
    reviewsRatingFixed,
    sales,
  } = data;

  const hasSales = sales > 1;
  const hasRating = Boolean(reviewsRating);

  return (
    <div className={styles.box}>
      {(hasRating || isBestseller || hasSales) && (
        <div className={styles.ratingBox}>
          {isBestseller && <Bestseller size="big" />}
          {hasRating && (
            <>
              <div className={styles.startBox}>
                <StarIcon
                  size={16}
                  style={{
                    position: "relative",
                    top: "-1px",
                  }}
                />
                <span>
                  <strong>{reviewsRatingFixed}</strong>
                </span>
                <span>
                  (
                  {formatMessage(
                    { id: "common.review" },
                    { number: reviewsCount }
                  )}
                  )
                </span>
              </div>
            </>
          )}
          {hasSales && (
            <div className={styles.bought}>
              {formatMessage(
                { id: "common.bought_recently" },
                { number: sales }
              )}
            </div>
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
