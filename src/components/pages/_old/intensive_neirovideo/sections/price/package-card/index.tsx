"use client";

import React from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";

import { PriceWithUnit } from "@/components/ui/price";
import { PriceType } from "@/components/types";
import ItemsList from "@/components/sections/items-list";
import Link from "next/link";
import { TELEGRAM_LINK } from "@/constants/contacts";

const cardStyles = {
  basic: styles.card,
  pro: styles.cardPro,
  vip: styles.cardVip,
}


const buttonStyles = {
  basic: styles.button,
  pro: styles.buttonPro,
  vip: styles.buttonVip,
}

 const PackageCard = ({
  title,
  text,
  price,
  result,
  advantages = [],
  type,
}: {
  title: string;
  text: string;
  result: string;
  price: PriceType;
  advantages: string[];
  type: "basic" | "pro" | "vip"
}) => {
  const { formatMessage } = useIntl();
  return (
    <div className={cardStyles[type]}>
      <div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.price}>
        <PriceWithUnit value={price} />
      </div>

      <div className={styles.advantages}>
        <ItemsList
          type="normal"
          items={advantages.map((item) => formatMessage({ id: item }))}
        />
      </div>

      <div className={styles.result}>
        <b>{formatMessage({ id: "intensive_neurovideo.prices.result" })}</b>
        {": "}
        {result}
      </div>

      <div className={styles.buttonBox}>
        <Link href={TELEGRAM_LINK} target="_blank" className={buttonStyles[type]}>
          {formatMessage({ id: "intensive_neurovideo.prices.contact" })}
        </Link>
      </div>
    </div>
  );
};

export default PackageCard