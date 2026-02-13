"use client";

import PromptbookItem from "@/components/sections/promptbook-item";

import styles from "./styles.module.css";
import { getPromptBookData } from "@/constants/promptbooks/utils";

export default function PromptbookList({ list }: { list: string[]}) {

  return (
    <div className={styles.list}>
      {list.map((slug) => {
        const item = getPromptBookData(slug)
        return <PromptbookItem key={slug} item={item} />;
      })}
    </div>
  );
}
