"use client";

import React from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";
import Section from "@/components/layout/section";
import FAQBase from "@/components/sections/faq";

export const FAQ: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Section title={formatMessage({ id: "intensive_neurovideo.faq.title" })} side="left">
      <div className={styles.sections}>
        <FAQBase
          items={[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => ({
            title: formatMessage({ id: `intensive_neurovideo.faq.faq${key}.title` }),
            text: formatMessage({ id: `intensive_neurovideo.faq.faq${key}.text` }),
          }))}
        />
      </div>
    </Section>
  );
};

export default FAQ;
