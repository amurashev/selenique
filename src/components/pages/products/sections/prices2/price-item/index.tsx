"use client";

import React, { useState } from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

import { PriceWithUnit } from "@/components/ui/price";

import styles from "./styles.module.css";

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#86868b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};

const PriceItem: React.FC<{
  title: string;
  price: Record<string, number>;
  text: string;
  link?: string;
  priceUnit: string;
  images: string[];
  imageSrc?: string;
  isRight?: boolean;
}> = ({ title, link, price, priceUnit, images, text = "" }) => {
  const { formatMessage } = useIntl();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.item}>
      <button className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <h3 className={styles.title}>{title}</h3>
        {price["en"] === 0 ? (
          <span className={styles.price}>
            {formatMessage({ id: "common.prices.free" })}
          </span>
        ) : (
          <span className={styles.price}>
            <PriceWithUnit value={price} unit={priceUnit} isFrom />
          </span>
        )}

        <span className={`${styles.icon} ${isOpen ? styles.open : ""}`}>
          <Arrow />
        </span>
      </button>
      {isOpen && (
        <div className={styles.body}>
          {text}
          <div className={styles.images}>
            {images.map((image) => (
              <div
                key={image}
                className={`${styles.imageBox} ${
                  images.length === 1 ? styles.imageBox1 : ""
                }`}
              >
                <img className={styles.image} src={image} />
              </div>
            ))}
          </div>
          {link && (
            <div className={styles.linkBox}>
              <Link href={link} className={styles.link}>
                {formatMessage({ id: "products.prices.see_more" })}
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PriceItem;
