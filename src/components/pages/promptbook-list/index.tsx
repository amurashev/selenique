"use client";

import { useIntl } from "react-intl";
import Link from "next/link";
import Slider from "react-slick";
import { useMetrica } from 'next-yandex-metrica';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./page.module.css";
import {
  PROMTBOOKS,
} from "@/constants/promptbooks";

import { homePage, promptsCategoryPageRoute } from "@/constants/routes";
import PromptbookItem from "@/components/sections/promptbook-item2";
import ShortHeader from "@/components/layout/short-header";
import Footer from "@/components/layout/footer";
import { PromptBook, PromptCategories } from "@/components/types";
import { getPromptCategoryTag } from "@/constants/prompts";
import settings from "./settings";
import { useEffect } from "react";
import { getPromptBookData, sortByPoints } from "@/constants/promptbooks/utils";


const CATEGORIES: PromptCategories[] = [
  'business',
  'lifestyle',
  'fashion',
  'beauty',
  'product',
  'fantasy',
  "studio",
  // "portrait",
  // 'christmas', // TODO?
  'red_carpet',
]

const PROMPTS_BY_CATEGORIES: Record<string, PromptBook[]> = {}
const BEST_SELLERS: PromptBook[] = []

Object.keys(PROMTBOOKS).forEach(slug => {
  const { mainCategory, type, isBestseller } = PROMTBOOKS[slug]

  if (mainCategory && type === 'pack') {
    if (!PROMPTS_BY_CATEGORIES[mainCategory]) {
      PROMPTS_BY_CATEGORIES[mainCategory] = []
    }

    const packData = getPromptBookData(slug)

    PROMPTS_BY_CATEGORIES[mainCategory].push(packData)

    if (isBestseller) {
      BEST_SELLERS.push(packData)
    }
  }
})

Object.keys(PROMPTS_BY_CATEGORIES).map(category => {
  const prompts = PROMPTS_BY_CATEGORIES[category]
  prompts.sort(sortByPoints)
})

BEST_SELLERS.sort(sortByPoints)

export default function PromptbookListPage() {
  const { formatMessage, locale } = useIntl();
  const { reachGoal } = useMetrica();

  useEffect(() => {
    reachGoal('promptListPage_open')
  }, [])

  return (
    <>
      <div className={styles.page}>
        <ShortHeader
          route={homePage}
          title={formatMessage({ id: "prompt_books.title_short" })}
        />
        <main className={styles.main}>
          <h1>{formatMessage({ id: "prompt_books.title" })}</h1>
          <p>{formatMessage({ id: "prompt_books.text" })}</p>
          {/* <Categories /> */}
          {/* <PromptbookList
            list={[...promptbooksOrdered]}
          /> */}
          <div className={styles.categories}>
            <div>
              <div className={styles.titleLine}>
                <h3>{formatMessage({ id: 'common.best_sellers' })}</h3>
              </div>
              <Slider {...settings} className={styles.slider}>
                {BEST_SELLERS.map(promptPack => (
                  <div key={promptPack.id} className={styles.item}>
                    <PromptbookItem item={promptPack} />
                  </div>
                ))}
              </Slider>
            </div>

            {CATEGORIES.map(category => (
              <div key={category}>
                <div className={styles.titleLine}>
                  <h3>{formatMessage({ id: getPromptCategoryTag(category) })}</h3>
                  <Link className={styles.link} href={promptsCategoryPageRoute.getUrl(locale, {
                    params: {
                      slug: category
                    }
                  })}>{formatMessage({ id: "common.see_all" })}</Link>
                </div>
                {PROMPTS_BY_CATEGORIES[category] && (
                  <Slider {...settings} className={styles.slider}>
                    {PROMPTS_BY_CATEGORIES[category].map(promptPack => (
                      <div key={promptPack.id} className={styles.item}>
                        <PromptbookItem item={promptPack} />
                      </div>
                    ))}
                  </Slider>
                )}
              </div>
            ))}
          </div>
          {/* <div className={styles.buttonBox}>
            <Link className={styles.seeAll} href={homePage.getUrl(locale)}>
              {formatMessage({ id: "home.prompt_books.see_all" })}
            </Link>
          </div> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
