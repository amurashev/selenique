"use client";

import React from "react";
import { useIntl } from "react-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";

import Link from "next/link";
import { affiliatePageRoute } from "@/constants/routes";

const discount = 30;
const DISCOUNT_END_DAY = "2025-12-16";

export default function RightSide({
  data,
  backUrl,
  purchaseLink,
}: {
  data: PromptBook;
  backUrl: string;
  purchaseLink: string;
}) {
  const { formatMessage, locale } = useIntl();
  const { links, boostyId, type } = data;

  // const discountedPrice = {
  //   ru: price.ru + Math.ceil((price.ru * discount) / 50),
  //   en: Math.ceil(price.en - Math.ceil((price.en * discount) / 100)),
  // };

  const targetDate = new Date(DISCOUNT_END_DAY);

  // Текущая дата (без времени, чтобы не было дробных дней)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Разница в миллисекундах
  const diff = Number(targetDate) - Number(today);

  // Переводим миллисекунды в дни
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  const showRussiaHints = ["en", "ru"].includes(locale);

  return (
    <div className={styles.rightSideBox}>
      {/* <div className={styles.priceSection}>
                  <div>{formatMessage({ id: "common.price" })}</div>
                  <div className={styles.price}>
                    <PriceWithUnit value={discountedPrice} />
                  </div>
                  <div className={styles.basePrice}>
                    <PriceWithUnit value={price} />
                  </div>
                </div>
                <div className={styles.discountInfo}>
                  {discount}% off • Sale ends in {daysLeft} days
                </div> */}
      <div className={styles.links}>
        <div className={styles.linksSmall}>
          {purchaseLink && (
            <Link className={styles.link} href={purchaseLink} target="_blank">
              {formatMessage({ id: "common.continue" })}
            </Link>
          )}

          {boostyId && showRussiaHints && (
            <Link
              className={styles.link}
              href={`https://boosty.to/selenique/posts/${boostyId}`}
              target="_blank"
            >
              {formatMessage({ id: "common.buy_now_russia" })}
            </Link>
          )}
        </div>

        {showRussiaHints && (
          <div className={styles.hint}>
            {formatMessage({ id: "prompt_books.payment_russia_hint" })}
          </div>
        )}

        <div className={styles.linksSmall}>
          <Link className={styles.seeAllButton} href={backUrl}>
            {formatMessage({ id: "prompt_books.see_all" })}
          </Link>

          <Link
            href={affiliatePageRoute.getUrl(locale)}
            className={styles.seeAllButton}
          >
            {formatMessage({ id: "affiliate.hero.subtitle" })}
          </Link>
        </div>
        {/* {links.cm && (
                    <Link
                      className={styles.link}
                      href={links.cm}
                      target="_blank"
                    >
                      Buy on Creative Market
                    </Link>
                  )} */}
        {/* {links.patreon && (
                    <Link
                      className={styles.link}
                      href={links.patreon}
                      target="_blank"
                    >
                      Buy on Patreon
                    </Link>
                  )} */}
        {/* {links.etsy && (
                    <Link
                      className={styles.link}
                      href={links.etsy}
                      target="_blank"
                    >
                      Buy on Etsy
                    </Link>
                  )} */}
      </div>
    </div>
  );
}
