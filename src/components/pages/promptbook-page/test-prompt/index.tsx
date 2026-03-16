"use client";

import React from "react";
import { useIntl } from "react-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";
import { COMMISSION } from "@/constants/affiliate";

import { affiliatePageRoute } from "@/constants/routes";
import { copyText } from "@/utils/copy";

export default function TestPrompt({ data }: { data: PromptBook }) {
  const { id, testPrompt, number } = data;
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.box}>
      <h2 className={styles.title}>
        {formatMessage({ id: "prompt_books.test_prompt.title" })}
      </h2>

      <p className="">
        {formatMessage({ id: "prompt_books.test_prompt.text" }, { number })}
      </p>

      <div className={styles.promptBox}>
        <div className={styles.imageBox}>
          <img
            className={styles.image}
            src={`/promptbooks/${id}/test.jpg`}
            alt="Prompt book test image"
          />
        </div>

        <div className={styles.textareaBox}>
          <p className={styles.textarea}>{testPrompt}</p>
          <textarea
            id="prompt"
            defaultValue={testPrompt}
            className={styles.textareaHidden}
          />
          <button
            onClick={() => copyText("prompt")}
            className={styles.copyButton}
          >
            {formatMessage({ id: "ai_avatar.generator.builder.cta" })}
          </button>
        </div>
      </div>
    </div>
  );
}
