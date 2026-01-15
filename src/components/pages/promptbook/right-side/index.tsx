"use client";

import React from "react";
import { useIntl } from "react-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";

import { PriceWithUnit } from "@/components/ui/price";
import Link from "next/link";
import { promptBookListPageRoute } from "@/constants/routes";

const discount = 30;
const DISCOUNT_END_DAY = "2025-12-16";

export default function RightSide({ data }: { data: PromptBook }) {
  const { formatMessage, locale } = useIntl();
  const { id, gumroadId, name, text, price, links, images, isDisabled } = data;

  const discountedPrice = {
    ru: price.ru + Math.ceil((price.ru * discount) / 50),
    en: Math.ceil(price.en - Math.ceil((price.en * discount) / 100)),
  };

  const targetDate = new Date(DISCOUNT_END_DAY);

  // Текущая дата (без времени, чтобы не было дробных дней)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Разница в миллисекундах
  const diff = Number(targetDate) - Number(today);

  // Переводим миллисекунды в дни
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  const purchaseLink = `https://gumroad.com/checkout?layout=profile&product=${gumroadId}&quantity=1&referrer=https%3A%2F%2Fseleniquestudio.gumroad.com%2F`;

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
        {links.gumroad && (
          <Link className={styles.link} href={purchaseLink} target="_blank">
            {formatMessage({ id: "common.buy_now" })}
          </Link>
        )}

        <Link
          className={styles.seeAllButton}
          href={promptBookListPageRoute.getUrl(locale)}
        >
          See all Prompt Books
        </Link>

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
