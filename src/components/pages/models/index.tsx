"use client";

import Link from "next/link";
import { useIntl } from "react-intl";

import styles from "./page.module.css";
import Header from "@/components/sections/header";

export default function ModelsPage() {
  const { formatMessage } = useIntl();
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>ModelsPage</main>
    </div>
  );
}
