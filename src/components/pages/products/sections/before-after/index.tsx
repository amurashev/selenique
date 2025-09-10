"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Section from "../../../../layout/section";
import { SampleNextArrow, SamplePrevArrow } from "@/components/sections/arrows";
import { Button } from "@/components/ui/button";
import { productPortfolioPageRoute } from "@/constants/routes";

import styles from "./styles.module.css";

const IMAGES = [27, 59, 8, 47, 52, 56, 58, 37];

export const BeforeAfter: React.FC = () => {
  const { formatMessage } = useIntl();

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
    <Section
      title={formatMessage({ id: "products.before_after.title" })}
      text={formatMessage({ id: "products.before_after.text" })}
      isGray
      isShort
    >
      <div className={styles.sections}>
        {/* <div className={styles.imageBox}>
          <img
            src={"/product/before_after.webp"}
            alt="Image Before"
            className={styles.image}
          />
        </div> */}

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
              window.location.href = productPortfolioPageRoute.getUrl({
                params: { type: "all " },
              });
            }}
          >
            {formatMessage({ id: "products.portfolio.see_all" })}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default BeforeAfter;
