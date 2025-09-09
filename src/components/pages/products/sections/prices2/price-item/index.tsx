"use client";

import React, { useState } from "react";

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
  price: number;
  text: string;
  priceUnit: string;
  images: string[];
  imageSrc?: string;
  isRight?: boolean;
}> = ({ title, price,priceUnit, images, text = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.item}>
      <button className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.title}>{title}</span>
        {price === 0 ? <span className={styles.price}>бесплатно</span> : <span className={styles.price}>{price}руб./{priceUnit}</span>}

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
        </div>
      )}
    </div>
  );
};

export default PriceItem;
