"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../sections/section";

import styles from "./styles.module.css";

export const WhereUse: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Section title={formatMessage({ id: "where_use.title" })} isShort>
      <div className={styles.sections}>
        <ul className={styles.list}>
          {[1, 2, 3, 4].map((item) => (
            <li key={item} className={styles.item}>
              <span className={styles.icon}>✔</span>
              <p
                dangerouslySetInnerHTML={{
                  __html: formatMessage({ id: `where_use.item${item}` }),
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default WhereUse;
