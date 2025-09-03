"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";

import Section from "../../../../sections/section";

import styles from "./styles.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";
import { productPortfolioPageRoute } from "@/constants/routes";
import { SampleNextArrow, SamplePrevArrow } from "@/components/sections/arrows";


const IMAGES = [21, 27, 29, 37, 8, 47, 52, 56, 58];

export const Portfolio: React.FC = () => {
  const { formatMessage } = useIntl();

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    // slidesToShow: 2,
    // slidesToScroll: 1,
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
    <Section
      title={formatMessage({ id: "portfolio.title" })}
      isGray
      id="portfolio"
    >
      <div className={styles.sections}>
        <Slider {...settings}>
          {IMAGES.map((item) => (
            <div key={item} className={styles.item}>
              <img
                className={styles.image}
                src={`/product/examples/${item}.webp`}
              />
            </div>
          ))}
        </Slider>

        <div className={styles.buttonBox}>
          <Button
            onClick={() => {
              window.location.href = productPortfolioPageRoute.getUrl();
            }}
          >
            {formatMessage({ id: "portfolio.see_all" })}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Portfolio;
