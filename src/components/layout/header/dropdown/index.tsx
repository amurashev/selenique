"use client";

import styles from "./styles.module.css";

export default function Dropdown({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownInner}>{children}</div>
    </div>
  );
}
