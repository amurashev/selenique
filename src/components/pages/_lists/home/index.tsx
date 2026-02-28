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
  affiliatePageRoute,
} from "@/constants/routes";

import { PromptBook } from "@/components/types";

import PromptbookItem from "@/components/sections/promptbook-item";
import GuideItem from "@/components/sections/guide-item";
import { Guide } from "@/constants/guides";
import BasePageLayout from "@/components/layout/base-page";

import Profile from "./profile";
import ProductSlider, {
  ProductSliderItem,
} from "@/components/pages/_lists/promptbook-list/product-slider";
import GroupHeader from "@/components/sections/group-header";
import { COMMISSION } from "@/constants/affiliate";

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

      <hr className={styles.hr} />

      {guidesList.length > 0 && (
        <>
          <div className={styles.section}>
            <GroupHeader
              title={formatMessage({ id: "home.guides.title" })}
              href={guidesListPageRoute.getUrl(locale)}
            />

            <ProductSlider>
              {guidesList.map((item) => {
                return (
                  <ProductSliderItem key={item.slug}>
                    <GuideItem item={item} />
                  </ProductSliderItem>
                );
              })}
            </ProductSlider>
          </div>

          <hr className={styles.hr} />
        </>
      )}

      <div className={styles.section}>
        <GroupHeader
          title={formatMessage({ id: "home.prompt_books.popular.title" })}
          href={promptBookListPageRoute.getUrl(locale)}
        />

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

      <hr className={styles.hr} />

      <div className={styles.section}>
        <GroupHeader
          title={formatMessage({ id: "home.affiliate.title" })}
          label={formatMessage({ id: "common.see_more" })}
          href={affiliatePageRoute.getUrl(locale)}
        />

        <p
          className={styles.affiliateBoxText}
          dangerouslySetInnerHTML={{
            __html: formatMessage(
              { id: "home.affiliate.text" },
              { commission: COMMISSION, strong: (el) => `<strong>${el}</strong>` }
            ),
          }}
        />

        <ProductSlider>
          {[1, 2, 3].map((item) => {
            return (
              <ProductSliderItem key={item}>
                <div className={styles.box}>
                  <img
                    src={`/images/affiliate/${item}.jpg`}
                    className={styles.image}
                  />
                </div>
              </ProductSliderItem>
            );
          })}
        </ProductSlider>

        <div className={styles.joinButtonBox}>
          <Link
            href={affiliatePageRoute.getUrl(locale)}
            className={styles.readButton}
          >
            {formatMessage({ id: "common.read_more" })}
          </Link>
          <Link
            href={"https://seleniquestudio.gumroad.com/affiliates"}
            className={styles.joinButton}
          >
            {formatMessage({ id: "home.affiliate.join" })}
          </Link>
        </div>
      </div>

      <hr className={styles.hr} />

      <div className={styles.section}>
        <GroupHeader
          title={formatMessage({ id: "home.prompt_bundles.popular.title" })}
          href={promptBundleListPageRoute.getUrl(locale)}
        />

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

      {/* <div className={styles.section}>
        <GroupHeader
          title={formatMessage({ id: "home.portfolio.title" })}
          href={productPortfolioPageRoute.getUrl(locale, {
            params: {
              type: "all",
            },
          })}
        />
        {photos && isMounted && (
          <div className={styles.photos}>
            <RowsPhotoAlbum
              photos={photos}
              spacing={4}
              targetRowHeight={rowHeight}
            />
          </div>
        )}
      </div> */}
    </BasePageLayout>
  );
}
