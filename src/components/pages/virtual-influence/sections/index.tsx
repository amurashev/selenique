"use client";

import { useIntl } from "react-intl";


import { FadeInSection } from "@/utils/fade";

import styles from "./styles.module.css";

export function SectionGray(
  { title, children }: { title: string, children: React.ReactNode; }
) {
  const { formatMessage, locale } = useIntl();

  return (
    <FadeInSection>
      <div className={styles.section1}>
        <div className={styles.section1Inner}>
          <h2 className={styles.s1Title}>
            {title}
          </h2>
          <div>
            {children}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}


export function SectionColor(
  { title, children }: { title: string, children: React.ReactNode; }
) {
  const { formatMessage, locale } = useIntl();

  return (
    <FadeInSection>
      <div className={styles.section2}>
        {/* <div className={styles.fader} /> */}
        <div className={styles.section1Inner}>
          {title &&
            <h2 className={styles.s2Title}>{title}</h2>
          }
          <div>
            {children}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

