"use client";

import Link from "next/link";
import { useIntl } from "react-intl";

import styles from "./page.module.css";
import Card from "./card";
import { aiConsultationPageRoute, productPageRoute } from "@/constants/routes";
import Header from "@/components/sections/header";

export default function HomePage() {
  const { formatMessage } = useIntl();
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h2>Наши услуги</h2>
        <div className={styles.items}>
          <div>
            <Link href={productPageRoute.getUrl()} locale={"ru"}>
              <Card
                image="/product/bg2.webp"
                title={formatMessage({ id: "products.hero.title" })}
              />
            </Link>
          </div>
          {/* <div>
          <Link
            href={aiConsultationPageRoute.getUrl()}
            locale={"ru"}
          >
            <Card
              image="/product/bg2.webp"
              title={formatMessage({ id: "products.hero.title" })}
            />
          </Link>
        </div> */}
        </div>
      </main>
    </div>
  );
}
