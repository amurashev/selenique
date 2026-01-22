"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";
import Link from "next/link";

import { PromptBook } from "@/components/types";

import styles from "./styles.module.css";
import { promptsCategoryPageRoute } from "@/constants/routes";
import { PROMPT_CATEGORIES } from "@/constants/prompts";

export default function Categories({ data }: { data: PromptBook }) {
  const { formatMessage, locale } = useIntl();
  const { fileType, tags } = data;

  const supportedTags = tags.filter(tag => PROMPT_CATEGORIES.includes(tag))

  return (
    <div className={styles.list}>
      {supportedTags.map(item => (
        <Link href={promptsCategoryPageRoute.getUrl(locale, {
          params: {
            slug: item,
          }
        })} key={item} className={styles.item}>{item}</Link>
      ))}
    </div>

  );
}
