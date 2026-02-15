"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "@/components/layout/section";
import ItemsList from "@/components/sections/items-list";
import styles from "./styles.module.css";

const LESSONS = {
  1: {
    items: [1, 2, 3, 4, 5],
    after: [1, 2, 3, 4],
    images: ["/intensive_ai/image_l1_2.jpg"],
  },
  2: {
    items: [1, 2, 3, 4, 5],
    after: [1, 2, 3, 4],
    images: ["/intensive_ai/image_l2_1.jpg"]
  },
  3: {
    items: [1, 2, 3, 4, 5],
    after: [1, 2, 3, 4, 5],
    images: ["/intensive_ai/image_l3_1.jpg"]
  },
  4: {
    items: [1, 2, 3],
    after: [1],
    images: ["/intensive_ai/image_l4_1.jpg"]
  },
};

const Lesson: React.FC<{ index: number }> = ({ index }) => {
  const { formatMessage } = useIntl();
  const { items, after = [], images = [] } = LESSONS[index as keyof typeof LESSONS]

  return (
    <div className={styles.itemBox}>
      <div className={styles.row1}>
        <h3>
          {formatMessage({
            id: `intensive_neurovideo.lessons.lesson${index}.title`,
          })}
        </h3>

        <p className={styles.text}>
          {formatMessage({
            id: `intensive_neurovideo.lessons.lesson${index}.text`,
          })}
        </p>

        <ItemsList
          type="normal"
          items={items.map((item) =>
            formatMessage({
              id: `intensive_neurovideo.lessons.lesson${index}.item${item}`,
            })
          )}
        />
{/* 
<div className={styles.after}>
          <h4>
            {"🧑‍💻 "}{formatMessage({ id: `intensive_neurovideo.lessons.practice` })}
          </h4>
          {formatMessage({
            id: `intensive_neurovideo.lessons.lesson${index}.practice`,
          })}
        </div> */}

        <div className={styles.after}>
          <h4>
          {"✨ "}{formatMessage({ id: `intensive_neurovideo.lessons.after` })}
          </h4>
          <ItemsList
          type="normal"
          items={after.map((item) =>
            formatMessage({
              id: `intensive_neurovideo.lessons.lesson${index}.after${item}`,
            })
          )}
        />
        </div>
      </div>

      <div className={styles.imageBox}>
        <img src={images[0]} className={styles.image} />
        {/* <img src={"/intensive_ai/image2.jpg"} className={styles.image} /> */}
      </div>
    </div>
  );
};

export const Lessons: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({
        id: `intensive_neurovideo.lessons.title`,
      })}
      // text={formatMessage({
      //   id: `intensive_neurovideo.lessons.lesson${index}.text`,
      // })}
      isGray
      // side="left"
    >
      <div className={styles.sections}>
        <Lesson index={1} />
        <Lesson index={2} />
        <Lesson index={3} />
        <Lesson index={4} />
      </div>
      {/* <div className={styles.sections}>
        <ItemsList
          items={LESSONS[index as keyof typeof LESSONS].map((item) =>
            formatMessage({
              id: `intensive_neurovideo.lessons.lesson${index}.item${item}`,
            })
          )}
        />
      </div> */}
    </Section>
  );
};

export default Lessons;
