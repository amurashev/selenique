import { Hero } from "./sections/hero";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

import styles from "./page.module.css";
import WhoIsClient from "./sections/who-is-client";
import WhatYouGet from "./sections/what-you-get";
import Risks from "./sections/risks";
import Examples from "./sections/examples";
import WhatTeach from "./sections/what-teach";
import FAQ from "./sections/faq";
import Form from "./sections/form";


export default function ConsultationsPage() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <main className={styles.main}>
        <WhoIsClient />
        <WhatYouGet />
        <Risks />
        <Examples />
        <WhatTeach />
        <FAQ />
        <Form />
      </main>
      <Footer />
    </div>
  );
}
