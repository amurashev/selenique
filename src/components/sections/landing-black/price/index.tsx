"use client";

import Link from "next/link";
import { useIntl } from "react-intl";
import { useMetrica } from "next-yandex-metrica";

import { PriceWithUnit } from "@/components/ui/price";
import { PriceType } from "@/components/types";

import styles from "./styles.module.css";

export default function Price({
  purchaseLink,
  boostyLink,
  price,
  oldPrice,
  summary,
  discount,
  // onBuyClick
}: {
  purchaseLink: string;
  boostyLink?: string;
  price: PriceType;
  oldPrice: PriceType;
  summary?: string;
  discount: number
  // onBuyClick: () => void
}) {
  const { formatMessage, locale } = useIntl();
  const { reachGoal } = useMetrica();

  const showRussiaHints = ["en", "ru"].includes(locale);

  // Текущая дата (без времени, чтобы не было дробных дней)
  // const today = new Date();
  // today.setHours(0, 0, 0, 0);

  // Разница в миллисекундах
  // const diff = Number(targetDate) - Number(today);

  // Переводим миллисекунды в дни
  const daysLeft = 2; // Math.ceil(diff / (1000 * 60 * 60 * 24));

  return (
    <div>
      <div className={styles.price}>
        <div>{formatMessage({ id: "common.todays_price" })}:</div>
        <div className={styles.priceInner}>
          <div className={styles.priceValue}>
            <PriceWithUnit value={price} />
          </div>
          <div className={styles.basePrice}>
            <PriceWithUnit value={oldPrice} />
          </div>
        </div>
        <div className={styles.discountInfo}>
          {formatMessage({ id: "common.discount" }, { discount })}
        </div>
        {/* <div className={styles.discountInfo}>
          {discount}% off • Sale ends in {daysLeft} days
        </div> */}
      </div>

      <div className={styles.links}>
        <Link
          className={styles.link}
          href={purchaseLink}
          target="_blank"
          // onClick={() => {
          //   reachGoal("virtualInfluencePage_continue-Click");
          // }}
        >
          {formatMessage({ id: "common.buy_now" })}
        </Link>

        {boostyLink && (
          <Link
            className={styles.link}
            href={boostyLink}
            target="_blank"
            // onClick={() => {
            //   reachGoal("virtualInfluencePage_continueRussia-Click");
            // }}
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

      {summary && (
        <p className={styles.summary}>
          {summary}
        </p>
      )}
    </div>
  );
}
