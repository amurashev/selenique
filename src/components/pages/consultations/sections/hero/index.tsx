"use client";

import React from "react";
import { useIntl } from "react-intl";

import HeroCommon from "@/components/sections/hero";

export const Hero: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <HeroCommon
      title={formatMessage({ id: "consultations.hero.title" })}
      text={formatMessage({ id: "consultations.hero.text" })}
      imageSrc="/consultations/bg.webp"
    />
  );
};

export default Hero;
