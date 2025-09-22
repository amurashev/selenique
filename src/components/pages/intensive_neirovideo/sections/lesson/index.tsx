"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../layout/section";
import ItemsList from "@/components/sections/items-list";
import styles from "./styles.module.css";

const LESSONS = {
  1: [1, 2, 3, 4],
  2: [1, 2, 3],
  3: [1, 2, 3],
  4: [1, 2, 3],
};

export const Lesson: React.FC<{ index: number }> = ({ index }) => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({
        id: `intensive_neurovideo.lessons.lesson${index}.title`,
      })}
      text={formatMessage({
        id: `intensive_neurovideo.lessons.lesson${index}.text`,
      })}
      isGray
      side="left"
    >
      <div className={styles.sections}>
        <ItemsList
          items={LESSONS[index as keyof typeof LESSONS].map((item) =>
            formatMessage({
              id: `intensive_neurovideo.lessons.lesson${index}.item${item}`,
            })
          )}
        />
      </div>
    </Section>
  );
};

export default Lesson;
