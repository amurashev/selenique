"use client";

import { useIntl } from "react-intl";

import styles from "./styles.module.css";

const WOMEN = [
  {
    index: 1,
    name: "Имя",
  },
  {
    index: 2,
    name: "Имя",
  },
  {
    index: 3,
    name: "Имя",
  },
  {
    index: 4,
    name: "Имя",
  },
  {
    index: 5,
    name: "Имя",
  },
  {
    index: 6,
    name: "Имя",
  },
  {
    index: 7,
    name: "Имя",
  },
  {
    index: 8,
    name: "Имя",
  },
];

const MEN = [
  {
    index: 1,
    name: "Имя",
  },
  {
    index: 2,
    name: "Имя",
  },
  {
    index: 3,
    name: "Имя",
  },
  {
    index: 4,
    name: "Имя",
  },
  {
    index: 5,
    name: "Имя",
  },
  {
    index: 6,
    name: "Имя",
  },
  {
    index: 7,
    name: "Имя",
  },
];

export default function Photos({ type }: { type: "woman" | "man" }) {
  const { formatMessage } = useIntl();

  const finalData = type === "woman" ? WOMEN : MEN;
  const urlType = type === "woman" ? "woman" : "man";

  return (
    <div className={styles.sections}>
      {finalData.map((item) => (
        <div key={item.index} className={styles.item}>
          <img
            className={styles.image}
            src={`/models/${urlType}/${item.index}.webp`}
          />
          <strong className={styles.name}>{item.name}</strong>
        </div>
      ))}
    </div>
  );
}
