"use client";

import Link from "next/link";

import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.box}>
      <div className={styles.menuBox}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href={"https://www.behance.net/selenamurasheva"} className={styles.link}>
              Behance
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href={"https://www.instagram.com/theselenique/"} className={styles.link}>
              Instagram
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href={"https://www.linkedin.com/in/alena-murasheva-578ba235a/"} className={styles.link}>
              LinkidIn
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
