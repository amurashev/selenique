"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { settings } from "./settings";

import styles from "./styles.module.css";

export default function ImagesSlider(
  { images }: { images: string[] }
) {
  return (
    <Slider {...settings} className={`${styles.slider} mobileViewBlack`}>
      {images.map(item => (
          <div key={item} className={styles.item}>
            <img
              className={styles.image}
              src={`${item}`}
            />
        </div>
        ))}
    </Slider>
  );
}
