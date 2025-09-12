"use client";

import { useIntl } from "react-intl";

import styles from "./styles.module.css";
import Link from "next/link";
import { MEN, WOMEN } from "@/constants/models";

export default function Photos({ type }: { type: "women" | "men" }) {
  const { formatMessage } = useIntl();

  const finalData = type === "women" ? WOMEN : MEN;
  const urlType = type === "women" ? "women" : "men";

  return (
    <div className={styles.sections}>
      {finalData.map((item) => {
        const firstImage =
          item.photos && item.photos.length ? item.photos[0] : "1.webp";
        return (
          <Link
            key={item.index}
            className={styles.item}
            href={`/models/${urlType}/${item.id}`}
          >
            <img
              className={styles.image}
              src={`/models/${urlType}/${item.id}/${firstImage}`}
            />
            {/* <strong className={styles.name}>{item.name}</strong> */}
          </Link>
        );
      })}
    </div>
  );
}
