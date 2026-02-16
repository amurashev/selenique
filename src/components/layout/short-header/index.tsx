"use client";

import React, { useState, useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import { usePathname, redirect } from "next/navigation";
import Link from "next/link";

import styles from "./styles.module.css";

import { i18n, Locale } from "../../../../i18n-config";
import { ChevronLeft } from "@/components/sections/arrows";
import { BaseRouteType, Route } from "@/utils/routing";
import MenuIcon from "@/components/ui/icons/menu";
import Menu from "./menu";
import Languages from "./languages";
// import Locales from "../../layout/locales";

// Flags: https://www.flaticon.com/packs/international-flags-6?word=flag
export default function ShortHeader({
  route,
  title,
  color = "black",
}: {
  route?: Route<BaseRouteType>;
  title?: string;
  color?: "white" | "black";
}) {
  const { formatMessage, locale } = useIntl();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const flagRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const onFlagClick = (newLocale: string) => {
    const pathArray = pathname.split("/");

    const pathWithoutLocale = i18n.locales.includes(pathArray[1] as Locale)
      ? pathArray.slice(2).join("/")
      : pathArray.slice(1).join("/");

    let newPath = "/";

    // TODO: Common helper
    if (i18n.locales.includes(locale as Locale)) {
      if (newLocale === i18n.defaultLocale) {
        newPath = `/${pathWithoutLocale}`;
      } else {
        newPath = `/${newLocale}/${pathWithoutLocale}`;
      }
    }

    redirect(newPath);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !flagRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
        event.stopPropagation();
        event.stopImmediatePropagation();
        event.preventDefault();
      }

      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        event.stopPropagation();
        event.stopImmediatePropagation();
        event.preventDefault();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${styles.box} ${color === "white" ? styles.boxWhite : ""}`}
    >
      <div className={styles.backBox}>
        {!route && <div className={styles.nullLink}>&nbsp;</div>}

        {route && (
          <Link href={route.getUrl(locale)} className={styles.link}>
            <ChevronLeft
              size={28}
              color={color === "white" ? "#444444" : "#ffffff"}
            />
            <span>{formatMessage({ id: "common.back" })}</span>
          </Link>
        )}

        <div className={styles.title}>{title}</div>

        <div className={styles.null}>
          <div className={styles.card}>
            <div
              ref={flagRef}
              className={styles.flagBox}
              onClick={() => {
                if (!isOpen) setIsOpen(true);
              }}
            >
              {locale.toUpperCase()}
              <img
                src={`/flags/${locale}.png`}
                alt={"Selenique.Studio"}
                className={styles.flagImage}
              />
            </div>
          </div>
        </div>
        <div
          className={styles.menuBox}
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <MenuIcon size={28} />
        </div>
        <Menu ref={menuRef} isOpen={isMenuOpen} />
        <Languages ref={modalRef} isOpen={isOpen} onSelect={onFlagClick} />
      </div>
    </div>
  );
}
