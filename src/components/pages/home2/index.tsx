"use client";

import Link from "next/link";
import { useIntl } from "react-intl";
import { useEffect, useState } from "react";

import styles from "./page.module.css";

import "react-photo-album/rows.css";

import Header from "@/components/layout/header";
import { SERVICES } from "@/constants/services";
import Footer from "@/components/layout/footer";
import { PROMTBOOKS, promptbooksOrdered } from "@/constants/promptbooks";
import { GUIDES, guidesOrdered } from "@/constants/guides";
import {
  promptBookListPageRoute,
  guidesListPageRoute,
  productPortfolioPageRoute,
} from "@/constants/routes";

import PromptbookItem from "@/components/sections/promptbook-item";
import GuideItem from "@/components/sections/guide-item";
import PHOTOS from "../../../../source/portfolio.json";
import Profile from "./profile";
import shuffle from "@/utils/arrays";
import { RowsPhotoAlbum } from "react-photo-album";

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.inner}>
          <Profile />
          <div className={styles.section}>
            <h3>{formatMessage({ id: "home.prompt_books.popular" })}</h3>
            <div className={styles.list}>
              {promptbooksOrdered.slice(0, 4).map((slug) => {
                const item = {
                  ...PROMTBOOKS[slug],
                  slug,
                };
                return <PromptbookItem key={slug} item={item} />;
              })}
            </div>

            <div className={styles.buttonBox}>
              <Link
                className={styles.seeAll}
                href={promptBookListPageRoute.getUrl(locale)}
              >
                {formatMessage({ id: "home.prompt_books.see_all" })}
              </Link>
            </div>
          </div>

          {/* <div className={styles.section}>
            <h1>{formatMessage({ id: "home.guides.title" })}</h1>
            <div className={styles.list}>
              {guidesOrdered.slice(0, 6).map((slug) => {
                const item = {
                  ...GUIDES[slug],
                  slug,
                };
                return <GuideItem key={slug} item={item} />;
              })}
            </div>

            <div className={styles.buttonBox}>
              <Link
                className={styles.seeAll}
                href={guidesListPageRoute.getUrl(locale)}
              >
                {formatMessage({ id: "home.guides.see_all" })}
              </Link>
            </div>
          </div> */}

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
    </div>
  );
}
