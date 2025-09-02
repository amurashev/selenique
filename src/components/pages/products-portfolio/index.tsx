"use client";

import { useIntl } from "react-intl";
import { useEffect, useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import styles from "./page.module.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { productPageRoute } from "@/constants/routes";
import PHOTOS from "./photos";

export default function ProductsPortfolioPage() {
  const [isMounted, setIsMounted] = useState(false);
  const photos = PHOTOS.map((item) => ({
    src: `/product/portfolio/${item.id}.png`,
    width: item.width,
    height: item.height,
    alt: String(item.id),
  }));


  useEffect(() => {
    setIsMounted(true);
  }, []);

  console.warn("photos", photos, isMounted);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {photos && isMounted && <RowsPhotoAlbum photos={photos} spacing={4} />}

        {/* {PHOTOS.map((item) => (
          <div key={item.id} className={styles.item}>
            <img
              className={styles.image}
              src={`/product/portfolio/${item.id}.png`}
            />
          </div>
        ))} */}
      </main>
      <footer className={styles.footer}>
        <Button
          onClick={() => {
            window.location.href = productPageRoute.getUrl() + "#portfolio";
          }}
        >
          Вернуться на основной сайт
        </Button>
      </footer>
    </div>
  );
}
