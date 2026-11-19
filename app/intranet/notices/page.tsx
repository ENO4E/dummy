import type { Metadata } from "next";
import styles from "../intranet.module.css";
import { notices } from "../data";

export const metadata: Metadata = { title: "お知らせ" };

export default function Notices() {
  return (
    <>
      <h1 className={styles.h1}>お知らせ</h1>
      <div className={styles.stack}>
        {notices.map((n) => (
          <article key={n.title} className={styles.panel}>
            <p className={styles.meta}>
              <time>{n.date}</time>
              <span className={n.category === "重要" ? styles.badgeRed : styles.badge}>{n.category}</span>
            </p>
            <h2 className={styles.noticeTitle}>{n.title}</h2>
            <p className={styles.noticeBody}>{n.body}</p>
          </article>
        ))}
      </div>
    </>
  );
}
