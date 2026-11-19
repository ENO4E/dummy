import Link from "next/link";
import styles from "./intranet.module.css";
import { clients, deadlines, me, notices, todaySchedule } from "./data";

export default function IntranetHome() {
  const mine = clients.filter((c) => c.staff === me.name.split(" ")[0]);
  const upcoming = deadlines.filter((d) => !d.done).slice(0, 4);
  const stats = [
    { label: "担当顧問先", value: `${mine.length}件` },
    { label: "資料待ち", value: `${clients.filter((c) => c.status === "資料待ち").length}件` },
    { label: "要対応", value: `${clients.filter((c) => c.status === "要対応").length}件` },
    { label: "直近の期限", value: upcoming[0]?.date.slice(5).replace("-", "/") ?? "-" },
  ];

  return (
    <>
      <h1 className={styles.h1}>おはようございます、{me.name}さん</h1>
      <div className={styles.stats}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <span>{s.label}</span>
            <strong>{s.value}</strong>
          </div>
        ))}
      </div>

      <div className={styles.cols}>
        <section className={styles.panel}>
          <div className={styles.panelHead}>
            <h2>お知らせ</h2>
            <Link href="/intranet/notices/">すべて見る</Link>
          </div>
          <ul className={styles.list}>
            {notices.slice(0, 4).map((n) => (
              <li key={n.title}>
                <time>{n.date}</time>
                <span className={n.category === "重要" ? styles.badgeRed : styles.badge}>{n.category}</span>
                {n.title}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHead}>
            <h2>今日の予定</h2>
          </div>
          <ul className={styles.list}>
            {todaySchedule.map((s) => (
              <li key={s.time}>
                <strong className={styles.time}>{s.time}</strong>
                {s.title}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHead}>
            <h2>近づいている期限</h2>
            <Link href="/intranet/schedule/">一覧へ</Link>
          </div>
          <ul className={styles.list}>
            {upcoming.map((d) => (
              <li key={d.title}>
                <time>{d.date}</time>
                {d.title}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.panel}>
          <div className={styles.panelHead}>
            <h2>担当顧問先</h2>
            <Link href="/intranet/clients/">一覧へ</Link>
          </div>
          <ul className={styles.list}>
            {mine.map((c) => (
              <li key={c.code}>
                <StatusBadge status={c.status} />
                {c.name}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

function StatusBadge({ status }: { status: string }) {
  const cls = status === "要対応" ? styles.badgeRed : status === "資料待ち" ? styles.badgeYellow : styles.badgeGreen;
  return <span className={cls}>{status}</span>;
}
