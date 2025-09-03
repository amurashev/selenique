import { Hero } from "@/components/sections/hero";
import { Packs } from "@/components/sections/packs";
import Guides from "@/components/sections/guides";
import Header from "@/components/sections/header";
import { FAQ } from "@/components/sections/_faq";
import Footer from "@/components/sections/footer";
import Examples from "@/components/sections/examples";

import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Guides />
        <Packs />
        <FAQ />
        <Examples />
      </main>
      <Footer />
    </div>
  );
}
