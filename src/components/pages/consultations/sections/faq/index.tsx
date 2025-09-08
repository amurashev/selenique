"use client";

import React from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";
import Section from "@/components/sections/section";
import FAQBase from "@/components/sections/faq";

export const FAQ: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Section
      title={formatMessage({ id: "consultations.faq.title" })}
      side="left"
      // size="720"
      // isGray
    >
      <div className={styles.sections}>
        <FAQBase
          items={[1, 2, 3, 4, 5].map((key) => ({
            title: formatMessage({ id: `consultations.faq.faq${key}.title` }),
            text: formatMessage({ id: `consultations.faq.faq${key}.text` }),
          }))}
        />
      </div>
    </Section>
  );
};

export default FAQ;
