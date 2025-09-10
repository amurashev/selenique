"use client";

import React, { useState } from "react";

import styles from "./styles.module.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  price: number;
  text: string;
  link?: string;
  priceUnit: string;
  images: string[];
  imageSrc?: string;
  isRight?: boolean;
}> = ({ title, link, price, priceUnit, images, text = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.item}>
      <button className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <h3 className={styles.title}>{title}</h3>
        {price === 0 ? (
          <span className={styles.price}>бесплатно</span>
        ) : (
          <span className={styles.price}>
            от {price}руб./{priceUnit}
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
            <div className={styles.linkBox}><Link href={link}>Подробнее об услуге</Link></div>
          )}
        </div>
      )}
    </div>
  );
};

export default PriceItem;
