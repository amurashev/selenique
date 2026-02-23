"use client";

import PromptbookItem from "@/components/sections/promptbook-item";

import styles from "./styles.module.css";
import { PromptBook } from "@/components/types";

export default function PromptbookList({ list }: { list: PromptBook[]}) {

  return (
    <div className={styles.list}>
      {list.map((item) => {
        return <PromptbookItem key={item.id} item={item} />;
      })}
    </div>
  );
}
