"use client";

import { useIntl } from "react-intl";

import Header from "@/components/layout/header";
import Photos from "./sections/photos";

import styles from "./page.module.css";
import Tabs from "@/components/ui/tabs";

const TABS = [
  {
    index: "women",
    link: "/models/women",
    labelKey: "common.models.sex.women",
  },
  {
    index: "men",
    link: "/models/men",
    labelKey: "common.models.sex.men",
  },
]

export default function ModelsPage({ type }: { type: "women" | "men" }) {
  const { formatMessage } = useIntl();
  
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Tabs
          activeIndex={type}
          items={TABS.map(item => ({
            ...item,
            label: formatMessage({ id: item.labelKey })
          }))}
        />
        <Photos type={type} />
      </main>
    </div>
  );
}
