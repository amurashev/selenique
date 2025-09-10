import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const ServiceItem = ({
  image,
  title,
  url,
}: {
  image: string;
  title: string;
  url: string;
}) => {
  return (
    <Link href={url} className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.textBlock}>
        <h3 className={styles.title}>{title}</h3>
      </div>
    </Link>
  );
};

export default ServiceItem;
