"use client";

import { useIntl } from "react-intl";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import { useMetrica } from "next-yandex-metrica";

import styles from "./page.module.css";

import { homePage, promptsCategoryPageRoute } from "@/constants/routes";
import PromptbookItem from "@/components/sections/promptbook-item";

import BasePageLayout from "@/components/layout/base-page";
import { PromptBook, PromptCategories } from "@/components/types";
import { getPromptCategoryTag } from "@/content/promptbooks/categories";
import ProductSlider, {
  ProductSliderItem,
} from "../promptbook-list/product-slider";
import GroupHeader from "@/components/sections/group-header";

const CATEGORIES: PromptCategories[] = [
  "business",
  "avatar",
  "lifestyle",
  "fashion",
  "beauty",
  "product",
  "fantasy",
  "food",
  "studio",
  "design",
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
          <GroupHeader title={formatMessage({ id: "common.best_sellers" })} />
          <ProductSlider>
            {bestSellers.map((promptPack) => (
              <ProductSliderItem key={promptPack.slug}>
                <PromptbookItem item={promptPack} />
              </ProductSliderItem>
            ))}
          </ProductSlider>
        </div>

        {CATEGORIES.map((category) => (
          <Fragment key={category}>
            <hr className={styles.hr} />
            <div key={category}>
              <GroupHeader
                title={formatMessage({ id: getPromptCategoryTag(category) })}
                href={promptsCategoryPageRoute.getUrl(locale, {
                  params: {
                    slug: category,
                  },
                })}
              />
              {promptsByCategories[category] && (
                <ProductSlider>
                  {promptsByCategories[category].map((promptPack) => (
                    <ProductSliderItem key={promptPack.slug}>
                      <PromptbookItem item={promptPack} />
                    </ProductSliderItem>
                  ))}
                </ProductSlider>
              )}
            </div>
          </Fragment>
        ))}
      </div>
    </BasePageLayout>
  );
}
