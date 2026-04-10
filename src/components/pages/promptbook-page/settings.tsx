"use client";

import React from "react";

import { SampleNextArrow, SamplePrevArrow } from "@/components/sections/arrows";

export const mainSettings = {
  dots: true,
  infinite: false,
  lazyLoad: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow color="#333333" colorDisabled="#cccccc" />,
  prevArrow: <SamplePrevArrow color="#333333" colorDisabled="#cccccc" />,
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

export const contentSettings = {
  dots: false,
  arrows: true,
  infinite: false,
  lazyLoad: true,
  speed: 300,
  centerMode: false,
  slidesToShow: 3.3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow color="#333333" colorDisabled="#cccccc" />,
  prevArrow: <SamplePrevArrow color="#333333" colorDisabled="#cccccc" />,
  responsive: [
    {
      arrows: true,
      breakpoint: 1024,
      settings: {
        slidesToShow: 3.3,
        slidesToScroll: 1,
      },
    },
    {
      arrows: false,
      breakpoint: 600,
      settings: {
        slidesToShow: 2.1,
        slidesToScroll: 1,
      },
    },
    {
      arrows: false,
      breakpoint: 480,
      settings: {
        slidesToShow: 1.66,
        slidesToScroll: 1,
      },
    },
  ],
} as any; // eslint-disable-line @typescript-eslint/no-explicit-any
