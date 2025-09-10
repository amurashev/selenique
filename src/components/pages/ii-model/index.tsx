import { Hero } from "./sections/hero";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import styles from "./page.module.css";
import FAQ from "./sections/faq";
import Form from "../products/sections/form";
import WhatIsThat from "./sections/what-is-that";
import WhatYouGet from "./sections/what-you-get";
import Examples from "./sections/examples";
import Price from "./sections/price";

export default function IIModelPage() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <main className={styles.main}>
        <WhatIsThat />
        <WhatYouGet />
        <Examples />
        <Price />
        <Form type="ii_model" />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
