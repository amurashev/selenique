"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../sections/section";

import styles from "./styles.module.css";
import { Button } from "@/components/ui/button";
import { goToForm } from "../../utils";

export const WhatYouGet: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Section title={formatMessage({ id: "what_you_get.title" })} isShort>
      <div className={styles.sections}>
        <ul className={styles.list}>
          {[1, 2, 3, 4].map((item) => (
            <li key={item} className={styles.item}>
              <span className={styles.icon}>✔</span>
              <p
                dangerouslySetInnerHTML={{
                  __html: formatMessage({ id: `what_you_get.item${item}` }),
                }}
              />
            </li>
          ))}
        </ul>

        <div className={styles.buttonBox}>
          <Button onClick={goToForm}>
            {formatMessage({ id: "products.hero.cta" })}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default WhatYouGet;
