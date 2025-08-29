"use client";

import { useIntl } from "react-intl";

import styles from "./page.module.css";
import Link from "next/link";

export default function HomePage() {
  const { formatMessage } = useIntl();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <Link
            href={"/ru/obrabotka-foto-tovarov-dlya-marketpleysov"}
            locale={"ru"}
          >
            <div>{formatMessage({ id: "home.product.title" })}</div>
          </Link>
        </div>
      </main>
    </div>
  );
}
