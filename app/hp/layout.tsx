import type { Metadata } from "next";
import Link from "next/link";
import styles from "./hp.module.css";
import { office } from "./data";

export const metadata: Metadata = {
  title: { default: office.name, template: `%s | ${office.name}` },
  description: "税務顧問・決算申告・会社設立・相続まで、中小企業と個人事業主を支える会計事務所です。（デモサイト）",
};

const nav = [
  { href: "/hp/", label: "トップ" },
  { href: "/hp/services/", label: "サービス" },
  { href: "/hp/about/", label: "事務所案内" },
  { href: "/hp/contact/", label: "お問い合わせ" },
];

export default function HpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.site}>
      <div className={styles.demoBar}>このサイトは営業デモ用の架空の事務所サイトです</div>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/hp/" className={styles.logo}>
            <span className={styles.logoMark}>S</span>
            {office.name}
          </Link>
          <nav className={styles.nav}>
            {nav.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <div>
            <p className={styles.footerName}>{office.name}</p>
            <p>{office.address}</p>
            <p>
              TEL {office.tel}　{office.hours}
            </p>
          </div>
          <p className={styles.copy}>© {office.nameEn}（デモ）</p>
        </div>
      </footer>
    </div>
  );
}
