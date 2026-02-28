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
      <path
        d="M9 9H9.01M15 15H15.01M16 8L8 16M17.9012 4.99851C18.1071 5.49653 18.5024 5.8924 19.0001 6.09907L20.7452 6.82198C21.2433 7.02828 21.639 7.42399 21.8453 7.92206C22.0516 8.42012 22.0516 8.97974 21.8453 9.47781L21.1229 11.2218C20.9165 11.7201 20.9162 12.2803 21.1236 12.7783L21.8447 14.5218C21.9469 14.7685 21.9996 15.0329 21.9996 15.2999C21.9997 15.567 21.9471 15.8314 21.8449 16.0781C21.7427 16.3249 21.5929 16.549 21.4041 16.7378C21.2152 16.9266 20.991 17.0764 20.7443 17.1785L19.0004 17.9009C18.5023 18.1068 18.1065 18.5021 17.8998 18.9998L17.1769 20.745C16.9706 21.2431 16.575 21.6388 16.0769 21.8451C15.5789 22.0514 15.0193 22.0514 14.5212 21.8451L12.7773 21.1227C12.2792 20.9169 11.7198 20.9173 11.2221 21.1239L9.47689 21.8458C8.97912 22.0516 8.42001 22.0514 7.92237 21.8453C7.42473 21.6391 7.02925 21.2439 6.82281 20.7464L6.09972 19.0006C5.8938 18.5026 5.49854 18.1067 5.00085 17.9L3.25566 17.1771C2.75783 16.9709 2.36226 16.5754 2.15588 16.0777C1.94951 15.5799 1.94923 15.0205 2.1551 14.5225L2.87746 12.7786C3.08325 12.2805 3.08283 11.7211 2.8763 11.2233L2.15497 9.47678C2.0527 9.2301 2.00004 8.96568 2 8.69863C1.99996 8.43159 2.05253 8.16715 2.15472 7.92043C2.25691 7.67372 2.40671 7.44955 2.59557 7.26075C2.78442 7.07195 3.00862 6.92222 3.25537 6.8201L4.9993 6.09772C5.49687 5.89197 5.89248 5.4972 6.0993 5.00006L6.82218 3.25481C7.02848 2.75674 7.42418 2.36103 7.92222 2.15473C8.42027 1.94842 8.97987 1.94842 9.47792 2.15473L11.2218 2.87712C11.7199 3.08291 12.2793 3.08249 12.7771 2.87595L14.523 2.15585C15.021 1.94966 15.5804 1.9497 16.0784 2.15597C16.5763 2.36223 16.972 2.75783 17.1783 3.25576L17.9014 5.00153L17.9012 4.99851ZM9.5 9C9.5 9.27614 9.27614 9.5 9 9.5C8.72386 9.5 8.5 9.27614 8.5 9C8.5 8.72386 8.72386 8.5 9 8.5C9.27614 8.5 9.5 8.72386 9.5 9ZM15.5 15C15.5 15.2761 15.2761 15.5 15 15.5C14.7239 15.5 14.5 15.2761 14.5 15C14.5 14.7239 14.7239 14.5 15 14.5C15.2761 14.5 15.5 14.7239 15.5 15Z"
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
            <DollarIcon size={30} color="#ffffff" />
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
