"use client";

import { useState } from "react";
import styles from "../intranet.module.css";
import { clients } from "../data";

const badge = { 順調: styles.badgeGreen, 資料待ち: styles.badgeYellow, 要対応: styles.badgeRed };

export default function ClientTable() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("すべて");
  const rows = clients.filter(
    (c) =>
      (q === "" || c.name.includes(q) || c.code.includes(q.toUpperCase()) || c.staff.includes(q)) &&
      (status === "すべて" || c.status === status),
  );

  return (
    <section className={styles.panel}>
      <div className={styles.filters}>
        <input placeholder="顧問先名・コード・担当者で検索" value={q} onChange={(e) => setQ(e.target.value)} />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>すべて</option>
          <option>順調</option>
          <option>資料待ち</option>
          <option>要対応</option>
        </select>
        <span className={styles.count}>{rows.length}件</span>
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>コード</th>
              <th>顧問先名</th>
              <th>区分</th>
              <th>決算月</th>
              <th>担当</th>
              <th>状況</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => (
              <tr key={c.code}>
                <td>{c.code}</td>
                <td>{c.name}</td>
                <td>{c.type}</td>
                <td>{c.fiscalMonth}月</td>
                <td>{c.staff}</td>
                <td>
                  <span className={badge[c.status]}>{c.status}</span>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className={styles.empty}>
                  該当する顧問先はありません
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
