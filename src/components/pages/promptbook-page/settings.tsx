"use client";

import React from "react";

import { SampleNextArrow, SamplePrevArrow } from "@/components/sections/arrows";

export const settings = {
  dots: true,
  infinite: true,
  lazyLoad: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow color="#333333" />,
  prevArrow: <SamplePrevArrow color="#333333" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
} as any; // eslint-disable-line @typescript-eslint/no-explicit-any
