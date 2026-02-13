"use client";

import { FadeInSection } from "@/utils/fade";

import styles from "./styles.module.css";

export function SectionGray({
  id,
  title,
  children,
  isCentered,
}: {
  id?: string;
  title: string;
  subTitle?: string;
  isCentered?: boolean
  children: React.ReactNode;
}) {
  return (
    <FadeInSection>
      <div id={id} className={styles.section1}>
        <div className={styles.section1Inner}>
          <h2 className={isCentered ? styles.s1TitleIsCentered : styles.s1Title}>{title}</h2>
          <div className={styles.s1Content}>{children}</div>
        </div>
      </div>
    </FadeInSection>
  );
}

export function SectionColor({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}) {
  return (
    <FadeInSection>
      <div id={id} className={styles.section2}>
      {/* <div className={styles.fader} /> */}
        <div className={styles.section1Inner}>
          {title && <h2 className={styles.s2Title}>{title}</h2>}
          <div className={styles.s2Content}>{children}</div>
        </div>
      </div>
    </FadeInSection>
  );
}
