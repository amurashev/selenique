"use client";

import { useIntl } from "react-intl";
import { useEffect, useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import {
  productPortfolioPageRoute,
} from "@/constants/routes";
import PHOTOS from "./photos";
import Header from "@/components/layout/header";
import Tabs from "@/components/ui/tabs";
import { PORTFOLIO_TYPES } from "@/constants/portfolio";
import Footer from "@/components/layout/footer";

export default function ProductsPortfolioPage({ type }: { type: string }) {
  const { formatMessage, locale } = useIntl();
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
          items={PORTFOLIO_TYPES.map((item) => ({
            index: item.index,
            link: productPortfolioPageRoute.getUrl(locale, {
              params: {
                type: item.index,
              },
            }),
            label: formatMessage({ id: item.labelKey }),
          }))}
        />
        {photos && isMounted && (
          <div className={styles.photos}>
            <RowsPhotoAlbum photos={photos} spacing={4} targetRowHeight={480} />
          </div>
        )}
      </main>
      <Footer />
      {/* <footer className={styles.footer}>
        <Button
          onClick={() => {
            window.location.href = productPageRoute.getUrl() + "#portfolio";
          }}
        >
          Вернуться на основной сайт
        </Button>
      </footer> */}
    </div>
  );
}
