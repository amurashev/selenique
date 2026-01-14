"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./page.module.css";
import { Guide } from "@/components/types";

import { SampleNextArrow, SamplePrevArrow } from "@/components/sections/arrows";
import Link from "next/link";
import { guidesListPageRoute } from "@/constants/routes";
import Header from "@/components/layout/header";

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

export default function GuidePage({ data }: { data: Guide }) {
  const { formatMessage, locale } = useIntl();
  const { name, text, price, links, images } = data;

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
            <h2>About 888</h2>
            <p
              className={styles.text}
              dangerouslySetInnerHTML={{
                __html: text,
              }}
            />
          </div>

          <div className={styles.rightSide}>
            {true ? (
              <div className={styles.rightSideBox}>
                <div className={styles.links}>
                  {/* {links.cm && (
                    <Link
                      className={styles.link}
                      href={links.cm}
                      target="_blank"
                    >
                      Buy on Creative Market
                    </Link>
                  )} */}
                  {links.gumroad && (
                    <Link
                      className={styles.link}
                      href={links.gumroad}
                      target="_blank"
                    >
                      Buy on GumRoad
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
            ) : (
              <div className={styles.rightSideBox}>
                <div className={styles.naMessage}>Not available for now</div>
              </div>
            )}

            <Link
              className={styles.linkSecondary}
              href={guidesListPageRoute.getUrl(locale)}
            >
              {formatMessage({ id: "home.guides.see_all" })}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
