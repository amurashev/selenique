"use client";

import { useIntl } from "react-intl";

import styles from "./page.module.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const IMAGES = [21, 27, 29, 37, 8, 47, 52, 56, 58, 21, 27, 29, 37, 8, 47, 52, 56, 58];

export default function ProductsPortfolioPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {IMAGES.map((item) => (
          <div key={item} className={styles.item}>
            <img
              className={styles.image}
              src={`/product/examples/${item}.webp`}
            />
          </div>
        ))}
      </main>
      <footer className={styles.footer}>
        <Button
          onClick={() => {
            window.location.href = "/obrabotka-foto-tovarov-dlya-marketpleysov#portfolio";
          }}
        >
          Вернуться на основной сайт
        </Button>
      </footer>
    </div>
  );
}
