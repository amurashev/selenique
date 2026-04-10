"use client";

import React, { useState } from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";

import { contentSettings } from "../settings";

export default function ImageContent({ data }: { data: PromptBook }) {
  const { formatMessage, locale } = useIntl();
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState<number>();

  const { id, examples = [] } = data;

  const imageKey = "promptbooks";

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
      <h3>{formatMessage({ id: "prompt_books.image_content" })}:</h3>
      <Slider {...contentSettings} className={styles.slider}>
        {examples.map((item) => (
          <div key={item} className={styles.item}>
            <img
              className={styles.image}
              src={`/${imageKey}/${id}/${item}.jpg`}
              alt="Prompt book content"
              onClick={() => showImage(item)}
            />
          </div>
        ))}
      </Slider>

      {lightboxDisplay ? (
        <div className={styles.lightbox} onClick={hideLightBox}>
          <img
            className={styles.lightboxImage}
            onClick={hideLightBox}
            src={`/${imageKey}/${id}/${imageToShow}.jpg`}
          ></img>
        </div>
      ) : null}
    </div>
  );
}
