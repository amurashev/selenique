"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";

import Section from "../../../../sections/section";
import { SampleNextArrow, SamplePrevArrow } from "@/components/sections/arrows";

import styles from "./styles.module.css";

const IMAGES = [1, 2, 3, 4, 6, 10, 11, 12, 13, 14, 15, 7];

export const WithModel: React.FC = () => {
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
      title={formatMessage({ id: "with_model.title" })}
      text={formatMessage({ id: "with_model.text" })}
      isGray
      isShort
    >
      <div className={styles.sections}>
        <Slider {...settings}>
          {IMAGES.map((item) => (
            <div key={item} className={styles.item}>
              <img
                className={styles.image}
                src={`/product/model/${item}.webp`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default WithModel;
