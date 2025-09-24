import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import styles from "./page.module.css";

import { Hero } from "./sections/hero";
import Lessons from "./sections/lesson";
import FAQ from "./sections/faq";
import Description from "./sections/description";
// import Examples from "./sections/examples";
import Price from "./sections/price";
import WhatYouGet from "./sections/what-you-get";
import Contacts from "../products/sections/contacts";
import NearStart from "./sections/near-start";

export default function IntensiveNeiroVideo() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <main className={styles.main}>
        <Description />
        <Lessons />
        <WhatYouGet />
        <NearStart />
        <Price />
        <FAQ />
        <Contacts isGray />
      </main>
      <Footer />
    </div>
  );
}
