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
}: {
  title: string;
  href?: string;
  label?: string;
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.box}>
      <h3>{title}</h3>

      {href && (
        <div className={styles.buttonBox}>
          <Link className={styles.seeAll} href={href}>
            {label || formatMessage({ id: "common.see_all" })}
          </Link>
          <ChevronRight size={24} />
        </div>
      )}
    </div>
  );
}
