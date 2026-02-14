"use client";

import Link from "next/link";
import { useIntl } from "react-intl";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { RowsPhotoAlbum } from "react-photo-album";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./page.module.css";

import "react-photo-album/rows.css";

import {
  promptBookListPageRoute,
  promptBundleListPageRoute,
  guidesListPageRoute,
  productPortfolioPageRoute,
} from "@/constants/routes";

import { PromptBook } from "@/components/types";

import PromptbookItem from "@/components/sections/promptbook-item";
import settings from "../promptbook-list/settings";
import GuideItem from "@/components/sections/guide-item";
import { Guide } from "@/constants/guides";
import BasePageLayout from "@/components/layout/base-page";

import Profile from "./profile";

export default function HomePage({
  deviceType,
  bestSellers,
  photos,
  guidesList,
  bundles,
}: {
  deviceType: "mobile" | "desktop";
  bestSellers: PromptBook[];
  guidesList: Guide[];
  bundles: PromptBook[];
  photos: {
    alt: string;
    category: string;
    height: number;
    src: string;
    title: string;
    width: number;
  }[];
}) {
  const { formatMessage, locale } = useIntl();

  const [isMounted, setIsMounted] = useState(false);

  const isMobile = deviceType === "mobile";
  const rowHeight = isMobile ? 160 : 240;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <BasePageLayout>
      <Profile />

      <div className={styles.section}>
        <h2>{formatMessage({ id: "home.prompt_books.popular.title" })}</h2>
        <p>{formatMessage({ id: "home.prompt_books.popular.text" })}</p>

        <Slider {...settings} className={styles.slider}>
          {bestSellers.map((promptPack) => (
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

        <div className={styles.list}>
          {guidesList.map((item) => {
            return (
              <div key={item.slug} className={styles.item}>
                <GuideItem item={item} />
              </div>
            );
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
      </div>

      <div className={styles.section}>
        <h2>{formatMessage({ id: "home.prompt_bundles.popular.title" })}</h2>

        <Slider {...settings} className={styles.slider}>
          {bundles.map((item) => {
            return (
              <div key={item.slug} className={styles.item}>
                <PromptbookItem item={item} />
              </div>
            );
          })}
        </Slider>

        <div className={styles.buttonBox}>
          <Link
            className={styles.seeAll}
            href={promptBundleListPageRoute.getUrl(locale)}
          >
            {formatMessage({ id: "home.prompt_books.see_all" })}
          </Link>
        </div>
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
    </BasePageLayout>
  );
}
