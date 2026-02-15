"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import settings from "./settings";

import styles from "./styles.module.css";

export default function ProductSlider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.sliderBox}>
      <Slider {...settings} className={styles.slider}>
        {children}
      </Slider>
    </div>
  );
}

export function ProductSliderItem({ children }: { children: React.ReactNode }) {
  return <div className={styles.item}>{children}</div>;
}
