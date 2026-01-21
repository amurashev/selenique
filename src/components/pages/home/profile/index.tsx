import React from "react";
import styles from "./styles.module.css";

const Profile = () => {
  return (
    <div className={styles.card}>
      <div className={styles.textBlock}>
        <h3 className={styles.title}>Selenique.Studio</h3>
        <p className={styles.description}>
          💡 Creative studio <br />
          💻 AI Visual Content for Brands <br />
          🤝 Open for Collab <br />
          💃 Fashion — is our profession <br />
          ✨ Driven to inspire <br />
        </p>
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
