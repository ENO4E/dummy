import type { Metadata } from "next";
import styles from "../intranet.module.css";
import { documents } from "../data";

export const metadata: Metadata = { title: "書類・規程" };

export default function Documents() {
  return (
    <>
      <h1 className={styles.h1}>書類・規程</h1>
      <p className={styles.sub}>デモ環境のため、ファイルは開けません。</p>
      <div className={styles.cols}>
        {documents.map((g) => (
          <section key={g.group} className={styles.panel}>
            <div className={styles.panelHead}>
              <h2>{g.group}</h2>
            </div>
            <ul className={styles.list}>
              {g.items.map((i) => (
                <li key={i}>📄 {i}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
