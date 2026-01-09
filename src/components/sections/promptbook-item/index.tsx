"use client";

import React, { useState } from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";
import { promptBookPageRoute } from "@/constants/routes";

const PromptbookItem: React.FC<{
  item: PromptBook;
}> = ({ item }) => {
  const { formatMessage, locale } = useIntl();
  const [isOpen, setIsOpen] = useState(false);

  const { slug, name, images } = item;
  return (
    <Link
      key={slug}
      href={promptBookPageRoute.getUrl(locale, {
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

export default PromptbookItem;
