"use client";

import { useIntl } from "react-intl";

import styles from "./page.module.css";

import { promptBookListPageRoute } from "@/constants/routes";
import PromptbookList from "@/components/sections/promptbook-list";
import BasePageLayout from "@/components/layout/base-page";
import {
  getPromptCategoryShortLabel,
  getPromptCategoryH1,
  getPromptCategoryShortDescription,
  getPromptCategoryText,
} from "@/constants/prompts";
import { PromptCategories } from "@/components/types";

export default function PromptsCategoryPage({
  slug,
  prompts,
}: {
  slug: PromptCategories;
  prompts: string[];
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <BasePageLayout
      route={promptBookListPageRoute}
      title={formatMessage({ id: getPromptCategoryShortLabel(slug) })}
      seoContent={formatMessage({ id: getPromptCategoryText(slug) })}
    >
      <h1>{formatMessage({ id: getPromptCategoryH1(slug) })}</h1>
      <p>{formatMessage({ id: getPromptCategoryShortDescription(slug) })}</p>

      <PromptbookList list={prompts} />
    </BasePageLayout>
  );
}
