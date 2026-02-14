"use client";

import Link from "next/link";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";
import {
  getPromptCategoryShortLabel,
  getPromptModelShortLabel,
  getPromptModelTag,
  PROMPT_CATEGORIES,
  PROMPT_MODELS,
} from "@/constants/prompts";
import {
  promptBookListPageRoute,
  guidesListPageRoute,
  promptBundleListPageRoute,
  productPortfolioPageRoute,
  promptsCategoryPageRoute,
  promptsModelPageRoute,
} from "@/constants/routes";
import { RUFlag, UKFlag } from "@/components/ui/flags";

const EMailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function Footer() {
  const { formatMessage, locale } = useIntl();
  return (
    <footer className={styles.box}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.firstCol}>
            <div className={styles.logoBox}>
              {/* <img
                src="/logo4.png"
                alt={formatMessage({ id: "common.name" })}
                className={styles.logoImage}
              /> */}


              <div className={styles.title}>Selenique.Studio</div>
            </div>

            <div className={styles.linksBox}>
              <ul
                aria-label={formatMessage({ id: "footer.navigation" })}
                className={styles.menuList}
              >
                <span className={styles.menuHeader}>
                  {formatMessage({ id: "footer.navigation" })}
                </span>

                <li className={styles.menuItem}>
                  <Link
                    href={promptBookListPageRoute.getUrl(locale)}
                    className={styles.menuLink}
                  >
                    {formatMessage({ id: "footer.prompts" })}
                  </Link>
                </li>

                <li className={styles.menuItem}>
                  <Link
                    href={promptBundleListPageRoute.getUrl(locale)}
                    className={styles.menuLink}
                  >
                    {formatMessage({ id: "footer.prompt_bundles" })}
                  </Link>
                </li>

                <li className={styles.menuItem}>
                  <Link
                    href={guidesListPageRoute.getUrl(locale)}
                    className={styles.menuLink}
                  >
                    {formatMessage({ id: "footer.guides" })}
                  </Link>
                </li>

                <li className={styles.menuItem}>
                  <Link
                    href={productPortfolioPageRoute.getUrl(locale, {
                      params: { type: "all" },
                    })}
                    className={styles.menuLink}
                  >
                    {formatMessage({ id: "header.menu.portfolio" })}
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.linksBox}>
              <ul
                aria-label={formatMessage({ id: "footer.prompt_categories" })}
                className={styles.menuList}
              >
                <span className={styles.menuHeader}>
                  {formatMessage({ id: "footer.prompt_categories" })}
                </span>

                {PROMPT_CATEGORIES.map(item => (
                  <li key={item} className={styles.menuItem}>
                    <Link
                      href={promptsCategoryPageRoute.getUrl(locale, {
                        params: {
                          slug: item,
                        },
                      })}
                      className={styles.menuLink}
                    >
                      {formatMessage({ id: getPromptCategoryShortLabel(item) })}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linksBox}>
              <ul
                aria-label={formatMessage({ id: "footer.prompt_models" })}
                className={styles.menuList}
              >
                <span className={styles.menuHeader}>
                  {formatMessage({ id: "footer.prompt_models" })}
                </span>

                {PROMPT_MODELS.map(item => (
                  <li key={item} className={styles.menuItem}>
                    <Link
                      href={promptsModelPageRoute.getUrl(locale, {
                        params: {
                          slug: item,
                        },
                      })}
                      className={styles.menuLink}
                    >
                      {formatMessage({ id: getPromptModelTag(item) })}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.secondCol}>
            <div className={styles.email}>
              <EMailIcon />
              <a
                href="mailto:selenique.studio@gmail.com"
                className={styles.link}
              >
                selenique.studio@gmail.com
              </a>
            </div>

            <div>© 2026 {formatMessage({ id: "common.name" })}</div>
            {/* <div className={styles.flags}>
              <Link href={"/"}>
                <RUFlag />
              </Link>
              <Link href={"/en"}>
                <UKFlag />
              </Link>
            </div> */}
          </div>
        </nav>
        <div className={styles.alertBox}>
          {/* {locale === "ru" && (
            <div>
              <Link href={"/policy"} className={styles.menuLink}>
                {formatMessage({ id: "header.menu.policy" })}
              </Link>
            </div>
          )}{" "}
          {locale === "ru" && (
            <div>
              <Link href={"/oferta_teaching"} className={styles.menuLink}>
                {formatMessage({ id: "header.menu.oferta_teaching" })}
              </Link>
            </div>
          )}
          {locale === "ru" && (
            <div>
              <Link href={"/oferta_service"} className={styles.menuLink}>
                {formatMessage({ id: "header.menu.oferta_service" })}
              </Link>
            </div>
          )} */}
          {/* <div>{formatMessage({ id: "footer.not_an_offer" })}</div> */}
        </div>
        {/* <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link
              target="_blank"
              href={"https://www.behance.net/selenamurasheva"}
              className={styles.link}
            >
              Behance
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              target="_blank"
              href={"https://www.instagram.com/theselenique/"}
              className={styles.link}
            >
              Instagram
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/alena-murasheva-578ba235a/"}
              className={styles.link}
            >
              LinkidIn
            </Link>
          </li>
        </ul> */}
      </div>
    </footer>
  );
}
