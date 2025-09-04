"use client";

import Link from "next/link";

import styles from "./styles.module.css";

export default function Tabs({
  items,
  activeIndex,
}: {
  items: { index: string; label: string; link: string }[];
  activeIndex: string;
}) {
  return (
    <div className={styles.tabs}>
      {items.map((item) => (
        <Link key={item.index} href={item.link}>
          <div
            className={`${styles.tab} ${
              item.index === activeIndex ? styles.active : ""
            }`}
          >
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  );
}
