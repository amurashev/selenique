"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../layout/section";

import styles from "./styles.module.css";

export const NearStart: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.box}>
      {formatMessage({ id: "intensive_neurovideo.near_start" })}:{" "}
      <b>6 Октября</b>
    </div>
  );
};

export default NearStart;
