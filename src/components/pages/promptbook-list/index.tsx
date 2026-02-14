"use client";

import { useIntl } from "react-intl";
import Link from "next/link";
import Slider from "react-slick";
import { useEffect } from "react";
import { useMetrica } from "next-yandex-metrica";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./page.module.css";

import { homePage, promptsCategoryPageRoute } from "@/constants/routes";
import PromptbookItem from "@/components/sections/promptbook-item";

import BasePageLayout from "@/components/layout/base-page";
import { PromptBook, PromptCategories } from "@/components/types";
import { getPromptCategoryTag } from "@/constants/prompts";

import settings from "./settings";

const CATEGORIES: PromptCategories[] = [
  "business",
  "lifestyle",
  "fashion",
  "beauty",
  "product",
  "fantasy",
  "studio",
  // 'christmas', // TODO?
  "red_carpet",
];

export default function PromptbookListPage({
  bestSellers,
  promptsByCategories,
}: {
  bestSellers: PromptBook[];
  promptsByCategories: Record<string, PromptBook[]>;
}) {
  const { formatMessage, locale } = useIntl();
  const { reachGoal } = useMetrica();

  useEffect(() => {
    reachGoal("promptListPage_open");
  }, []);

  return (
    <BasePageLayout
      route={homePage}
      title={formatMessage({ id: "prompt_books.title_short" })}
    >
      <h1>{formatMessage({ id: "prompt_books.title" })}</h1>
      <p>{formatMessage({ id: "prompt_books.text" })}</p>
      {/* <Categories /> */}

      <div className={styles.categories}>
        <div>
          <div className={styles.titleLine}>
            <h3>{formatMessage({ id: "common.best_sellers" })}</h3>
          </div>
          <Slider {...settings} className={styles.slider}>
            {bestSellers.map((promptPack) => (
              <div key={promptPack.id} className={styles.item}>
                <PromptbookItem item={promptPack} />
              </div>
            ))}
          </Slider>
        </div>

        {CATEGORIES.map((category) => (
          <div key={category}>
            <div className={styles.titleLine}>
              <h3>{formatMessage({ id: getPromptCategoryTag(category) })}</h3>
              <Link
                className={styles.link}
                href={promptsCategoryPageRoute.getUrl(locale, {
                  params: {
                    slug: category,
                  },
                })}
              >
                {formatMessage({ id: "common.see_all" })}
              </Link>
            </div>
            {promptsByCategories[category] && (
              <Slider {...settings} className={styles.slider}>
                {promptsByCategories[category].map((promptPack) => (
                  <div key={promptPack.id} className={styles.item}>
                    <PromptbookItem item={promptPack} />
                  </div>
                ))}
              </Slider>
            )}
          </div>
        ))}
      </div>
    </BasePageLayout>
  );
}
