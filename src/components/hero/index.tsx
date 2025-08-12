import React from "react";

import styles from "./styles.module.css";

interface HeroBotikaProps {
  /** Right-side image (group of models). PNG/JPG with transparent or white bg works best */
  imageSrc?: string;
}

export const Hero: React.FC<HeroBotikaProps> = ({
  imageSrc = "/hero_image.jpg",
}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        {/* Left: Copy */}
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>AI Fashion Ads & WOW Resources</h1>

          <p className={styles.heroSubtitle}>
            Guides, Prompts & Scenes — No Photoshop Required
          </p>
        </div>

        {/* Right: Image panel */}
        <div className={styles.heroVisual}>
          <div className={styles.visualPanel}>
            {/* Use an <img> so users can swap the asset easily */}
            <img
              src={imageSrc}
              alt="Fashion image"
              className={styles.visualImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
