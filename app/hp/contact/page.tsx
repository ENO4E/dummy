import type { Metadata } from "next";
import styles from "../hp.module.css";
import { office } from "../data";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "お問い合わせ" };

export default function Contact() {
  return (
    <>
      <section className={styles.pageHead}>
        <div className={styles.inner}>
          <h1>お問い合わせ</h1>
          <p>
            お電話（{office.tel}）またはフォームからご連絡ください。2営業日以内にご返信します。
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={`${styles.inner} ${styles.narrow}`}>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
