"use client";

import Link from "next/link";
import { useIntl } from "react-intl";

import Header from "@/components/sections/header";
import Photos from "./sections/photos";

import styles from "./page.module.css";

export default function ModelsPage({ type }: { type: "woman" | "man" }) {
  const { formatMessage } = useIntl();
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.tabs}>
          <Link href="/models/woman">
            <div
              className={`${styles.tab} ${
                type === "woman" ? styles.active : ""
              }`}
            >
              Женщины
            </div>
          </Link>
          <Link href="/models/man">
            <div  className={`${styles.tab} ${
                type === "man" ? styles.active : ""
              }`}>Мужчины</div>
          </Link>
        </div>
        <Photos type={type} />
      </main>
    </div>
  );
}
