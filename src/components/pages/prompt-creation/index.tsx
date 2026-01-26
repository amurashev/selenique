"use client";

import { useState } from "react";
import { useIntl } from "react-intl";
import Link from "next/link";

import styles from "./page.module.css";
import {
  promptbooksOrdered,
  promptbooksBundlesOrdered,
} from "@/constants/promptbooks";

import { homePage } from "@/constants/routes";
import PromptbookList from "@/components/sections/promptbook-list";
import ShortHeader from "@/components/layout/short-header";
import Footer from "@/components/layout/footer";
import Categories from "./categories";


export default function PromptCreationPage() {
  const { formatMessage, locale } = useIntl();
  const [test, setTest] = useState()

  return (
    <>
      <div className={styles.page}>
        <ShortHeader
          route={homePage}
          title={formatMessage({ id: "prompt_books.title_short" })}
        />
        <main className={styles.main}>
          <h1>{formatMessage({ id: "prompt_books.title" })}</h1>
          <p>{formatMessage({ id: "prompt_books.text" })}</p>
         
          PromptCreationPage
        </main>
        <Footer />
      </div>
    </>
  );
}
