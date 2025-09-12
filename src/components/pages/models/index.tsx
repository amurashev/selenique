"use client";

import { useIntl } from "react-intl";

import Header from "@/components/layout/header";
import Photos from "./sections/photos";

import styles from "./page.module.css";
import Tabs from "@/components/ui/tabs";
import { modelsPageRoute } from "@/constants/routes";
import Footer from "@/components/layout/footer";

const TABS = [
  {
    index: "women",
    labelKey: "common.models.sex.women",
  },
  {
    index: "men",
    labelKey: "common.models.sex.men",
  },
]

export default function ModelsPage({ type }: { type: "women" | "men" }) {
  const { formatMessage, locale } = useIntl();
  
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Tabs
          activeIndex={type}
          items={TABS.map(item => ({
            ...item,
            link: modelsPageRoute.getUrl(locale, {
              params: {
                type: item.index,
              }
            }),
            label: formatMessage({ id: item.labelKey })
          }))}
        />
        <Photos type={type} />
      </main>
      <Footer />
    </div>
  );
}
