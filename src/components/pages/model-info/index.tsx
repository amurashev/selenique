"use client";

import Header from "@/components/layout/header";
import { MEN, WOMEN } from "@/constants/models";

import styles from "./page.module.css";
import Photos from "./sections/photos";

export default function ModelInfoPage({
  id,
  type,
}: {
  id: string;
  type: "woman" | "man";
}) {
  const finalData = type === "woman" ? WOMEN : MEN;
  const urlType = type === "woman" ? "woman" : "man";

  const modelData = finalData.find(item => Number(item.id) === Number(id))

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div>

        <h2 className={styles.header}>{modelData?.name}</h2>
        </div>
       
        <Photos id={id} type={type} />
      </main>
    </div>
  );
}
