"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";
import Link from "next/link";

import { Guide, PromptBook } from "@/components/types";

import styles from "./styles.module.css";

export default function Advantages({ data }: { data: PromptBook }) {
  const { formatMessage, locale } = useIntl();
  const { fileType, type } = data;
  const pack = (data as PromptBook).pack || [];
  const packsNumber = pack.length || 1;

  return (
    <ul className={styles.advantages}>
      {fileType && fileType === "link" ? (
        <li>
          <strong>
            {formatMessage({ id: "prompt_books.file_type" })}:
          </strong>{" "}
          {formatMessage({ id: "prompt_books.link_to_notion" })}
        </li>
      ) : (
        <li>
          <strong>
            {formatMessage({ id: "prompt_books.file_type" })}:
          </strong>{" "}
          {packsNumber} PDF
        </li>
      )}
      {type !== "guide" && (
        <li>
          <strong>
            {formatMessage({ id: "prompt_books.best_for" })}:
          </strong>{" "}
          Gemini, Nano banana
        </li>
      )}
      {(data as PromptBook).number && (
        <li>
          <strong>
            {formatMessage({ id: "prompt_books.number" })}:{" "}
          </strong>
          {(data as PromptBook).number}
        </li>
      )}
    </ul>

  );
}
