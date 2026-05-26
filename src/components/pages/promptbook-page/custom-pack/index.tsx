"use client";

import React from "react";
import { useIntl } from "react-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./styles.module.css";

import { ChevronRight } from "@/components/sections/arrows";
import { PromptBook } from "@/components/types";
import PromptbookItem from "@/components/sections/promptbook-item";
import Link from "next/link";

export default function CustomPack({ pack }: { pack: PromptBook }) {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.box}>
      <div className={styles.image}>
        <PromptbookItem item={pack} />
      </div>
      <div className={styles.text}>
        <h2>Custom AI Prompt Packs for Your Niche</h2>

        <div>
          <p>
            Don&apos;t see a prompt pack that fits your niche? We create custom AI
            prompt packs tailored to your style, topic, and platform.
          </p>
          <p>
            Just send us a message — tell us what you need, and we&apos;ll put
            together a pack made specifically for you.
          </p>
        </div>

        <Link className={styles.link} href={pack.purchaseLink}>
        Request a custom pack
        </Link>
      </div>
    </div>
  );
}
