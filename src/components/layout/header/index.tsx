"use client";

import Link from "next/link";
import { useIntl } from "react-intl";
import { usePathname } from "next/navigation";

import styles from "./styles.module.css";
import {
  productPortfolioPageRoute,
  modelsPageRoute,
  promptBookListPageRoute,
} from "@/constants/routes";
import { useEffect, useRef, useState } from "react";
import ServiceItem from "./service-item";
import { SERVICES } from "@/constants/services";
import LogoBox from "./logo-box";
import Dropdown from "./dropdown";
import { PORTFOLIO_TYPES } from "@/constants/portfolio";
import { COURSES, COURSES_DATA } from "@/constants/courses";

export default function Header() {
  const pathname = usePathname();
  const { formatMessage, locale } = useIntl();

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const modelsPageUrl = modelsPageRoute.getUrl(locale, {
    params: {
      type: "women",
    },
  });

  const promptBookListPageUrl = promptBookListPageRoute.getUrl(locale);

  return (
    <header className={styles.box} ref={headerRef}>
      <LogoBox />
      <div className={styles.menuBox}>
        <ul className={styles.menu}>
          <li
            className={`${styles.menuItem} ${
              false ? styles.menuItemIsActive : ""
            }`}
            onClick={() => toggleMenu("services")}
          >
            <span className={styles.link}>
              {formatMessage({ id: "header.menu.services" })}
            </span>
            {openMenu === "services" && (
              <Dropdown>
                <div className={styles.services}>
                  {SERVICES.map((item) => (
                    <ServiceItem
                      key={item.titleKey}
                      image={item.image}
                      url={item.route.getUrl(locale)}
                      title={formatMessage({ id: item.menuTitleKey })}
                    />
                  ))}
                </div>
              </Dropdown>
            )}
          </li>

          {locale === "ru" && (
            <li
              className={`${styles.menuItem} ${
                false ? styles.menuItemIsActive : ""
              }`}
              onClick={() => toggleMenu("courses")}
            >
              <span className={styles.link}>
                {formatMessage({ id: "header.menu.courses" })}
              </span>
              {openMenu === "courses" && (
                <Dropdown>
                  <div className={styles.services}>
                    {COURSES.map((item) => {
                      const courseData =
                        COURSES_DATA[item as keyof typeof COURSES_DATA];
                      return (
                        <ServiceItem
                          key={courseData.titleKey}
                          image={courseData.image}
                          url={courseData.route.getUrl(locale)}
                          title={formatMessage({ id: courseData.menuTitleKey })}
                        />
                      );
                    })}
                  </div>
                </Dropdown>
              )}
            </li>
          )}

          <li
            className={`${styles.menuItem} ${
              false ? styles.menuItemIsActive : ""
            }`}
            onClick={() => toggleMenu("portfolio")}
          >
            <span className={styles.link}>
              {formatMessage({ id: "header.menu.portfolio" })}
            </span>
            {openMenu === "portfolio" && (
              <Dropdown>
                <div className={styles.services}>
                  {PORTFOLIO_TYPES.map((item) => (
                    <Link
                      key={item.index}
                      href={productPortfolioPageRoute.getUrl(locale, {
                        params: { type: item.index },
                      })}
                    >
                      {formatMessage({ id: item.labelKey })}
                    </Link>
                  ))}
                </div>
              </Dropdown>
            )}
          </li>

          <li
            className={`${styles.menuItem} ${
              pathname === modelsPageUrl ? styles.menuItemIsActive : ""
            }`}
          >
            <Link href={modelsPageUrl} className={styles.link}>
              {formatMessage({ id: "header.menu.ii_models" })}
            </Link>
          </li>

          {locale === "en" && (
            <li
              className={`${styles.menuItem} ${
                pathname === promptBookListPageUrl
                  ? styles.menuItemIsActive
                  : ""
              }`}
            >
              <Link href={promptBookListPageUrl} className={styles.link}>
                {formatMessage({ id: "header.menu.promptbooks" })}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
