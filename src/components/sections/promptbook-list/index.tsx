"use client";

import PromptbookItem from "@/components/sections/promptbook-item";
import { getPromptBookData } from "@/constants/promptbooks/utils";

import styles from "./styles.module.css";

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
