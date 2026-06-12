"use client";

import React from "react";
import { useIntl } from "react-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";

import StarIcon from "@/components/ui/icons/star";
import { Bestseller } from "@/components/ui/bestseller";
import { ImagesPack } from "@/content/images-packs";

export default function Header({ data }: { data: ImagesPack }) {
  const { formatMessage, locale } = useIntl();

  const { title } = data;

  const isBestseller = false;

  return (
    <div className={styles.box}>
      {isBestseller && (
        <div className={styles.ratingBox}>
          {isBestseller && <Bestseller size="big" />}
        </div>
      )}

      <div className={styles.titleBox}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  );
}
