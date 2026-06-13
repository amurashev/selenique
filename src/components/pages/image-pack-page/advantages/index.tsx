"use client";

import React from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";
import { ImagesPack } from "@/content/images-packs";

const DPIIcon = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2C2.44772 2 2 2.44772 2 3V10C2 10.5523 2.44772 11 3 11H10C10.5523 11 11 10.5523 11 10V3C11 2.44772 10.5523 2 10 2H3ZM4 9V4H9V9H4Z"
        fill="#000000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 2C13.4477 2 13 2.44772 13 3V10C13 10.5523 13.4477 11 14 11H21C21.5523 11 22 10.5523 22 10V3C22 2.44772 21.5523 2 21 2H14ZM15 9V4H20V9H15Z"
        fill="#000000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 14C13 13.4477 13.4477 13 14 13H21C21.5523 13 22 13.4477 22 14V21C22 21.5523 21.5523 22 21 22H14C13.4477 22 13 21.5523 13 21V14ZM15 15V20H20V15H15Z"
        fill="#000000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 13C2.44772 13 2 13.4477 2 14V21C2 21.5523 2.44772 22 3 22H10C10.5523 22 11 21.5523 11 21V14C11 13.4477 10.5523 13 10 13H3ZM4 20V15H9V20H4Z"
        fill="#000000"
      />
    </svg>
  );
};

const OrientationIcon = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19,3 C20.5976809,3 21.9036609,4.24891996 21.9949073,5.82372721 L22,6 L22,18 C22,19.5976809 20.75108,20.9036609 19.1762728,20.9949073 L19,21 L5,21 C3.40231912,21 2.09633912,19.75108 2.00509269,18.1762728 L2,18 L2,6 C2,4.40231912 3.24891996,3.09633912 4.82372721,3.00509269 L5,3 L19,3 Z M19,5 L5,5 C4.48716416,5 4.06449284,5.38604019 4.00672773,5.88337887 L4,6 L4,18 C4,18.5128358 4.38604019,18.9355072 4.88337887,18.9932723 L5,19 L19,19 C19.5128358,19 19.9355072,18.6139598 19.9932723,18.1166211 L20,18 L20,6 C20,5.48716416 19.6139598,5.06449284 19.1166211,5.00672773 L19,5 Z M17,12 C17.5128358,12 17.9355072,12.3860402 17.9932723,12.8833789 L18,13 L18,16 C18,16.5128358 17.6139598,16.9355072 17.1166211,16.9932723 L17,17 L14,17 C13.4477153,17 13,16.5522847 13,16 C13,15.4871642 13.3860402,15.0644928 13.8833789,15.0067277 L14,15 L16,15 L16,13 C16,12.4871642 16.3860402,12.0644928 16.8833789,12.0067277 L17,12 Z M10,7 C10.5522847,7 11,7.44771525 11,8 C11,8.51283584 10.6139598,8.93550716 10.1166211,8.99327227 L10,9 L8,9 L8,11 C8,11.5128358 7.61395981,11.9355072 7.11662113,11.9932723 L7,12 C6.48716416,12 6.06449284,11.6139598 6.00672773,11.1166211 L6,11 L6,8 C6,7.48716416 6.38604019,7.06449284 6.88337887,7.00672773 L7,7 L10,7 Z" />
    </svg>
  );
};

const ImageIcon = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z"
        fill="#0F0F0F"
      />
      <path
        d="M4.80665 17.5211L9.1221 9.60947C9.50112 8.91461 10.4989 8.91461 10.8779 9.60947L14.0465 15.4186L15.1318 13.5194C15.5157 12.8476 16.4843 12.8476 16.8682 13.5194L19.1451 17.5039C19.526 18.1705 19.0446 19 18.2768 19H5.68454C4.92548 19 4.44317 18.1875 4.80665 17.5211Z"
        fill="#0F0F0F"
      />
      <path
        d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z"
        fill="#0F0F0F"
      />
    </svg>
  );
};

