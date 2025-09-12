"use client";

import Link from "next/link";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";
import { SERVICES } from "@/constants/services";
import { modelsPageRoute, productPortfolioPageRoute } from "@/constants/routes";
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
              <img
                src="/logo4.png"
                alt={formatMessage({ id: "common.name" })}
                className={styles.logoImage}
              />
            </div>

            <div className={styles.dsds}>
              <ul
                aria-label={formatMessage({ id: "header.menu.services" })}
                className={styles.menuList}
              >
                <span className={styles.menuHeader}>
                  {formatMessage({ id: "header.menu.services" })}
                </span>

                {SERVICES.map((item) => (
                  <li key={item.titleKey} className={styles.menuItem}>
                    <Link href={item.route.getUrl(locale)} className={styles.menuLink}>
                      {formatMessage({ id: item.menuTitleKey })}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linksBox}>
              <ul
                aria-label={formatMessage({ id: "header.menu.other" })}
                className={styles.menuList}
              >
                <span className={styles.menuHeader}>
                  {formatMessage({ id: "header.menu.other" })}
                </span>

                <li className={styles.menuItem}>
                  <Link
                    href={modelsPageRoute.getUrl(locale, {
                      params: {
                        type: "women",
                      },
                    })}
                    className={styles.menuLink}
                  >
                    {formatMessage({ id: "header.menu.portfolio" })}
                  </Link>
                </li>

                <li className={styles.menuItem}>
                  <Link
                    href={productPortfolioPageRoute.getUrl(locale, {
                      params: { type: "all" },
                    })}
                    className={styles.menuLink}
                  >
                    {formatMessage({ id: "header.menu.ii_models" })}
                  </Link>
                </li>
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

            <div>© 2025 {formatMessage({ id: "common.name" })}</div>
            <div className={styles.flags}>
        <Link href={"/"}>
          <RUFlag />
        </Link>
        <Link href={"/en"}>
          <UKFlag />
        </Link>
      </div>
          </div>
        </nav>
        <div className={styles.alertBox}>
          <div>{formatMessage({ id: "footer.not_an_offer" })}</div>
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
