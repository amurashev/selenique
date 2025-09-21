"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../layout/section";
import ItemsList from "@/components/sections/items-list";
import Slider from "react-slick";


import { SampleNextArrow, SamplePrevArrow } from "@/components/sections/arrows";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";


const IMAGES = ["bg1.webp", "bg3.webp","bg2.webp",   "bg5.webp", "bg4.webp"];

export const WhatIsThat: React.FC = () => {
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
      title={formatMessage({ id: "ii_photoshoot.what_is_that.title" })}
      text={formatMessage({ id: "ii_photoshoot.what_is_that.text" })}
      isGray
    >
      <div className={styles.sections}>
      <Slider {...settings}>
          {IMAGES.map((item) => (
            <div key={item} className={styles.item}>
              <img
                className={styles.image}
                src={`/photoshoot/examples/${item}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default WhatIsThat;
