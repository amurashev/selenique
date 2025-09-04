"use client";

import Link from "next/link";
import { useIntl } from "react-intl";

import Header from "@/components/sections/header";
import Photos from "./sections/photos";

import styles from "./page.module.css";
import Tabs from "@/components/ui/tabs";

export default function ModelsPage({ type }: { type: "woman" | "man" }) {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Tabs
          activeIndex={type}
          items={[
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
          ]}
        />
        <Photos type={type} />
      </main>
    </div>
  );
}
