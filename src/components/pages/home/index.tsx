"use client";

import Link from "next/link";
import { useIntl } from "react-intl";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./page.module.css";

import "react-photo-album/rows.css";

import {
  PROMTBOOKS,
  guidesOrdered,
  promptbooksBundlesOrdered,
} from "@/constants/promptbooks";
import {
  promptBookListPageRoute,
  guidesListPageRoute,
  productPortfolioPageRoute,
} from "@/constants/routes";

import PHOTOS from "../../../../source/portfolio.json";
import Profile from "./profile";
import shuffle from "@/utils/arrays";
import { RowsPhotoAlbum } from "react-photo-album";
import PromptbookList from "@/components/sections/promptbook-list";
import Footer from "@/components/layout/footer";
import ShortHeader from "@/components/layout/short-header";
import { PromptBook } from "@/components/types";

import PromptbookItem from "@/components/sections/promptbook-item2";
import settings from "../promptbook-list/settings";
import { getPromptBookData } from "@/constants/promptbooks/utils";

const randomPhotos = PHOTOS.filter((item) => {
  const sourceFile = item.SourceFile.slice(8);
  const category = sourceFile.split("/")[3];
  return category === "top";
});

shuffle(randomPhotos);

const photos = randomPhotos
  .map((item) => {
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
  })
  .slice(0, 8);


const BEST_SELLERS: PromptBook[] = []

Object.keys(PROMTBOOKS).forEach(slug => {
  const packData = getPromptBookData(slug)

  const { mainCategory, type, isBestseller } = packData

  if (mainCategory && type === 'pack') {
    if (isBestseller) {
      BEST_SELLERS.push(packData)
    }
  }
})


export default function HomePage({
  deviceType,
}: {
  deviceType: "mobile" | "desktop";
}) {
  const { formatMessage, locale } = useIntl();

  const [isMounted, setIsMounted] = useState(false);

  const isMobile = deviceType === "mobile";
  const rowHeight = isMobile ? 160 : 240;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={styles.page}>
      <ShortHeader
        title={"Selenique.Studio"}
      />
      <main className={styles.main}>
        <div className={styles.inner}>
          <Profile />

          <div className={styles.section}>
            <h2>{formatMessage({ id: "home.prompt_books.popular.title" })}</h2>
            <p>{formatMessage({ id: "home.prompt_books.popular.text" })}</p>
            
            <Slider {...settings} className={styles.slider}>
              {BEST_SELLERS.map(promptPack => (
                <div key={promptPack.id} className={styles.item}>
                  <PromptbookItem item={promptPack} />
                </div>
              ))}
            </Slider>

            <div className={styles.buttonBox}>
              <Link
                className={styles.seeAll}
                href={promptBookListPageRoute.getUrl(locale)}
              >
                {formatMessage({ id: "home.prompt_books.see_all" })}
              </Link>
            </div>
          </div>

          <div className={styles.section}>
            <h2>{formatMessage({ id: "home.guides.title" })}</h2>

            <Slider {...settings} className={styles.slider}>
              {guidesOrdered.map(slug => {
                const promptPack = getPromptBookData(slug)
                return (
                  <div key={slug} className={styles.item}>
                    <PromptbookItem item={promptPack} />
                  </div>
                )
              })}
            </Slider>
            <div className={styles.buttonBox}>
              <Link
                className={styles.seeAll}
                href={guidesListPageRoute.getUrl(locale)}
              >
                {formatMessage({ id: "home.guides.see_all" })}
              </Link>
            </div>
          </div>

          <div className={styles.section}>
            <h2>
              {formatMessage({ id: "home.prompt_bundles.popular.title" })}
            </h2>

            <Slider {...settings} className={styles.slider}>
              {promptbooksBundlesOrdered.map(slug => {
                const promptPack = getPromptBookData(slug)
                return (
                  <div key={slug} className={styles.item}>
                    <PromptbookItem item={promptPack} />
                  </div>
                )
              })}
            </Slider>
          </div>

          <div className={styles.section}>
            <h2>{formatMessage({ id: "home.portfolio.title" })}</h2>

            {photos && isMounted && (
              <div className={styles.photos}>
                <RowsPhotoAlbum
                  photos={photos}
                  spacing={4}
                  targetRowHeight={rowHeight}
                />
              </div>
            )}

            <div className={styles.buttonBox}>
              <Link
                className={styles.seeAll}
                href={productPortfolioPageRoute.getUrl(locale, {
                  params: {
                    type: "all",
                  },
                })}
              >
                {formatMessage({ id: "home.portfolio.see_all" })}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
