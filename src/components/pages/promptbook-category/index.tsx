"use client";

import { useIntl } from "react-intl";

import styles from "./page.module.css";

import { promptBookListPageRoute } from "@/constants/routes";
import PromptbookList from "@/components/sections/promptbook-list";
import ShortHeader from "@/components/sections/short-header";
import { getPromptCategoryShortLabel, getPromptCategoryH1, getPromptCategoryShortDescription, getPromptCategoryText } from "@/constants/prompts";
import { PromptCategories } from "@/components/types";

export default function PromptsCategoryPage({ slug, prompts }: { slug: PromptCategories, prompts: string[] },) {
  const { formatMessage, locale } = useIntl();

  return (
    <>
      <div className={styles.page}>
        <ShortHeader
          route={promptBookListPageRoute}
          title={`${formatMessage({ id: getPromptCategoryShortLabel(slug) })}`}
        />
        <main className={styles.main}>
          <h1>{formatMessage({ id: getPromptCategoryH1(slug) })}</h1>
          <p>{formatMessage({ id: getPromptCategoryShortDescription(slug) })}</p>

          <PromptbookList
            list={prompts}
          />

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: formatMessage({ id: getPromptCategoryText(slug) }),
            }}
          />
        </main>
      </div>
    </>
  );
}
