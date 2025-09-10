"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Section from "../../../../layout/section";
import { SampleNextArrow, SamplePrevArrow } from "@/components/sections/arrows";

import styles from "./styles.module.css";

const IMAGES = [1, 2, 3, 4, 5, 7, 10, 12, 14, 16, 25, 26, 27,28,29,30];

export const Examples: React.FC = () => {
  const { formatMessage } = useIntl();
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
      title={formatMessage({ id: "ii_model.examples.title" })}
      // text={formatMessage({ id: "ii_model.examples.text" })}
      isGray
      // isShort
    >
      <div className={styles.sections}>
        <Slider {...settings}>
          {IMAGES.map((item) => (
            <div key={item} className={styles.item}>
              <img
                className={styles.image}
                src={`/models/woman/3/${item}.png`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Examples;
