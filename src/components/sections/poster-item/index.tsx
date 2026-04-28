"use client";

import React from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

import { PromptBook } from "@/components/types";
import { guidePageRoute } from "@/constants/routes";
import StarIcon from "@/components/ui/icons/star";

import styles from "./styles.module.css";
import { Guide } from "@/constants/guides";
import { BestsellerBox } from "@/components/ui/bestseller";
import { FreeBox } from "@/components/ui/free";
import { Poster } from "@/content/posters";

const PosterItem: React.FC<{
  item: Poster;
}> = ({ item }) => {
  const { formatMessage, locale } = useIntl();

  const {
    id,
    etsyID,
    // slug,
    title,
  } = item;

  const url = `https://www.etsy.com/listing/${etsyID}`
  const vertImage = `/images/posters/${id}/thumb.jpg`

  return (
    <Link key={id} href={url} className={styles.card}>
      <div className={styles.box}>
        <img src={vertImage} title={title} alt={title} className={styles.image} />
      </div>
    </Link>
  );
};

export default PosterItem;
