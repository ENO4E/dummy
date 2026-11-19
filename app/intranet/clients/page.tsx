import type { Metadata } from "next";
import styles from "../intranet.module.css";
import ClientTable from "./ClientTable";

export const metadata: Metadata = { title: "顧問先一覧" };

export default function Clients() {
  return (
    <>
      <h1 className={styles.h1}>顧問先一覧</h1>
      <ClientTable />
    </>
  );
}
