"use client";

import Header from "@/components/sections/header";
import Photos from "./sections/photos";

import styles from "./page.module.css";
import Tabs from "@/components/ui/tabs";

const TABS = [
  {
    index: "woman",
    link: "/models/woman",
    label: "Женщины",
  },
  {
    index: "man",
    link: "/models/man",
    label: "Мужчины",
  },
]

export default function ModelsPage({ type }: { type: "woman" | "man" }) {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Tabs
          activeIndex={type}
          items={TABS}
        />
        <Photos type={type} />
      </main>
    </div>
  );
}
