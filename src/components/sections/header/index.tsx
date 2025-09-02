"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import styles from "./styles.module.css";

const MENU = [{
  url: '/courses',
  label: 'Courses',
}, {
  url: '/packs',
  label: 'Packs',
}, {
  url: '/about',
  label: 'About',
}].map((item) => ({
  url: item.url,
  label: item.label,
}));

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.box}>
      <div className={styles.logoBox}>
        <Link href="/">
          <Image
            src="/logo3.png"
            width={500}
            height={100}
            quality={100}
            alt=""
          />
        </Link>
      </div>
      {/* <div className={styles.menuBox}>
        <ul className={styles.menu}>
          {MENU.map((item) => {
            const isActive = pathname === item.url;
            return (
              <li
                key={item.url}
                className={`${styles.menuItem} ${isActive ? styles.menuItemIsActive : ""}`}
              >
                <Link href={item.url} className={styles.link}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div> */}
    </header>
  );
}