const SizeIcon = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5563 1.41421C16.3374 0.633165 17.6037 0.633165 18.3848 1.41421L22.6274 5.65685C23.4085 6.4379 23.4085 7.70423 22.6274 8.48528L8.48527 22.6274C7.70422 23.4085 6.43789 23.4085 5.65684 22.6274L1.4142 18.3848C0.633153 17.6037 0.633154 16.3374 1.4142 15.5563L15.5563 1.41421ZM16.2634 3.53553C16.654 3.14501 17.2871 3.14501 17.6777 3.53553L20.5061 6.36396C20.8966 6.75449 20.8966 7.38765 20.5061 7.77817L19.799 7.07107C19.4085 6.68054 18.7753 6.68054 18.3848 7.07107C17.9942 7.46159 17.9942 8.09476 18.3848 8.48528L19.0919 9.19239L17.6777 10.6066L15.5563 8.48528C15.1658 8.09476 14.5326 8.09476 14.1421 8.48528C13.7516 8.87581 13.7516 9.50897 14.1421 9.89949L16.2634 12.0208L14.8492 13.435L14.1421 12.7279C13.7516 12.3374 13.1184 12.3374 12.7279 12.7279C12.3374 13.1184 12.3374 13.7516 12.7279 14.1421L13.435 14.8492L12.0208 16.2635L9.89948 14.1421C9.50896 13.7516 8.87579 13.7516 8.48527 14.1421C8.09475 14.5327 8.09475 15.1658 8.48527 15.5563L10.6066 17.6777L9.19238 19.0919L8.48527 18.3848C8.09475 17.9943 7.46158 17.9943 7.07106 18.3848C6.68053 18.7753 6.68053 19.4085 7.07106 19.799L7.77816 20.5061C7.38764 20.8966 6.75447 20.8966 6.36395 20.5061L3.53552 17.6777C3.145 17.2871 3.145 16.654 3.53552 16.2635L16.2634 3.53553Z"
        fill="#0F0F0F"
      />
    </svg>
  );
};

const ARIcon = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 20 20"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" fill="none" width="20" height="20" />

      <g>
        <path d="M15.95 5H14l3.2 3.39L19.82 5h-1.78c0-2.89-1.89-5-5.04-5v2.1c2.1 0 2.95 1.16 2.95 2.9zM1 1h10v9h9v10H6v-5H1V1zm2 2v10h3v-3h3V3H3zm5 9v6h10v-6H8z" />
      </g>
    </svg>
  );
};

const ListItem = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string | number;
}) => {
  return (
    <div className={styles.part2}>
      <div className={styles.part2Icon}>{icon}</div>

      <div className={styles.part2Inner}>
        <strong>{title}:</strong>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default function Advantages({ data }: { data: ImagesPack }) {
  const { formatMessage, locale } = useIntl();
  const { count, size, ar, orientation } = data;

  return (
    <div>
      <h3>{formatMessage({ id: "common.product_spec" })}</h3>
      <div className={styles.advantages}>
        <ListItem
          icon={<ImageIcon />}
          title={formatMessage({ id: "common.photos" })}
          text={count}
        />
        <ListItem
          icon={<ARIcon />}
          title={formatMessage({ id: "common.orientation" })}
          text={
            orientation === "h"
              ? formatMessage({ id: "common.horizontal" })
              : formatMessage({ id: "common.vertical" })
          }
        />
        <ListItem
          icon={<SizeIcon />}
          title={formatMessage({ id: "common.dimensions" })}
          text={`${size[0]} x ${size[1]} px`}
        />
        <ListItem
          icon={<OrientationIcon />}
          title={formatMessage({ id: "common.aspect_ratio" })}
          text={ar}
        />
        <ListItem icon={<DPIIcon />} title="DPI" text={"300"} />
      </div>
    </div>
  );
}
