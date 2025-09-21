"use client";

import React from "react";
import { useIntl } from "react-intl";

import HeroCommon from "@/components/layout/hero";

export const Hero: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <HeroCommon
      title={formatMessage({ id: "intensive_neurovideo.hero.title" })}
      text={formatMessage({ id: "intensive_neurovideo.hero.text" })}
      imageSrc="/photoshoot/bg.webp"
    />
  );
};

export default Hero;
