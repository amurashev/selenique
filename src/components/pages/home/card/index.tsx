import React from "react";
import styles from "./styles.module.css";

const Card = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.textBlock}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
