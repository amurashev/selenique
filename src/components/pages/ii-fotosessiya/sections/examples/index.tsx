"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Section from "../../../../layout/section";
import { SampleNextArrow, SamplePrevArrow } from "@/components/sections/arrows";

import styles from "./styles.module.css";

const IMAGES = ["1_2.webp", "1_4.webp", "2_4.webp", "3_1.webp", "3_3.webp", "4_1.webp", "4_2.webp", "5_4.webp"];

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
          slidesToShow: 2,
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
      title={formatMessage({ id: "ii_photoshoot.examples.title" })}
      // text={formatMessage({ id: "ii_photoshoot.examples.text" })}
      isGray
      // isShort
    >
      <div className={styles.sections}>
        <Slider {...settings}>
          {IMAGES.map((item) => (
            <div key={item} className={styles.item}>
              <img
                className={styles.image}
                src={`/photoshoot/portfolio/${item}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Examples;
