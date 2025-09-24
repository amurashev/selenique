"use client";

import React from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";
import Section from "@/components/layout/section";
import { EMAIL, TELEGRAM_LINK, TELEGRAM_NAME } from "@/constants/contacts";

const Telegram = () => (
  <svg
    width="32px"
    height="32px"
    viewBox="0 0 256 256"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <g>
      <path
        d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z"
        fill="#40B3E0"
      ></path>
      <path
        d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308"
        fill="#FFFFFF"
      ></path>
      <path
        d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475"
        fill="#D2E5F1"
      ></path>
      <path
        d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624"
        fill="#B5CFE4"
      ></path>
    </g>
  </svg>
);

const WhatsApp = () => (
  <svg
    width="32px"
    height="32px"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="WhatsApp"
    role="img"
    viewBox="0 0 512 512"
  >
    <rect width="512" height="512" rx="15%" fill="#25d366" />
    <path
      fill="#25d366"
      stroke="#ffffff"
      strokeWidth="26"
      d="M123 393l14-65a138 138 0 1150 47z"
    />
    <path
      fill="#ffffff"
      d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
    />
  </svg>
);

const Email = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 491.52 491.52"
    width="32px"
    height="32px"
  >
    <rect y="85.914" fill="#F6C358" width="491.52" height="319.693" />
    <polygon fill="#FCD462" points="245.76,217.258 491.52,405.604 0,405.604 " />
    <polygon fill="#DC8744" points="245.76,291.673 0,85.916 491.52,85.916 " />
    <polygon fill="#FCD462" points="245.76,274.261 0,85.916 491.52,85.916 " />
  </svg>
);

export const Contacts: React.FC<{ isGray?: boolean }> = ({ isGray = false}) => {
  const { formatMessage } = useIntl();
  return (
    <Section
      title={formatMessage({ id: "products.contacts.title" })}
      text={formatMessage({ id: "products.contacts.text" })}
      side="left"
      isGray={isGray}
    >
      <div className={styles.sections}>
        <noindex>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Telegram />{" "}
              <a href={TELEGRAM_LINK} target="_blank" className={styles.link}>
                {TELEGRAM_NAME}
              </a>
            </li>
            <li className={styles.item}>
              <WhatsApp />{" "}
              <a
                href="https://wa.me/+79251006690"
                target="_blank"
                className={styles.link}
              >
                +7 (925) 100-66-90
              </a>
            </li>
            <li className={styles.item}>
              <Email />{" "}
              <a href={`mailto:${EMAIL}`} className={styles.link}>
                {EMAIL}
              </a>
            </li>
          </ul>
        </noindex>
      </div>
    </Section>
  );
};

export default Contacts;
