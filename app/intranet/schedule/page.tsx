import type { Metadata } from "next";
import styles from "../intranet.module.css";
import { deadlines } from "../data";

export const metadata: Metadata = { title: "申告スケジュール" };

export default function Schedule() {
  return (
    <>
      <h1 className={styles.h1}>申告スケジュール</h1>
      <section className={styles.panel}>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>期限</th>
                <th>内容</th>
                <th>対象</th>
                <th>状況</th>
              </tr>
            </thead>
            <tbody>
              {deadlines.map((d) => (
                <tr key={d.title}>
                  <td>{d.date}</td>
                  <td>{d.title}</td>
                  <td>{d.target}</td>
                  <td>
                    <span className={d.done ? styles.badgeGreen : styles.badgeYellow}>{d.done ? "完了" : "未完了"}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
