import React from "react";

import styles from "./styles.module.css";


export const Section: React.FC<{ name: string }> = ({ name }) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <h3 className={styles.sectionTitle}>{name}</h3>
      </div>
    </section>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className={styles.box}>
      <div className={styles.boxContainer}>

        <h2>Как это работает?</h2>
        <div className={styles.sections}>
        <Section name="Найди реальный продукт" />
        <Section name="Используй Krea / Midjourney для модели" />
        <Section name="Собери сцену в Runway" />
        <Section name="Опционально подкорректируй в PS (необязательно)" />
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;
