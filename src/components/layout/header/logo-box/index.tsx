"use client";

import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

export default function LogoBox() {
  return (
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
  );
}
