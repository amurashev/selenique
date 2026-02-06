"use client";

import React from "react";
import { useIntl } from "react-intl";
import Slider from "react-slick";
import Link from "next/link";

import { Guide, PromptBook } from "@/components/types";

import styles from "./styles.module.css";

const PuzzleIcon = () => {
  return (
    <svg style={{ top: "4px", position: "relative" }}  width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.6 5.6C18 -0.7 24.7 6 18.4 8.4L22 12L18.4 15.6C16 9.3 9.3 16 15.6 18.4L12 22L8.4 18.4C6 24.7 -0.7 18 5.6 15.6L2 12L5.6 8.4C8 14.7 14.7 8 8.4 5.6L12 2Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const PDFIcon = () => {
  return (
    <svg style={{ top: "0px", position: "relative" }} width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 17H15M9 14H15M13.0004 3.00087C12.9048 3 12.7974 3 12.6747 3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 19 18.9215 19 17.8036V9.32568C19 9.20302 18.9999 9.09553 18.999 9M13.0004 3.00087C13.2858 3.00348 13.4657 3.01407 13.6382 3.05547C13.8423 3.10446 14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59181 14.9375 3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53379 18.9964 8.71454 18.999 9M13.0004 3.00087L13 5.80021C13 6.92031 13 7.48015 13.218 7.90797C13.4097 8.2843 13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.999" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const DOCIcon = () => {
  return (
    <svg version="1.1" height="22px" width="22px" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512" >

      <g>
        <path d="M464,0H48C21.492,0,0,21.492,0,48v416c0,26.508,21.492,48,48,48h416c26.508,0,48-21.492,48-48V48
		C512,21.492,490.508,0,464,0z M444.664,35c10.492,0,19,8.508,19,19s-8.508,19-19,19s-19-8.508-19-19S434.172,35,444.664,35z
		 M374.164,35c10.492,0,19,8.508,19,19s-8.508,19-19,19s-19-8.508-19-19S363.672,35,374.164,35z M303.664,35
		c10.492,0,19,8.508,19,19s-8.508,19-19,19s-19-8.508-19-19S293.172,35,303.664,35z M472,464c0,4.406-3.586,8-8,8H48
		c-4.414,0-8-3.594-8-8V104h432V464z"/>
        <rect x="112" y="192" width="288" height="32" />
        <rect x="112" y="272" width="288" height="32" />
        <rect x="112" y="352" width="152" height="32" />
      </g>
    </svg>
  )
}

export default function Advantages({ data }: { data: PromptBook }) {
  const { formatMessage, locale } = useIntl();
  const { fileType, type } = data;
  const pack = (data as PromptBook).pack || [];
  const packsNumber = pack.length || 1;

  return (
    <div>
      <div className={styles.part2}>
      <div className={styles.part2Icon}>
        <PDFIcon />
        </div>

        <div className={styles.part2Inner}>
          <h4>{formatMessage({ id: "prompt_books.file_type" })}:</h4>

          {fileType && fileType === "link" ? (
            <div className={styles.aiItems}>{formatMessage({ id: "prompt_books.link_to_notion" })}</div>
          ) : (
            <div className={styles.aiItems}>{formatMessage({ id: "prompt_books.pdf" })}</div>
          )}
        </div>
      </div>

      <div className={styles.part2}>
        <div className={styles.part2Icon}>
          <PuzzleIcon />
        </div>

        <div className={styles.part2Inner}>
          <h4>{formatMessage({ id: "prompt_books.compatible_with" })}:</h4>
          <div className={styles.aiItems}>Gemini, Nano Banana Pro, Nano Banana, Flux, ChatGPT Image, Seedream, MidJourney</div>
        </div>
      </div>

      <hr className={styles.hr} />


      {/* <ul className={styles.advantages}>
        {(data as PromptBook).number && (
          <li>
            <span>{(data as PromptBook).number}</span>
            <strong>
              {formatMessage({ id: "prompt_books.prompts" })}
            </strong>
          </li>
        )}
      </ul> */}

    </div>

  );
}
