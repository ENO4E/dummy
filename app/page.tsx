import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>デモ用開発環境</h1>
        <p className={styles.lead}>dummy.tax-plan.net</p>
        <ul className={styles.links}>
          <li>
            <Link href="/hp/">HP（ホームページ）のデモ</Link>
          </li>
          <li>
            <Link href="/intranet/">イントラネットのデモ</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
