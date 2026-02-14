"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { settings } from "./settings";

import styles from "./styles.module.css";

export default function BlockSlider({ children }: { children: any }) {
  return (
    <Slider {...settings} className={`${styles.slider} mobileViewBlack`}>
      {children}
    </Slider>
  );
}

export function BlockSliderItem({ children }: { children: any }) {
  return (
    <div className={`${styles.item}`}>
      {children}
    </div>
  );
}