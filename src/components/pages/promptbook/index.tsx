"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./page.module.css";
import { PromptBook } from "@/components/types";

import { SampleNextArrow, SamplePrevArrow } from "@/components/sections/arrows";
import { PriceWithUnit } from "@/components/ui/price";
import Link from "next/link";
import { promptBookListPageRoute } from "@/constants/routes";
import Header from "@/components/layout/header";

const discount = 40;

const DISCOUNT_END_DAY = "2025-11-16";

export default function PromptbookPage({ data }: { data: PromptBook }) {
  const { formatMessage, locale } = useIntl();
  const { name, text, price, links, images } = data;

  const discountedPrice = {
    ru: price.ru + Math.ceil((price.ru * discount) / 50),
    en: Math.ceil(price.en - Math.ceil((price.en * discount / 100))),
  };

  const targetDate = new Date(DISCOUNT_END_DAY);

  // Текущая дата (без времени, чтобы не было дробных дней)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Разница в миллисекундах
  const diff = Number(targetDate) - Number(today);

  // Переводим миллисекунды в дни
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  } as any; // eslint-disable-line @typescript-eslint/no-explicit-any

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1>{name}</h1>
        <div className={styles.section}>
          <Slider {...settings}>
            {images.map((item) => (
              <div key={item} className={styles.item}>
                <img className={styles.image} src={item} />
              </div>
            ))}
          </Slider>
        </div>

        <div className={styles.line}>
          <div className={styles.textBox}>
            <h2>About</h2>
            <p
              className={styles.text}
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          </div>

          <div className={styles.rightSide}>
            <div className={styles.rightSideBox}>
              <div className={styles.priceSection}>
                {/* <div>{formatMessage({ id: "common.price" })}</div> */}
                <div className={styles.price}>
                  <PriceWithUnit value={discountedPrice} />
                </div>
                <div className={styles.basePrice}>
                  <PriceWithUnit value={price} />
                </div>
              </div>
              <div className={styles.discountInfo}>
                {discount}% off • Sale ends in {daysLeft} days
              </div>
              <div className={styles.links}>
                {links.cm && (
                  <Link className={styles.link} href={links.cm} target="_blank">
                    Buy on Creative Market
                  </Link>
                )}
                {links.patreon && (
                  <Link
                    className={styles.link}
                    href={links.patreon}
                    target="_blank"
                  >
                    Buy on Patreon
                  </Link>
                )}
                {links.etsy && (
                  <Link
                    className={styles.link}
                    href={links.etsy}
                    target="_blank"
                  >
                    Buy on Etsy
                  </Link>
                )}
              </div>
            </div>

            <Link
              className={styles.linkSecondary}
              href={promptBookListPageRoute.getUrl(locale)}
            >
              See all Prompt Books
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
