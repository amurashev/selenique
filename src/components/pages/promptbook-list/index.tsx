"use client";

import { useIntl } from "react-intl";
import Link from "next/link";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./page.module.css";
import {
  promptbooksOrdered,
  promptbooksBundlesOrdered,
  PROMTBOOKS,
} from "@/constants/promptbooks";

import { homePage, promptsCategoryPageRoute } from "@/constants/routes";
import PromptbookList from "@/components/sections/promptbook-list";
import PromptbookItem from "@/components/sections/promptbook-item2";
import ShortHeader from "@/components/layout/short-header";
import Footer from "@/components/layout/footer";
import Categories from "./categories";
import { PromptBook, PromptCategories } from "@/components/types";
import { getPromptCategoryShortLabel, getPromptCategoryTag } from "@/constants/prompts";

export const settings = {
  dots: false,
  infinite: false,
  lazyLoad: true,
  speed: 300,
  centerMode: false,
  slidesToShow: 3.3,
  slidesToScroll: 1,
  nextArrow: null,
  prevArrow: null,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.3,
        slidesToScroll: 2,
      },
    },
  ],
} as any; // eslint-disable-line @typescript-eslint/no-explicit-any

const CATEGORIES: PromptCategories[] = [
  'fashion',
  'business',
  'beauty',
  'product',
  'fantasy',
  'lifestyle',
  "studio",
  // "portrait",
  // 'christmas', // TODO?
  'red_carpet',
]

const PROMPTS_BY_CATEGORIES: Record<string, PromptBook[]> = {}

Object.keys(PROMTBOOKS).forEach(slug => {
  const { mainCategory, type } = PROMTBOOKS[slug]

  if (mainCategory && type === 'pack') {
    if (!PROMPTS_BY_CATEGORIES[mainCategory]) {
      PROMPTS_BY_CATEGORIES[mainCategory] = []
    }

    PROMPTS_BY_CATEGORIES[mainCategory].push({
      ...PROMTBOOKS[slug],
      slug,
    })
  }
})

Object.keys(PROMPTS_BY_CATEGORIES).map(category => {
  const prompts = PROMPTS_BY_CATEGORIES[category]
  prompts.sort((a, b) => {

    // TODO: order by points
    return Number(Boolean(b.isBestseller)) - Number(Boolean(a.isBestseller))
  })
})

export default function PromptbookListPage() {
  const { formatMessage, locale } = useIntl();

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
