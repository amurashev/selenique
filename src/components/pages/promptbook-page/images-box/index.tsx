"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { mainSettings } from "../settings";

import styles from "./styles.module.css";

export default function ImagesBox({
  images,
}: {
  images: string[];
}) {
  return (
    <Slider {...mainSettings} className="singlePageCase">
      {images.map((item) => (
        <div key={item} className={styles.item}>
          <img
            className={styles.image}
            src={item}
            alt="Prompt book image"
          />
        </div>
      ))}
    </Slider>
  );
}
