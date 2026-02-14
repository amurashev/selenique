"use client";

import Link from "next/link";
import { useIntl } from "react-intl";

import styles from "./page.module.css";
import Card from "./card";
import Header from "@/components/layout/header";
import { SERVICES } from "@/constants/services";
import Footer from "@/components/layout/footer";
import { promptBookListPageRoute } from "@/constants/routes";


export default function HomePage() {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        {locale === "ru" && (
          <>
            <h2>{formatMessage({ id: "header.menu.services" })}</h2>
            <div className={styles.items}>
              {SERVICES.map((item) => (
                <div key={item.titleKey} className={styles.item}>
                  <Link href={item.route.getUrl(locale)}>
                    <Card
                      image={item.image}
                      title={formatMessage({ id: item.titleKey })}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}

        {locale !== "ru" && (
          <>
            <h1>{formatMessage({ id: "home.prompt_books.title" })}</h1>
            <div className={styles.buttonBox}>
              <Link
                className={styles.linkSecondary}
                href={promptBookListPageRoute.getUrl(locale)}
              >
                {formatMessage({ id: "home.prompt_books.see_all" })}
              </Link>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
