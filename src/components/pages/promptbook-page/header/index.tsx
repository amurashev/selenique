"use client";

import React from "react";
import { useIntl } from "react-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";

import Categories from "../categories";

const StarIcon = () => {
  return (
    <svg style={{
      position: "relative",
      top: '-1px',
    }} version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
      width="16px" height="16px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
      <path fill="#ff9903" d="M62.799,23.737c-0.47-1.399-1.681-2.419-3.139-2.642l-16.969-2.593L35.069,2.265
	C34.419,0.881,33.03,0,31.504,0c-1.527,0-2.915,0.881-3.565,2.265l-7.623,16.238L3.347,21.096c-1.458,0.223-2.669,1.242-3.138,2.642
	c-0.469,1.4-0.115,2.942,0.916,4l12.392,12.707l-2.935,17.977c-0.242,1.488,0.389,2.984,1.62,3.854
	c1.23,0.87,2.854,0.958,4.177,0.228l15.126-8.365l15.126,8.365c0.597,0.33,1.254,0.492,1.908,0.492c0.796,0,1.592-0.242,2.269-0.72
	c1.231-0.869,1.861-2.365,1.619-3.854l-2.935-17.977l12.393-12.707C62.914,26.68,63.268,25.138,62.799,23.737z"/>
    </svg>
  )
}

export default function Header({ data }: { data: PromptBook }) {
  const { formatMessage, locale } = useIntl();

  const { name, rating, isBestseller, sales } = data;

  const ratingFixed = rating.rating.toFixed(1)

  return (

    <div className={styles.box}>
      {isBestseller && (
        <div className={styles.bestseller}>Bestseller</div>
      )}
      <h1 className={styles.title}>{name}</h1>
      {(Boolean(rating.count) || Boolean(sales)) && (
        <div className={styles.ratingBox}>
          {Boolean(rating.count) && (
            <>
              <div className={styles.startBox}>
                <StarIcon />
                <span><strong>{ratingFixed}</strong></span>
              </div>
              <span className={styles.divider}>|</span>
            </>
          )}
          {Boolean(sales) && (
            <span><strong>{sales}</strong> {formatMessage({ id: 'common.sales' })}</span>
          )}
          &nbsp;
          {/* <span className={styles.divider}>|</span>
        <span><strong>1</strong> review</span> */}
        </div>
      )}
      <div className={styles.categoriesBox}>
        <Categories data={data} />
      </div>
    </div>
  );
}
