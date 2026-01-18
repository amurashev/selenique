"use client";

import { PROMTBOOKS } from "@/constants/promptbooks";

import PromptbookItem from "@/components/sections/promptbook-item2";

import styles from "./styles.module.css";

export default function PromptbookList({ list }: { list: string[]}) {

  return (
    <div className={styles.list}>
      {list.map((slug) => {
        const item = {
          ...PROMTBOOKS[slug],
          slug,
        };
        return <PromptbookItem key={slug} item={item} />;
      })}
    </div>
  );
}
