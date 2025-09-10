"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../layout/section";

import styles from "./styles.module.css";
import { Button } from "@/components/ui/button";
import { goToForm } from "../../utils";
import ItemsList from "@/components/sections/items-list";

export const WhereUse: React.FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Section title={formatMessage({ id: "products.where_use.title" })} side="left">
      <div className={styles.sections}>
        <ItemsList
          items={[1, 2, 3, 4].map((item) =>
            formatMessage({
              id: `products.where_use.item${item}`,
            })
          )}
        />

        <div className={styles.buttonBox}>
          <Button onClick={goToForm}>
            {formatMessage({ id: "products.hero.cta" })}
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default WhereUse;
