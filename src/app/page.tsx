
import styles from "./page.module.css";
import { Hero } from "@/components/hero";
import { Packs } from "@/components/packs";
import Header from "@/components/header";
import { FAQ } from "@/components/faq";
import Footer from "@/components/footer";
import Examples from "@/components/examples";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
   
        <Hero />
        <Packs />
        <FAQ />
        <Examples />
      </main>
      <Footer />
    </div>
  );
}
