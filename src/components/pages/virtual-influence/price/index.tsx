"use client";

import Link from "next/link";
import { useIntl } from "react-intl";

import { PriceWithUnit } from "@/components/ui/price";

import styles from "./styles.module.css";

export default function Price(
  { purchaseLink, boostyLink }: { purchaseLink: string, boostyLink: string }
) {
  const { formatMessage, locale } = useIntl();

  const price = { en: 67, ru: 4990 }
  const oldPrice = { en: 79, ru: 6990 }
  const discount = 20;

  // Текущая дата (без времени, чтобы не было дробных дней)
  // const today = new Date();
  // today.setHours(0, 0, 0, 0);

  // Разница в миллисекундах
  // const diff = Number(targetDate) - Number(today);

  // Переводим миллисекунды в дни
  const daysLeft = 2// Math.ceil(diff / (1000 * 60 * 60 * 24));

  return (
    <div>
      <div className={styles.price}>
        <div>{formatMessage({ id: "virtual-influence.price.title" })}:</div>
        <div className={styles.priceInner}>
          <div className={styles.priceValue}>
            <PriceWithUnit value={price} />
          </div>
          <div className={styles.basePrice}>
            <PriceWithUnit value={oldPrice} />
          </div>
        </div>
        {/* <div className={styles.discountInfo}>
          {discount}% off • Sale ends in {daysLeft} days
        </div> */}
      </div>

      <div className={styles.links}>
        <Link className={styles.link} href={purchaseLink} target="_blank">
          {formatMessage({ id: "common.buy_now" })}
        </Link>

        <Link className={styles.link} href={boostyLink} target="_blank">
          {formatMessage({ id: "common.buy_now_russia" })}
        </Link>
      </div>

      <p className={styles.summary}>
        {formatMessage({ id: `virtual-influence.section9.text1` })}
      </p>
    </div>
  );
}
