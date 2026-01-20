"use client";

import { useIntl } from "react-intl";
import Link from "next/link";

import styles from "./styles.module.css";

import { ChevronLeft } from "@/components/sections/arrows";
import { BaseRouteType, Route } from "@/utils/routing";

export default function ShortHeader({ route, title }: { route: Route<BaseRouteType>, title: string}) {
  const { formatMessage, locale } = useIntl();

  return (
      <div className={styles.backBox}>
        <Link href={route.getUrl(locale)}  className={styles.link}>
          <ChevronLeft size={28} color="#ffffff" />
          <span>{formatMessage({ id: "common.back" })}</span>
        </Link>
        <div className={styles.title}>{title}</div>
        <div className={styles.null}>&nbsp;</div>
      </div>
  );
}
