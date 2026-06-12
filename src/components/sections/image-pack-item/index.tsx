"use client";

import React from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

// import { BestsellerBox } from "@/components/ui/bestseller";
// import { FreeBox } from "@/components/ui/free";

import styles from "./styles.module.css";
import { ImagesPack } from "@/content/images-packs";

const ImagePackItem: React.FC<{
  item: ImagesPack;
}> = ({ item }) => {
  const { formatMessage, locale } = useIntl();

  const { id, pageUrl, title, thumbImage } = item;

  return (
    <Link key={id} href={pageUrl} className={styles.card} rel="nofollow">
      <div className={styles.box}>
        <img
          src={thumbImage}
          title={title}
          alt={title}
          className={styles.image}
        />
      </div>
      {/* {isBestseller && !isFree && <BestsellerBox />}
      {isFree && <FreeBox />} */}
    </Link>
  );
};

export default ImagePackItem;
