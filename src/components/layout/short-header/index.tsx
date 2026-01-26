"use client";

import React, { useState, useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import { usePathname, redirect } from "next/navigation";
import Link from "next/link";

import styles from "./styles.module.css";

import { i18n, Locale } from "../../../../i18n-config";
import { ChevronLeft } from "@/components/sections/arrows";
import { BaseRouteType, Route } from "@/utils/routing";
// import Locales from "../../layout/locales";


// Flags: https://www.flaticon.com/packs/international-flags-6?word=flag
export default function ShortHeader({ route, title, hasBack = true }: {
  route?: Route<BaseRouteType>,
  title: string,
  hasBack?: boolean
}) {
  const { formatMessage, locale } = useIntl();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null);

  const onFlagClick = (newLocale: string) => {
    const pathArray = pathname.split('/')

    const pathWithoutLocale = i18n.locales.includes(pathArray[1] as Locale) 
      ? pathArray.slice(2).join('/') 
      : pathArray.slice(1).join('/')

    let newPath = "/"

    // TODO: Common helper
    if (i18n.locales.includes(locale as Locale)) {
      if (newLocale === i18n.defaultLocale) {
        newPath = `/${pathWithoutLocale}`
      } else {
        newPath = `/${newLocale}/${pathWithoutLocale}`
      }
    }

    redirect(newPath)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className={styles.box}>
      <div className={styles.backBox}>
        {!hasBack && (<div className={styles.nullLink}>&nbsp;</div>)}
        {hasBack && route && (
          <Link href={route.getUrl(locale)} className={styles.link}>
            <ChevronLeft size={28} color="#ffffff" />
            <span>{formatMessage({ id: "common.back" })}</span>
          </Link>
        )}

        <div className={styles.title}>{title}</div>
        <div className={styles.null}>
          <div className={styles.card}>
            <div className={styles.flagBox} onClick={() => setIsOpen(true)}>
              <img
                src={`/flags/${locale}.png`}
                alt={"Selenique.Studio"}
                className={styles.flagImage}
              />
              {locale.toUpperCase()}
            </div>
          </div>
        </div>


        {isOpen && (
          <div className={styles.modal} ref={modalRef}>
            {[i18n.locales.map(item => {
              return (
                <Link key={item} href="#"><img
                  src={`/flags/${item}.png`}
                  alt={"Selenique.Studio"}
                  className={styles.imageSuggested}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    onFlagClick(item)
                  }}
                /></Link>
              )
            })]}
          </div>
        )}
      </div>
    </div>
  );
}
