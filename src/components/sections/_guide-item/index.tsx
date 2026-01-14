import React from "react";

import styles from "./styles.module.css";

interface GuideItemProps {
  name: string
  image: string
}

export const GuideItem: React.FC<GuideItemProps> = ({ name, image }) => {
  return (
    <section className={styles.box}>
      <div className={styles.boxContainer}>
        {/* <h2 className={styles.title}>{name}</h2> */}
        <img
            src={image}
            alt={name}
            className={styles.image}
          />
      </div>
    </section>
  );
};

export default GuideItem;
