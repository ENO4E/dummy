import Link from "next/link";
import styles from "./page.module.css";

const demos = [
  {
    href: "/hp/",
    label: "Website",
    title: "ホームページ",
    text: "会計事務所の公開サイト。サービス紹介・料金・事務所案内・お問い合わせフォーム。",
    tags: ["4ページ", "スマホ対応"],
    accent: "teal",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
      </svg>
    ),
  },
  {
    href: "/intranet/",
    label: "Intranet",
    title: "イントラネット",
    text: "所内向けポータル。お知らせ・顧問先一覧・申告スケジュール・書類をひとまとめに。",
    tags: ["5ページ", "検索・絞り込み"],
    accent: "blue",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M9 9v11" />
      </svg>
    ),
  },
] as const;

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.wrap}>
        <header className={styles.head}>
          <span className={styles.pill}>
            <span className={styles.dot} />
            Demo
          </span>
          <h1 className={styles.title}>デモを選んでください</h1>
          <p className={styles.lead}>営業デモ用のサンプルです。表示されている事務所・顧問先などはすべて架空です。</p>
        </header>

        <div className={styles.grid}>
          {demos.map((d) => (
            <Link key={d.href} href={d.href} className={`${styles.card} ${styles[d.accent]}`}>
              <div className={styles.icon}>{d.icon}</div>
              <span className={styles.label}>{d.label}</span>
              <h2 className={styles.cardTitle}>{d.title}</h2>
              <p className={styles.cardText}>{d.text}</p>
              <div className={styles.foot}>
                <div className={styles.tags}>
                  {d.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className={styles.domain}>dummy.tax-plan.net</p>
      </div>
    </main>
  );
}
