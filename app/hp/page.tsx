import Link from "next/link";
import styles from "./hp.module.css";
import { news, services, strengths } from "./data";

export default function HpTop() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`${styles.inner} ${styles.heroInner}`}>
          <div className={styles.heroBody}>
            <p className={styles.heroSub}>中小企業・個人事業主の会計パートナー</p>
            <h1 className={styles.heroTitle}>
              数字の不安をなくして、
              <br />
              本業に集中できる毎日を。
            </h1>
            <p className={styles.heroText}>
              税務顧問から決算申告、会社設立、相続まで。経営の身近な相談相手として、事業の成長を支えます。
            </p>
            <div className={styles.heroActions}>
              <Link href="/hp/contact/" className={styles.btnPrimary}>
                無料相談を予約する
              </Link>
              <Link href="/hp/services/" className={styles.btnGhost}>
                サービスを見る
              </Link>
            </div>
          </div>
          <span className={styles.heroLetter} aria-hidden="true">
            A
          </span>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <h2 className={styles.h2}>サービス</h2>
          <div className={styles.grid3}>
            {services.map((s) => (
              <div key={s.title} className={styles.card}>
                <h3>{s.title}</h3>
                <p>{s.summary}</p>
              </div>
            ))}
          </div>
          <p className={styles.more}>
            <Link href="/hp/services/">サービスの詳細 →</Link>
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <h2 className={styles.h2}>選ばれる理由</h2>
          <div className={styles.grid3}>
            {strengths.map((s, i) => (
              <div key={s.title} className={styles.strength}>
                <span className={styles.num}>0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <h2 className={styles.h2}>お知らせ</h2>
          <ul className={styles.news}>
            {news.map((n) => (
              <li key={n.title}>
                <time>{n.date}</time>
                <span className={styles.tag}>{n.label}</span>
                <span>{n.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.inner}>
          <h2>初回のご相談は無料です</h2>
          <p>顧問契約の切り替えや、設立前のご相談もお気軽にどうぞ。</p>
          <Link href="/hp/contact/" className={styles.btnLight}>
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
