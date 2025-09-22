import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import styles from "./page.module.css";

import { Hero } from "./sections/hero";
import Lesson from "./sections/lesson";
import FAQ from "./sections/faq";
import Benefits from "./sections/benefits";
import HowDoWeWork from "./sections/how-do-we-work";
import Examples from "./sections/examples";
import Price from "./sections/price";
import WhatYouGet from "./sections/what-you-get";
import Contacts from "../products/sections/contacts";

export default function IntensiveNeiroVideo() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <main className={styles.main}>
        <Lesson index={1} />
        <Lesson index={2} />
        <Lesson index={3} />
        <Lesson index={4} />
        <WhatYouGet />
        {/* <WhatIsThat />
        <Benefits />
        <HowDoWeWork />
        <WhatYouGet />
        <Price /> */}
        <FAQ />
        {/* <Examples /> */}
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
