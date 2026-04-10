"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";

import { contentSettings } from "../settings";

import Categories from "../categories";
import StarIcon from "@/components/ui/icons/star";
import { Bestseller } from "@/components/ui/bestseller";

export default function ImageContent({ data }: { data: PromptBook }) {
  const { formatMessage, locale } = useIntl();

  const { id, examples = [] } = data;

  const imageKey = "promptbooks";

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
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
