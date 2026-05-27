"use client";

import React from "react";
import { useIntl } from "react-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";

import { PromptBook } from "@/components/types";
import PromptbookItem from "@/components/sections/promptbook-item";
import { ButtonLink } from "@/components/ui/button";

export default function CustomPack({ pack }: { pack: PromptBook }) {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.box}>
      <div className={styles.image}>
        <PromptbookItem item={pack} />
      </div>
      <div className={styles.text}>
        <h2>{formatMessage({ id: "prompt_books.custom_pack.title" })}</h2>

        <div>
          <p>{formatMessage({ id: "prompt_books.custom_pack.text1" })}</p>
          <p>{formatMessage({ id: "prompt_books.custom_pack.text2" })}</p>
        </div>

        <ButtonLink href={pack.purchaseLink} variation="secondary">
          {formatMessage({ id: "prompt_books.custom_pack.cta" })}
        </ButtonLink>
      </div>
    </div>
  );
}
