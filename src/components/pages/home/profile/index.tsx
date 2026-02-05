import React from "react";
import { useIntl } from "react-intl";

import styles from "./styles.module.css";

const Profile = () => {
  const { formatMessage, locale } = useIntl();

  return (
    <div className={styles.card}>
      <div className={styles.textBlock}>
        <h3 className={styles.title}>{formatMessage({ id: "home.profile.title" })} </h3>
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

        {/* <p className={styles.description}>
          💡 {formatMessage({ id: "home.profile.item1" })} <br />
          💻 {formatMessage({ id: "home.profile.item2" })}  <br />
          🤝 {formatMessage({ id: "home.profile.item3" })}  <br />
          💃 {formatMessage({ id: "home.profile.item4" })}  <br />
          ✨ {formatMessage({ id: "home.profile.item5" })}  <br />
        </p> */}
      </div>
      <img
        src={"/logo_red.jpg"}
        alt={"Selenique.Studio"}
        className={styles.image}
      />
    </div>
  );
};

export default Profile;
