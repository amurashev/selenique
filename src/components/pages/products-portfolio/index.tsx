"use client";

import { useIntl } from "react-intl";
import { useEffect, useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import {
  productPageRoute,
  productPortfolioPageRoute,
} from "@/constants/routes";
import PHOTOS from "./photos";
import Header from "@/components/sections/header";
import Tabs from "@/components/ui/tabs";

export default function ProductsPortfolioPage({ type }: { type: string }) {
  const [isMounted, setIsMounted] = useState(false);
  const photos = PHOTOS.filter((item) =>
    type !== "all" ? item.type === type : true
  ).map((item) => ({
    src: `/product/portfolio/${item.src}`,
    width: item.width,
    height: item.height,
    alt: String(item.id),
  }));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Tabs
          activeIndex={type}
          items={[
            {
              index: "all",
              link: productPortfolioPageRoute.getUrl({
                params: {
                  type: "all",
                },
              }),
              label: "Все",
            },
            // {
            //   index: "models",
            //   link: productPortfolioPageRoute.getUrl({
            //     params: {
            //       type: "models",
            //     },
            //   }),
            //   label: "ИИ Модели",
            // },
            {
              index: "cosmetic",
              link: productPortfolioPageRoute.getUrl({
                params: {
                  type: "cosmetic",
                },
              }),
              label: "Косметика",
            },
            {
              index: "accessories",
              link: productPortfolioPageRoute.getUrl({
                params: {
                  type: "accessories",
                },
              }),
              label: "Аксессуары",
            },
            {
              index: "cloth",
              link: productPortfolioPageRoute.getUrl({
                params: {
                  type: "cloth",
                },
              }),
              label: "Одежда",
            },
            {
              index: "shoes",
              link: productPortfolioPageRoute.getUrl({
                params: {
                  type: "shoes",
                },
              }),
              label: "Обувь",
            },
            {
              index: "electronics",
              link: productPortfolioPageRoute.getUrl({
                params: {
                  type: "electronics",
                },
              }),
              label: "Электроника",
            },
            {
              index: "furniture",
              link: productPortfolioPageRoute.getUrl({
                params: {
                  type: "furniture",
                },
              }),
              label: "Мебель",
            },
          ]}
        />
        {photos && isMounted && (
          <div className={styles.photos}>
            <RowsPhotoAlbum photos={photos} spacing={4} targetRowHeight={480} />
          </div>
        )}
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
