"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { settings } from "../settings";

import styles from "./styles.module.css";

export default function ImagesBox({
  id,
  images,
  type,
}: {
  id: number;
  images: number[];
  type: "promptbook" | "guide";
}) {
  const imageKey = type === "promptbook" ? "promptbooks" : "guides"
  return (
    <Slider {...settings} className="mobileView">
      {images.map((item) => (
        <div key={item} className={styles.item}>
          <img
            className={styles.image}
            src={`/${imageKey}/${id}/${item}.jpg`}
          />
        </div>
      ))}
    </Slider>
  );
}
