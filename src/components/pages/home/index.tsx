"use client";

import Link from "next/link";
import { useIntl } from "react-intl";

import styles from "./page.module.css";
import Card from "./card";
import { aiConsultationPageRoute, productPageRoute } from "@/constants/routes";

export default function HomePage() {
  const { formatMessage } = useIntl();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <Link
            href={productPageRoute.getUrl()}
            locale={"ru"}
          >
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
      </main>
    </div>
  );
}
