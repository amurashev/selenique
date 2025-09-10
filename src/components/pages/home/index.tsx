"use client";

import Link from "next/link";
import { useIntl } from "react-intl";

import styles from "./page.module.css";
import Card from "./card";
import Header from "@/components/layout/header";
import { SERVICES } from "@/constants/services";

export default function HomePage() {
  const { formatMessage } = useIntl();
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h2>Наши услуги</h2>
        <div className={styles.items}>
          {SERVICES.map((item) => (
            <div key={item.url}>
              <Link href={item.url} locale={"ru"}>
                <Card
                  image={item.image}
                  title={formatMessage({ id: item.titleKey })}
                />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
