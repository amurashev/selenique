"use client";

import React from "react";
import { useIntl } from "react-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";

// import Categories from "../categories";
import StarIcon from "@/components/ui/icons/star";
import { Bestseller } from "@/components/ui/bestseller";
import { ClipartBundle } from "@/content/clipart-bundle";

export default function Header({ data }: { data: ClipartBundle }) {
  const { formatMessage, locale } = useIntl();

  const {
    title,
    // isBestseller,
    // reviewsCount,
    // reviewsRating,
    // reviewsRatingFixed,
    // sales,
  } = data;

  const isBestseller = false
  const hasSales = false // sales > 1;
  const hasRating = false //Boolean(reviewsRating);

  return (
    <div className={styles.box}>
      {(hasRating || isBestseller || hasSales) && (
        <div className={styles.ratingBox}>
          {isBestseller && <Bestseller size="big" />}
          {/* {hasRating && (
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
          )} */}
          {/* {hasSales && (
            <div className={styles.bought}>
              {formatMessage(
                { id: "common.bought_recently" },
                { number: sales }
              )}
            </div>
          )} */}
          &nbsp;
        </div>
      )}

      <div className={styles.titleBox}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
}
