import Link from 'next/link'

import styles from "./page.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.page}>
      <div  className={styles.main}>
        <div className={styles.box}>
        <h2 className="text-3xl font-bold">Not Found</h2>
        <p className="text-muted-foreground text-xl">
          Could not find requested resource
        </p>
        <Link href="/" className={styles.link}>
          Back to Home page
        </Link>
        </div>
      </div>
    </div>
  )
}