"use client";

import React from "react";
import { useIntl } from "react-intl";

import HeroCommon from "@/components/layout/hero";

export const Hero: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <HeroCommon
      title={formatMessage({ id: "ii_photoshoot.hero.title" })}
      text={formatMessage({ id: "ii_photoshoot.hero.text" })}
      imageSrc="/product/bg2.webp"
    />
  );
};

export default Hero;
