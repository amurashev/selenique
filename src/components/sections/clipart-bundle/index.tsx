"use client";

import React from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

// import { BestsellerBox } from "@/components/ui/bestseller";
// import { FreeBox } from "@/components/ui/free";

import styles from "./styles.module.css";
import { ClipartBundle } from "@/content/clipart-bundle";
import { clipartBundleItemPageRoute } from "@/constants/routes";

const ClipartBundleItem: React.FC<{
  item: ClipartBundle;
}> = ({ item }) => {
  const { formatMessage, locale } = useIntl();

  const { id, slug,  thumbImage, title } = item;
  const url = clipartBundleItemPageRoute.getUrl(locale, {
    params: {
      slug
    }
  })

  return (
    <Link key={id} href={url} className={styles.card} rel="nofollow">
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

export default ClipartBundleItem;
