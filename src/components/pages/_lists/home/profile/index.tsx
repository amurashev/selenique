import React from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";
import {
  ThreadsIcon,
  InstagramIcon,
  EmailIcon,
} from "@/components/ui/icons/socials";
import Link from "next/link";
import { EMAIL, INSTAGRAM_NAME, THREADS_NAME } from "@/constants/contacts";
import { affiliatePageRoute } from "@/constants/routes";

export const CoffeeCupIcon = ({
  size = 16,
  color = "#ffffff",
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.55132 2.68377C4.68743 2.27543 5.06957 2 5.5 2H18.5C18.9304 2 19.3126 2.27543 19.4487 2.68377L20.2208 5H20.5C21.0523 5 21.5 5.44772 21.5 6C21.5 6.55228 21.0523 7 20.5 7H19.5H19.405L17.995 21.0995C17.9439 21.6107 17.5138 22 17 22H7C6.48625 22 6.05608 21.6107 6.00496 21.0995L4.59501 7H4.5H3.5C2.94772 7 2.5 6.55228 2.5 6C2.5 5.44772 2.94772 5 3.5 5H3.77924L4.55132 2.68377ZM6.60499 7L7.90499 20H16.095L17.395 7H6.60499ZM18.1126 5H5.88743L6.22076 4H17.7792L18.1126 5Z"
      />
    </svg>
  );
};

export const DollarIcon = ({
  size = 16,
  color = "#ffffff",
}: {
  size?: number;
  color?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 9.08333L14.3563 8.96356C13.9968 8.66403 13.5438 8.5 13.0759 8.5H10.75C9.7835 8.5 9 9.2835 9 10.25V10.25C9 11.2165 9.7835 12 10.75 12H13.25C14.2165 12 15 12.7835 15 13.75V13.75C15 14.7165 14.2165 15.5 13.25 15.5H10.412C9.8913 15.5 9.39114 15.2969 9.01782 14.934L9 14.9167"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8L12 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17V16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Profile = () => {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.card}>
      <div className={styles.textBlock}>
        <img
          src={"/logo_red.jpg"}
          alt={formatMessage({ id: "common.name" })}
          className={styles.imageDesktop}
        />
        <div className={styles.lineBlock}>
          <h3
            className={styles.title}
            dangerouslySetInnerHTML={{
              __html: formatMessage({ id: "home.profile.title" }),
            }}
          />
          <img
            src={"/logo_red.jpg"}
            alt={formatMessage({ id: "common.name" })}
            className={styles.imageMobile}
          />
        </div>

        <div>
          <p className={styles.description}>
            {formatMessage({ id: "home.profile.text1" })}
          </p>
          <p className={styles.description}>
            {formatMessage({ id: "home.profile.text2" })}
          </p>
          <p className={styles.description}>
            {formatMessage({ id: "home.profile.text3" })}
          </p>
          <p className={styles.description}>
            {formatMessage({ id: "home.profile.text4" })}
          </p>
        </div>

        <div className={styles.icons}>
          <Link
            href={`https://www.threads.com/@${THREADS_NAME}`}
            target="_blank"
          >
            <ThreadsIcon size={32} />
          </Link>
          <Link
            href={`https://www.instagram.com/${INSTAGRAM_NAME}`}
            target="_blank"
          >
            <InstagramIcon size={30} />
          </Link>
          <Link href={`mailto:${EMAIL}`}>
            <EmailIcon size={38} />
          </Link>
          <Link
            href={`https://seleniquestudio.gumroad.com/coffee`}
            target="_blank"
            title="Buy me a coffee"
          >
            <CoffeeCupIcon size={32} color="#ffffff" />
          </Link>
          <Link href={affiliatePageRoute.getUrl(locale)}>
            <DollarIcon size={36} color="#ffffff" />
          </Link>
        </div>

        {/* <p className={styles.description}>
          💡 {formatMessage({ id: "home.profile.item1" })} <br />
          💻 {formatMessage({ id: "home.profile.item2" })}  <br />
          🤝 {formatMessage({ id: "home.profile.item3" })}  <br />
          💃 {formatMessage({ id: "home.profile.item4" })}  <br />
          ✨ {formatMessage({ id: "home.profile.item5" })}  <br />
        </p> */}
      </div>
    </div>
  );
};

export default Profile;
