"use client";

import styles from "./styles.module.css";
import { MEN, WOMEN } from "@/constants/models";

export default function Photos({
  id,
  type,
}: {
  id: string;
  type: "woman" | "man";
}) {
  const finalData = type === "woman" ? WOMEN : MEN;
  const urlType = type === "woman" ? "woman" : "man";

  const modelData = finalData.find((item) => Number(item.id) === Number(id));
  const images =
    modelData?.photos && modelData.photos?.length ? modelData.photos : [];

  return (
    <div className={styles.sections}>
      {images.map((item) => {
        return (
          <div key={item} className={styles.item}>
            <img
              className={styles.image}
              src={`/models/${urlType}/${id}/${item}`}
            />
          </div>
        );
      })}
    </div>
  );
}
