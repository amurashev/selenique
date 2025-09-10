"use client";

import Link from "next/link";
import { useIntl } from "react-intl";

import styles from "./page.module.css";
import Card from "./card";
import Header from "@/components/layout/header";
import { SERVICES } from "@/constants/services";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h2>{formatMessage({ id: "header.menu.services" })}</h2>
        <div className={styles.items}>
          {SERVICES.map((item) => (
            <div key={item.url}>
              <Link href={item.url}>
                <Card
                  image={item.image}
                  title={formatMessage({ id: item.titleKey })}
                />
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
