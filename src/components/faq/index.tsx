import React from "react";

import styles from "./styles.module.css";

export const Section: React.FC<{
  name: string;
  text: string;
  imageSrc?: string;
  isRight?: boolean;
}> = ({ name, text = "", imageSrc = "/screen_1.png", isRight = false }) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.sectionContainer} ${isRight ? styles.sectionContainerRight : ''}`}>
        <div className={`${styles.sectionTextBox} ${isRight ? styles.sectionTextBoxRight : ''}`}>
          <h3 className={styles.sectionTitle}>{name}</h3>
          <p className={styles.sectionText}>{text}</p>
        </div>

        <div className={styles.sectionVisual}>
          <img
            src={imageSrc}
            alt="Fashion image"
            className={styles.visualImage}
          />
        </div>
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
          <Section
            name="Найди реальный продукт"
            text="Выбираешь любое фото товара — от брендового лукбука до снимка с маркетплейса. Чем лучше качество исходника, тем реалистичнее будет итоговая сцена."
          />
          <Section
            isRight
            name="Используй Krea / Midjourney для модели"
            text="Загружаешь фото и с помощью нейросетей подбираешь или создаёшь модель, идеально подходящую по стилю и пропорциям."
          />
          <Section
            name="Собери сцену в Runway"
            text="Размещаешь модель и продукт в единой композиции, подбираешь фон, свет и атмосферу. Здесь рождается визуал, который выглядит как профессиональная фотосессия."
          />
          <Section
            isRight
            name="Опционально подкорректируй в PS (необязательно)"
            text="Если нужно, можно подправить мелочи — цвет, тени или фон. Но результат уже будет готов к использованию и без этого шага."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
