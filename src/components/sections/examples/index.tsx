"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../layout/section";

import styles from "./styles.module.css";

export const Examples: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Section title={formatMessage({ id: "examples.title" })}>
      TBD
    </Section>
  );
};

export default Examples;
