"use client";

import React from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";

const NEAR_START_DATE = "2025-10-27";

export const NearStart: React.FC = () => {
  const { formatMessage } = useIntl();

  const date = new Date(NEAR_START_DATE);
  const options = { day: "numeric" as const, month: "long" as const };
  const formatted = new Intl.DateTimeFormat("ru-RU", options).format(date);
  const capitalized = formatted.charAt(0).toUpperCase() + formatted.slice(1);

  return (
    <div className={styles.box}>
      {formatMessage({ id: "intensive_neurovideo.near_start" })}:{" "}
      <b>{capitalized}</b>
    </div>
  );
};

export default NearStart;
