"use client";

import { useIntl } from "react-intl";
import Link from "next/link";

import styles from "./page.module.css";

import { homePage } from "@/constants/routes";
import BasePageLayout from "@/components/layout/base-page";

import ImagePackItem from "@/components/sections/image-pack-item";
import { ImagesPack } from "@/content/images-packs";

export default function ImagesPacksListPage({
  imagesPacks,
}: {
  imagesPacks: ImagesPack[];
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <BasePageLayout
      route={homePage}
      title={formatMessage({ id: "image_packs.title_short" })}
      seoContent={formatMessage({ id: "image_packs.page_text" })}
    >
      <h1>{formatMessage({ id: "image_packs.h1" })}</h1>
      <p>{formatMessage({ id: "image_packs.text" })}</p>

      <div className={styles.list}>
        {imagesPacks.map((item) => {
          return (
            <div key={item.id} className={styles.item}>
              <ImagePackItem item={item} />
            </div>
          );
        })}
      </div>
    </BasePageLayout>
  );
}
