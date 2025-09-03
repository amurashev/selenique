import { Hero } from "./sections/hero";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

import styles from "./page.module.css";


export default function ConsultationsPage() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <main className={styles.main}>
      ConsultationsPage
      </main>
      <Footer />
    </div>
  );
}
