"use client";

import { useIntl } from "react-intl";
import Link from "next/link";

import styles from "./page.module.css";

import { homePage } from "@/constants/routes";
import { getGuidesList, getGuideData } from "@/constants/guides/utils";
import GuideItem from "@/components/sections/guide-item";
import BasePageLayout from "@/components/layout/base-page";

export default function GuidesListPage() {
  const { formatMessage, locale } = useIntl();

  const guidesListId = getGuidesList(locale);
  const guidesList = guidesListId.map((item) =>
    getGuideData(item.slug, locale)
  );

  return (
    <BasePageLayout
      route={homePage}
      title={formatMessage({ id: "guides.title_short" })}
    >
      <h1>{formatMessage({ id: "guides.title" })}</h1>
      <p>{formatMessage({ id: "guides.text" })}</p>

      <div className={styles.list}>
        {guidesList.map((item) => {
          return (
            <div key={item.slug} className={styles.item}>
              <GuideItem item={item} />
            </div>
          );
        })}
      </div>
    </BasePageLayout>
  );
}
