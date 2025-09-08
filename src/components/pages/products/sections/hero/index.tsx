"use client";

import React from "react";
import { useIntl } from "react-intl";

import HeroCommon from "@/components/sections/hero";

export const Hero: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <HeroCommon
      title={formatMessage({ id: "products.hero.title" })}
      text={formatMessage({ id: "products.hero.text" })}
      imageSrc="/product/bg2.webp"
    />
  );
};

export default Hero;
