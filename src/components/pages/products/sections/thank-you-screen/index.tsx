"use client";

import React, { useState } from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";
import { Button } from "@/components/ui/button";

const ThankYouScreen = ({ onClose }: { onClose: () => void }) => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        {formatMessage({ id: "products.form_success.title" })}
      </div>
      <div className={styles.text}>
        {formatMessage({ id: "products.form_success.text" })}
      </div>
      <div className={styles.hint}>
        {formatMessage({ id: "products.form_success.hint" })}
      </div>

      <div className={styles.buttonBox}>
      <Button onClick={onClose}>Вернуться на сайт</Button></div>
    </div>
  );
};

export default ThankYouScreen;
