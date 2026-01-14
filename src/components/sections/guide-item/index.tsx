"use client";

import React, { useState } from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

import styles from "./styles.module.css";
import { Guide } from "@/components/types";
import { guidePageRoute } from "@/constants/routes";

const GuideItem: React.FC<{
  item: Guide;
}> = ({ item }) => {
  const { formatMessage, locale } = useIntl();
  const [isOpen, setIsOpen] = useState(false);

  const { slug, name, images } = item;
  return (
    <Link
      key={slug}
      href={guidePageRoute.getUrl(locale, {
        params: {
          slug,
        },
      })}
      className={styles.card}
    >
      <img src={images[0]} alt={name} className={styles.image} />
      {/* <div className={styles.textBlock}>
      <h3 className={styles.title}>{name}</h3>
    </div> */}
    </Link>
  );
};

export default GuideItem;
