import React from "react";

import styles from "./styles.module.css";

interface PackProps {
  name: string
  imageSrc: string
}

export const Pack: React.FC<PackProps> = ({ name, imageSrc }) => {
  return (
    <section className={styles.box}>
      <div className={styles.boxContainer}>
        {/* <h2 className={styles.title}>{name}</h2> */}
        <img
            src={imageSrc}
            alt={name}
            className={styles.image}
          />
      </div>
    </section>
  );
};

export default Pack;
