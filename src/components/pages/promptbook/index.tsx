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

export default function PromptbookPage({ data }: { data: PromptBook }) {
  const { formatMessage, locale } = useIntl();
  const { name, text, price, links, images } = data;

  const basePrice = {
    ru: price.ru +  Math.ceil(price.ru / 4),
    en: price.en +  Math.ceil(price.en / 4)
  }

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
                <img
                  className={styles.image}
                  src={item}
                />
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
                <div>{formatMessage({ id: "common.price" })}</div>
                <div className={styles.price}>
                  <PriceWithUnit value={price} />
                </div>
                <div className={styles.basePrice}>
                  <PriceWithUnit value={basePrice} />
                </div>
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
