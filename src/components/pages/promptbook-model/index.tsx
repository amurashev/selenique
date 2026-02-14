"use client";

import { useIntl } from "react-intl";

import styles from "./page.module.css";

import { promptBookListPageRoute } from "@/constants/routes";
import PromptbookList from "@/components/sections/promptbook-list";
import {
  getPromptModelShortLabel,
  getPromptModelH1,
  getPromptModelShortDescription,
  getPromptModelText,
} from "@/constants/prompts";
import { PromptModels } from "@/components/types";
import BasePageLayout from "@/components/layout/base-page";

export default function PromptsModelPage({
  slug,
  prompts,
}: {
  slug: PromptModels;
  prompts: string[];
}) {
  const { formatMessage, locale } = useIntl();

  return (
    <BasePageLayout
      route={promptBookListPageRoute}
      title={formatMessage({ id: getPromptModelShortLabel(slug) })}
      seoContent={formatMessage({ id: getPromptModelText(slug) })}
    >
      <h1>{formatMessage({ id: getPromptModelH1(slug) })}</h1>
      <p>{formatMessage({ id: getPromptModelShortDescription(slug) })}</p>

      <PromptbookList list={prompts} />
    </BasePageLayout>
  );
}
