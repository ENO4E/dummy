import type { Metadata } from "next";
import styles from "./intranet.module.css";
import SideNav from "./SideNav";
import { me } from "./data";

export const metadata: Metadata = {
  title: { default: "社内ポータル", template: "%s | 社内ポータル" },
};

export default function IntranetLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <aside className={styles.side}>
        <div className={styles.brand}>
          社内ポータル
          <span>ソラノ会計事務所</span>
        </div>
        <SideNav />
      </aside>
      <div className={styles.body}>
        <header className={styles.topbar}>
          <span className={styles.demo}>デモ環境</span>
          <span className={styles.user}>
            {me.dept}　{me.name}
          </span>
        </header>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
