"use client";

import { useIntl } from "react-intl";
import Link from "next/link";

import { guidePageRoute } from "@/constants/routes";

import styles from "./styles.module.css";

const Chevron = () => {
  return (
    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 24 24" fill="none">
      <path d="M6 9L12 15L18 9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Hero({ slug, title, languages }:{ slug: string, title: string, languages: string[] }) {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.hero}>
      <div className={styles.h1Box}>
        <span className={styles.h1Sub}>Iconista Lab</span>
        <h1 className={styles.h1}>{title}</h1>
        <div className={styles.languages}>
          <div className={styles.languagesTitle}>{formatMessage({ id: "common.available_languages" })}: </div>
          <div className={styles.languagesList}>
            {languages.map(item => {
              const pageUrl = guidePageRoute.getUrl(item, { params: {
                slug,
              }})

              return (
                <Link key={item} href={item === locale ? "#" : pageUrl}>
                  <img
                    src={`/flags/${item}.png`}
                    alt={title}
                    className={styles.imageSuggested}
                    onClick={(e) => {
                      if (item === locale) {
                        e.preventDefault()
                        e.stopPropagation()
  
                        const element = document.getElementById("first_section");
                        //you can do it by jquery. no matter
                        element?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                          inline: "nearest",
                        });
                      }
                    }}
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <div className={styles.iconBox}><Chevron /></div>
    </div>
  );
}
