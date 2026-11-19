import type { Metadata } from "next";
import styles from "../hp.module.css";
import { office } from "../data";

export const metadata: Metadata = { title: "事務所案内" };

const rows: [string, string][] = [
  ["事務所名", office.name],
  ["代表", `税理士 ${office.representative}`],
  ["設立", office.founded],
  ["所在地", office.address],
  ["電話", office.tel],
  ["営業時間", office.hours],
  ["スタッフ", office.staff],
];

export default function About() {
  return (
    <>
      <section className={styles.pageHead}>
        <div className={styles.inner}>
          <h1>事務所案内</h1>
          <p>地域の中小企業とともに歩んできた会計事務所です。</p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={`${styles.inner} ${styles.narrow}`}>
          <h2 className={styles.h2}>代表あいさつ</h2>
          <p>
            経営者の方の多くは、本業の傍らで経理や税金のことに頭を悩ませています。私たちは、その負担を少しでも軽くし、数字をもとに前向きな判断ができるようお手伝いすることを使命としています。
          </p>
          <p>
            申告書を作るだけの事務所ではなく、「何でも相談できる身近な存在」であり続けたいと考えています。どうぞお気軽にお声がけください。
          </p>
          <p className={styles.sign}>代表税理士　{office.representative}</p>
        </div>
      </section>
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={`${styles.inner} ${styles.narrow}`}>
          <h2 className={styles.h2}>事務所概要</h2>
          <dl className={styles.dl}>
            {rows.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
