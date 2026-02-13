"use client";

import { useIntl } from "react-intl";
import Link from "next/link";

import styles from "./page.module.css";

import { homePage } from "@/constants/routes";
import ShortHeader from "@/components/layout/short-header";
import Footer from "@/components/layout/footer";
import { getGuidesList, getGuideData } from "@/constants/guides/utils";
import GuideItem from "@/components/sections/guide-item";

export default function GuidesListPage() {
  const { formatMessage, locale } = useIntl();

  const guidesListId = getGuidesList(locale)
  const guidesList = guidesListId.map(item => getGuideData(item.slug, locale))

  return (
    <div className={styles.page}>
      <ShortHeader
        route={homePage}
        title={formatMessage({ id: "guides.title_short" })}
      />
      <main className={styles.main}>
        <h1>{formatMessage({ id: "guides.title" })}</h1>
        <p>{formatMessage({ id: "guides.text" })}</p>

        <div className={styles.list}>
          {guidesList.map(item => {
            return (
              <div key={item.slug} className={styles.item}>
                <GuideItem item={item} />
              </div>
            )
          })}
        </div>

        <div className={styles.buttonBox}>
          <Link className={styles.seeAll} href={homePage.getUrl(locale)}>
            {formatMessage({ id: "home.guides.see_all" })}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
