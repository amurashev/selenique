"use client";

import { useIntl } from "react-intl";

import styles from "./page.module.css";

import { promptBookListPageRoute } from "@/constants/routes";
import PromptbookList from "@/components/sections/promptbook-list";
import ShortHeader from "@/components/layout/short-header";
import Footer from "@/components/layout/footer";
import {
  getPromptModelShortLabel,
  getPromptModelH1,
  getPromptModelShortDescription,
  getPromptModelText,
} from "@/constants/prompts";
import { PromptModels } from "@/components/types";

export default function PromptsModelPage({ 
  slug,
  prompts 
}: { slug: PromptModels, prompts: string[] },) {
  const { formatMessage, locale } = useIntl();

  return (
    <>
      <div className={styles.page}>
        <ShortHeader
          route={promptBookListPageRoute}
          title={`${formatMessage({ id: getPromptModelShortLabel(slug) })}`}
        />
        <main className={styles.main}>
          <h1>{formatMessage({ id: getPromptModelH1(slug) })}</h1>
          <p>{formatMessage({ id: getPromptModelShortDescription(slug) })}</p>

          <PromptbookList
            list={prompts}
          />

          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: formatMessage({ id: getPromptModelText(slug) }),
            }}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
