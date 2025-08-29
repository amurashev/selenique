"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";

import Section from "../../../../sections/section";

import styles from "./styles.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ChevronRight({ size = 32, stroke = 2, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 6l6 6-6 6"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronLeft({ size = 32, stroke = 2, color = "currentColor" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15 6l-6 6 6 6"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SampleNextArrow() {
  // const { style, onClick } = props;
  return (
    <div
      className={styles.rightArrow}
      // style={{ ...style, display: "block" }}
      // onClick={onClick}
    >
      <ChevronRight />
    </div>
  );
}

function SamplePrevArrow() {
  // const { style, onClick } = props;
  return (
    <div
      className={styles.leftArrow}
      // style={{ ...style, display: "block" }}
      // onClick={onClick}
    >
      <ChevronLeft />
    </div>
  );
}

const IMAGES = [
  {
    src: "/product/examples/result.jpg",
    text: "portfolio.item1",
  },
  {
    src: "/product/examples/result.jpg",
    text: "portfolio.item1",
  },
  {
    src: "/product/examples/result.jpg",
    text: "portfolio.item1",
  },
];

export const Portfolio: React.FC = () => {
  const { formatMessage } = useIntl();

  var settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  } as any;

  return (
    <Section title={formatMessage({ id: "portfolio.title" })} isGray>
      <div className={styles.sections}>
        <Slider {...settings}>
          {IMAGES.map((item) => (
            <div className={styles.item}>
              <img className={styles.image} src={item.src} />
              <p className={styles.itemText}>
                {formatMessage({ id: item.text })}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Portfolio;
