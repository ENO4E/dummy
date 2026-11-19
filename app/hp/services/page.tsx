import type { Metadata } from "next";
import Link from "next/link";
import styles from "../hp.module.css";
import { prices, services } from "../data";

export const metadata: Metadata = { title: "サービス" };

export default function Services() {
  return (
    <>
      <section className={styles.pageHead}>
        <div className={styles.inner}>
          <h1>サービス</h1>
          <p>事業のステージに合わせて、必要なサポートをお選びいただけます。</p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.grid2}>
            {services.map((s) => (
              <div key={s.title} className={styles.card}>
                <h3>{s.title}</h3>
                <p className={styles.cardLead}>{s.summary}</p>
                <p>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <h2 className={styles.h2}>料金の目安</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>プラン</th>
                <th>料金</th>
                <th>備考</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((p) => (
                <tr key={p.plan}>
                  <td>{p.plan}</td>
                  <td>{p.price}</td>
                  <td>{p.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={styles.note}>※ 売上規模・仕訳数により変動します。表示はすべて税抜です。</p>
          <p className={styles.more}>
            <Link href="/hp/contact/">お見積りを依頼する →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
