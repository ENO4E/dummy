"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./intranet.module.css";

const items = [
  { href: "/intranet/", label: "ホーム", icon: "🏠" },
  { href: "/intranet/notices/", label: "お知らせ", icon: "📢" },
  { href: "/intranet/clients/", label: "顧問先一覧", icon: "🏢" },
  { href: "/intranet/schedule/", label: "申告スケジュール", icon: "📅" },
  { href: "/intranet/documents/", label: "書類・規程", icon: "📁" },
];

export default function SideNav() {
  const path = usePathname();
  const norm = (p: string) => (p.endsWith("/") ? p : `${p}/`);
  return (
    <nav className={styles.sideNav}>
      {items.map((i) => (
        <Link
          key={i.href}
          href={i.href}
          className={norm(path) === i.href ? styles.active : undefined}
        >
          <span aria-hidden>{i.icon}</span>
          {i.label}
        </Link>
      ))}
    </nav>
  );
}
