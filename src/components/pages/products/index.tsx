import { Hero } from "@/components/pages/products/sections/hero";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

import styles from "./page.module.css";
import BeforeAfter from "@/components/pages/products/sections/before-after";
import WhoIsClient from "./sections/who-is-client";
import WhatYouGet from "./sections/what-you-get";
import Portfolio from "./sections/portfolio";
import Prices from "./sections/prices";
import Process from "./sections/process";
import FAQ from "./sections/faq";
import WhereUse from "./sections/where-use";

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* <Header /> */}
      <Hero />
      <main className={styles.main}>
        <BeforeAfter />
        <WhatYouGet />
        <WhoIsClient />
        <WhereUse />
        <Portfolio />
        <Process />
        <Prices />
        <FAQ />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
