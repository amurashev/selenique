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

export default function PromptbookPage({ data }: { data: PromptBook }) {
  const { formatMessage, locale } = useIntl();
  const { name, text, price, links } = data;

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
      <main className={styles.main}>
        <h1>{name}</h1>
        <div className={styles.section}>
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <div key={item} className={styles.item}>
                <img
                  className={styles.image}
                  src={`/promptbooks/1/${item}.jpg`}
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
            <div className={styles.priceSection}>
              <div>{formatMessage({ id: "common.price" })}</div>
              <div className={styles.price}>
                <PriceWithUnit value={price} />
              </div>
            </div>
            <div className={styles.links}>
              <Link className={styles.link} href={links.cm} target="_blank">
                Buy on Creative Market
              </Link>
              <Link className={styles.link} href={links.cm}>
                Buy on Patreon
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
