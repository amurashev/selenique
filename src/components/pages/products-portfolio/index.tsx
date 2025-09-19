"use client";

import { useIntl } from "react-intl";
import { useEffect, useState } from "react";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import styles from "./page.module.css";
import { productPortfolioPageRoute } from "@/constants/routes";

import Header from "@/components/layout/header";
import Tabs from "@/components/ui/tabs";
import { PORTFOLIO_COMMON_TYPE, PORTFOLIO_TYPES } from "@/constants/portfolio";
import Footer from "@/components/layout/footer";
import PHOTOS from "../../../../source/portfolio.json";

export default function ProductsPortfolioPage({ type }: { type: string }) {
  const { formatMessage, locale } = useIntl();
  const [isMounted, setIsMounted] = useState(false);
  const photos = PHOTOS.map((item) => {
    const sourceFile = item.SourceFile.slice(8);
    const category = sourceFile.split("/")[3];
    const fileName = sourceFile.split("/")[4];
    return {
      src: sourceFile,
      category,
      width: item.ImageWidth,
      height: item.ImageHeight,
      alt: fileName,
      title: fileName,
    };
  }).filter((item) =>
    type !== PORTFOLIO_COMMON_TYPE ? item.category === type : true
  );

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
