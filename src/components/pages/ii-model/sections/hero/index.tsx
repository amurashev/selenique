"use client";

import React from "react";
import { useIntl } from "react-intl";

import HeroCommon from "@/components/sections/hero";

export const Hero: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <HeroCommon
      title={formatMessage({ id: "ii_model.hero.title" })}
      text={formatMessage({ id: "ii_model.hero.text" })}
      imageSrc="/product/bg.webp"
    />
  );
};

export default Hero;
