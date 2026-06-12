"use client";

import React, { useState } from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";

import { contentSettings } from "../settings";

export default function ImageContent({ images }: { images: string[] }) {
  const { formatMessage, locale } = useIntl();
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState<number>();

  const showImage = (image: number) => {
    //set imageToShow to be the one that's been clicked on
    setImageToShow(image);
    //set lightbox visibility to true
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  return (
    <div className={styles.box}>
      {/* <h3>{formatMessage({ id: "prompt_books.image_content" })}:</h3> */}
      <Slider {...contentSettings} className={styles.slider}>
        {images.map((item, key) => (
          <div key={item} className={styles.item}>
            <img
              className={styles.image}
              src={item}
              // alt="Prompt book content"
              onClick={() => showImage(key)}
            />
          </div>
        ))}
      </Slider>

      {lightboxDisplay ? (
        <div className={styles.lightbox} onClick={hideLightBox}>
          <img
            className={styles.lightboxImage}
            onClick={hideLightBox}
            src={images[imageToShow as keyof typeof images] as string}
          ></img>
        </div>
      ) : null}
    </div>
  );
}
