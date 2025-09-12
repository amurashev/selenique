"use client";

import Link from "next/link";
import Image from "next/image";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";
import { homePage } from "@/constants/routes";

export default function LogoBox() {
  const { locale } = useIntl();
  const homePageUrl = homePage.getUrl(locale);
  return (
    <div className={styles.logoBox}>
      <div className={styles.mobileLogo}>
        <Link href={homePageUrl}>
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
        <Link href={homePageUrl}>
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
