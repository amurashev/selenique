"use client";

import Link from "next/link";
import { useIntl } from "react-intl";

import styles from "./page.module.css";
import Card from "./card";

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
            <Card
              image="/product/bg2.webp"
              title={formatMessage({ id: "products.hero.title" })}
            />
            <div></div>
          </Link>
        </div>
      </main>
    </div>
  );
}
