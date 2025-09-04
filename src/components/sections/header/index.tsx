"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import styles from "./styles.module.css";
import { productPageRoute, productPortfolioPageRoute } from "@/constants/routes";

const MENU = [
  {
    url: productPageRoute.getUrl(),
    label: "Обработка фото для e-commerce",
  },
  {
    url: productPortfolioPageRoute.getUrl({
      params: {
        type: "all",
      },
    }),
    label: "Портфолио",
  },
].map((item) => ({
  url: item.url,
  label: item.label,
}));

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.box}>
      <div className={styles.logoBox}>
        <div className={styles.mobileLogo}>
          <Link href="/">
            <Image
              src="/logo3.png"
              width={300}
              height={60}
              quality={100}
              alt=""
            />
          </Link>
        </div>
        <div className={styles.desktopLogo}>
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
      </div>
      <div className={styles.menuBox}>
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
      </div>
    </header>
  );
}
