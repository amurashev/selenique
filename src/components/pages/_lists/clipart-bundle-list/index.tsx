"use client";

import { useIntl } from "react-intl";
import Link from "next/link";

import styles from "./page.module.css";

import { homePage } from "@/constants/routes";
import BasePageLayout from "@/components/layout/base-page";

import { ClipartBundle } from "@/content/clipart-bundle";
import ClipartBundleItem from "@/components/sections/clipart-bundle";

export default function ClipartBundleListPage({
  clipartBundles,
}: {
  clipartBundles: ClipartBundle[];
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <BasePageLayout
      route={homePage}
      title={formatMessage({ id: "clipart.title_short" })}
      seoContent={formatMessage({ id: "clipart.page_text" })}
    >
      <h1>{formatMessage({ id: "clipart.title" })}</h1>
      <p>{formatMessage({ id: "clipart.text" })}</p>

      <div className={styles.list}>
        {clipartBundles.map((item) => {
          return (
            <div key={item.id} className={styles.item}>
              <ClipartBundleItem item={item} />
            </div>
          );
        })}
      </div>
    </BasePageLayout>
  );
}
