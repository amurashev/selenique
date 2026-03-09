"use client";

import { useIntl } from "react-intl";
import Link from "next/link";

import { guidePageRoute } from "@/constants/routes";

import styles from "./styles.module.css";
import { useState } from "react";

export default function PromptBuilder() {
  const { formatMessage, locale } = useIntl();
  const [gender, setGender] = useState()
  const [ethnicity, setEthnicity] = useState()
  const [hairColor, setHairColor] = useState()

  return (
    <div className={styles.box}>
      <p>{formatMessage({ id: "ai_avatar.section3.text" })}</p>
      <div className={styles.prompts}>
        <div>
          <h4>{formatMessage({ id: "ai_avatar.section3.item1.title" })}</h4>
          <p className={styles.prompt}>
            {formatMessage({ id: "ai_avatar.section3.item1.text" })}
          </p>
        </div>
        <div>
          <h4>{formatMessage({ id: "ai_avatar.section3.item2.title" })}</h4>
          <p className={styles.prompt}>
            {formatMessage({ id: "ai_avatar.section3.item2.text" })}
          </p>
        </div>
      </div>
    </div>
  );
}
