"use client";

import Link from "next/link";
import { useIntl } from "react-intl";
import { useEffect, useState } from "react";

import styles from "./page.module.css";

import "react-photo-album/rows.css";

import {
  PROMTBOOKS,
  promptbooksOrdered,
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

export default function HomePage({
  deviceType,
}: {
  deviceType: "mobile" | "desktop";
}) {
  const { formatMessage, locale } = useIntl();

  const [isMounted, setIsMounted] = useState(false);

  const isMobile = deviceType === "mobile";
  const rowHeight = isMobile ? 160 : 240;
  const booksCount = isMobile ? 4 : 6;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.inner}>
          <Profile />

          <div className={styles.section}>
            <h3>{formatMessage({ id: "home.prompt_books.popular.title" })}</h3>
            <p>{formatMessage({ id: "home.prompt_books.popular.text" })}</p>
            <PromptbookList list={promptbooksOrdered.slice(0, booksCount)} />

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
            <h3>
              {formatMessage({ id: "home.prompt_bundles.popular.title" })}
            </h3>
            <PromptbookList
              list={promptbooksBundlesOrdered.slice(0, booksCount)}
            />
          </div>

          <div className={styles.section}>
            <h3>{formatMessage({ id: "home.guides.title" })}</h3>
            <PromptbookList list={guidesOrdered.slice(0, booksCount)} />
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
            <h3>{formatMessage({ id: "home.portfolio.title" })}</h3>

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
