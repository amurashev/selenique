"use client";

import { useIntl } from "react-intl";

import styles from "./page.module.css";

export default function PolicyPage() {
  const first = 3100;
  const current = 3695;
  const target = 5000;

  const left = target - current;
  const realTarget = target - first;

  const added = current - first;
  const progress = added * 100 / realTarget;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
        <h4 className={styles.title}>Followers left:</h4>
        <div className={styles.amount}>{left}</div>
        </div>
        <div className={styles.progressInfo}>
          <span className={styles.percent}><strong>{progress.toFixed(0)}%</strong> of the target</span>
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        {/* <div className={styles.progressMarks}>
          <span className={styles.mark}>{first}</span>
          <span className={styles.mark}>{target}</span>
        </div> */}
      </div>
    </div>
  );
}
