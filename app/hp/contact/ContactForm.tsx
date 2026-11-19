"use client";

import { useState } from "react";
import styles from "../hp.module.css";

// デモ用のため送信はしない。送信ボタンで完了表示に切り替えるだけ
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className={styles.done}>
        <h2>送信しました（デモ）</h2>
        <p>デモサイトのため、実際には送信されていません。</p>
        <button type="button" className={styles.btnPrimary} onClick={() => setSent(false)}>
          フォームに戻る
        </button>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label>
        お名前<span className={styles.req}>必須</span>
        <input name="name" required placeholder="山田 太郎" />
      </label>
      <label>
        会社名・屋号
        <input name="company" placeholder="株式会社サンプル" />
      </label>
      <label>
        メールアドレス<span className={styles.req}>必須</span>
        <input name="email" type="email" required placeholder="sample@example.com" />
      </label>
      <label>
        ご相談の種類
        <select name="type" defaultValue="税務顧問">
          <option>税務顧問</option>
          <option>決算・申告</option>
          <option>会社設立・創業支援</option>
          <option>相続・事業承継</option>
          <option>その他</option>
        </select>
      </label>
      <label>
        ご相談内容<span className={styles.req}>必須</span>
        <textarea name="message" rows={6} required />
      </label>
      <button type="submit" className={styles.btnPrimary}>
        送信する
      </button>
    </form>
  );
}
