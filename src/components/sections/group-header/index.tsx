"use client";

import Link from "next/link";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";

import { BaseRouteType, Route } from "@/utils/routing";
import { ChevronRight } from "@/components/ui/icons/chevron";

export default function GroupHeader({
  title,
  href,
  label,
  isWhite = false,
}: {
  title: string;
  href?: string;
  label?: string;
  isWhite?: boolean;
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.box}>
      <h2 className={isWhite ? styles.titleWhite : styles.title}>{title}</h2>

      {href && (
        <div className={styles.buttonBox}>
          <Link
            className={isWhite ? styles.seeAllWhite : styles.seeAll}
            href={href}
          >
            {label || formatMessage({ id: "common.see_all" })}
          </Link>
          <ChevronRight size={24} color={isWhite ? "#777777" : "#ffffff"} />
        </div>
      )}
    </div>
  );
}
