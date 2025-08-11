import styles from "./page.module.css";
import { Hero } from "@/components/hero";
import { Packs } from "@/components/packs";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
   
        <Hero />
        <Packs />
      
      </main>
      <footer className={styles.footer}>
    
    
      </footer>
    </div>
  );
}
