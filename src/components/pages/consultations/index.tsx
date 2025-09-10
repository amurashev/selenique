import { Hero } from "./sections/hero";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import styles from "./page.module.css";
import WhoIsClient from "./sections/who-is-client";
import WhatYouGet from "./sections/what-you-get";
import Risks from "./sections/risks";
import Examples from "./sections/examples";
import WhatTeach from "./sections/what-teach";
import FAQ from "./sections/faq";
import Form from "./sections/form";
import Prices from "./sections/prices";


export default function ConsultationsPage() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <main className={styles.main}>
        <WhoIsClient />
        <WhatYouGet />
        <WhatTeach />
        <Risks />
        <Examples />
        <Prices />
        <Form />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
