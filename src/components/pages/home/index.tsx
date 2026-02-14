"use client";

import Link from "next/link";
import { useIntl } from "react-intl";
import { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";

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
import GuideItem from "@/components/sections/guide-item";
import { Guide } from "@/constants/guides";
import BasePageLayout from "@/components/layout/base-page";

import Profile from "./profile";
import ProductSlider, {
  ProductSliderItem,
} from "../promptbook-list/product-slider";

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
        <div className={styles.firstLine}>
          <h2>{formatMessage({ id: "home.guides.title" })}</h2>

          <div className={styles.buttonBox}>
            <Link
              className={styles.seeAll}
              href={guidesListPageRoute.getUrl(locale)}
            >
              {formatMessage({ id: "common.see_all" })}
            </Link>
          </div>
        </div>

        <div className={styles.list}>
          {guidesList.map((item) => {
            return (
              <div key={item.slug} className={styles.null}>
                <GuideItem item={item} />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.firstLine}>
          <h2>{formatMessage({ id: "home.prompt_books.popular.title" })}</h2>

          <div className={styles.buttonBox}>
            <Link
              className={styles.seeAll}
              href={promptBookListPageRoute.getUrl(locale)}
            >
              {formatMessage({ id: "common.see_all" })}
            </Link>
          </div>
        </div>
        <p>{formatMessage({ id: "home.prompt_books.popular.text" })}</p>

        <ProductSlider>
          {bestSellers.map((item) => {
            return (
              <ProductSliderItem key={item.slug}>
                <PromptbookItem item={item} />
              </ProductSliderItem>
            );
          })}
        </ProductSlider>
      </div>

      <div className={styles.section}>
        <div className={styles.firstLine}>
          <h2>{formatMessage({ id: "home.prompt_bundles.popular.title" })}</h2>

          <div className={styles.buttonBox}>
            <Link
              className={styles.seeAll}
              href={promptBundleListPageRoute.getUrl(locale)}
            >
              {formatMessage({ id: "common.see_all" })}
            </Link>
          </div>
        </div>

        <ProductSlider>
          {bundles.map((item) => {
            return (
              <ProductSliderItem key={item.slug}>
                <PromptbookItem item={item} />
              </ProductSliderItem>
            );
          })}
        </ProductSlider>
      </div>

      <div className={styles.section}>
        <div className={styles.firstLine}>
          <h2>{formatMessage({ id: "home.portfolio.title" })}</h2>

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

        {photos && isMounted && (
          <div className={styles.photos}>
            <RowsPhotoAlbum
              photos={photos}
              spacing={4}
              targetRowHeight={rowHeight}
            />
          </div>
        )}
      </div>
    </BasePageLayout>
  );
}
