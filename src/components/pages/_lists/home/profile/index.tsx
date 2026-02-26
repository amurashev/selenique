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
          <Link href={`https://www.threads.com/@${THREADS_NAME}`} target="_blank">
            <ThreadsIcon size={32} />
          </Link>
          <Link href={`https://www.instagram.com/${INSTAGRAM_NAME}`} target="_blank">
            <InstagramIcon size={30} />
          </Link>
          <Link href={`mailto:${EMAIL}`}>
            <EmailIcon size={38} />
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
