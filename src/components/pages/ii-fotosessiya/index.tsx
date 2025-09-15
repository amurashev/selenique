import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import styles from "./page.module.css";

import { Hero } from "./sections/hero";
import WhatIsThat from "./sections/what-is-that";
import FAQ from "./sections/faq";
import WhatYouGet from "./sections/what-you-get";
import HowDoWeWork from "./sections/how-do-we-work";
import Examples from "./sections/examples";
import Price from "./sections/price";

export default function IIPhotoPage() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <main className={styles.main}>
        <WhatIsThat />
        <WhatYouGet />
        <HowDoWeWork />
        <Price />
        <Examples />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
