"use client";

import React from "react";
import { useIntl } from "react-intl";

import Section from "../../../../layout/section";

import styles from "./styles.module.css";

import { COURSES_DATA } from "@/constants/courses";
import PackageCard from "./package-card";

export const Price: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Section
      title={formatMessage({ id: "intensive_neurovideo.prices.title" })}
      // text={formatMessage({ id: "ii_model.price.text" })}
      isGray
    >
      <div className={styles.sections}>
        <PackageCard
          type="basic"
          title={formatMessage({
            id: COURSES_DATA["intensive_neurovideo"]["prices"]["basic"]
              .titleKey,
          })}
          text={formatMessage({
            id: COURSES_DATA["intensive_neurovideo"]["prices"]["basic"].textKey,
          })}
          price={COURSES_DATA["intensive_neurovideo"]["prices"]["basic"].price}
          advantages={
            COURSES_DATA["intensive_neurovideo"]["prices"]["basic"].advantages
          }
          result={formatMessage({
            id: COURSES_DATA["intensive_neurovideo"]["prices"]["basic"]
              .resultKey,
          })}
        />
        <PackageCard
          type="pro"
          title={formatMessage({
            id: COURSES_DATA["intensive_neurovideo"]["prices"]["pro"].titleKey,
          })}
          text={formatMessage({
            id: COURSES_DATA["intensive_neurovideo"]["prices"]["pro"].textKey,
          })}
          price={COURSES_DATA["intensive_neurovideo"]["prices"]["pro"].price}
          advantages={
            COURSES_DATA["intensive_neurovideo"]["prices"]["pro"].advantages
          }
          result={formatMessage({
            id: COURSES_DATA["intensive_neurovideo"]["prices"]["pro"].resultKey,
          })}
        />
        <PackageCard
          type="vip"
          title={formatMessage({
            id: COURSES_DATA["intensive_neurovideo"]["prices"]["vip"].titleKey,
          })}
          text={formatMessage({
            id: COURSES_DATA["intensive_neurovideo"]["prices"]["vip"].textKey,
          })}
          price={COURSES_DATA["intensive_neurovideo"]["prices"]["vip"].price}
          advantages={
            COURSES_DATA["intensive_neurovideo"]["prices"]["vip"].advantages
          }
          result={formatMessage({
            id: COURSES_DATA["intensive_neurovideo"]["prices"]["vip"].resultKey,
          })}
        />
      </div>
    </Section>
  );
};

export default Price;
