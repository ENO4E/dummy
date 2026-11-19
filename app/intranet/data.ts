// デモ用の架空データ。実在の人物・会社ではない
export const me = { name: "佐藤 花子", dept: "税務1課" };

export const notices = [
  { date: "2026-11-18", category: "重要", title: "年末調整の資料回収スケジュールについて", body: "顧問先への資料依頼は11/25までに完了してください。回収状況は顧問先一覧の「状況」欄に反映をお願いします。" },
  { date: "2026-11-14", category: "総務", title: "年末年始の休業日（12/29〜1/4）", body: "期間中の緊急連絡は所長の携帯へ。システムは通常どおり利用できます。" },
  { date: "2026-11-10", category: "研修", title: "11/27 所内研修「電子帳簿保存法の実務」", body: "15:00〜17:00 会議室A。オンライン参加も可能です。" },
  { date: "2026-11-05", category: "システム", title: "会計ソフトのバージョンアップ（11/22 夜間）", body: "22:00〜翌2:00は利用できません。作業中のデータは事前に保存してください。" },
  { date: "2026-10-30", category: "総務", title: "健康診断の受診期限は12/15です", body: "未受診の方は総務までご連絡ください。" },
];

export type Client = {
  code: string;
  name: string;
  type: "法人" | "個人";
  fiscalMonth: number;
  staff: string;
  status: "順調" | "資料待ち" | "要対応";
};

export const clients: Client[] = [
  { code: "C001", name: "株式会社サンプル商事", type: "法人", fiscalMonth: 3, staff: "佐藤", status: "順調" },
  { code: "C002", name: "デモ工業株式会社", type: "法人", fiscalMonth: 12, staff: "佐藤", status: "資料待ち" },
  { code: "C003", name: "合同会社テストラボ", type: "法人", fiscalMonth: 9, staff: "鈴木", status: "順調" },
  { code: "C004", name: "架空 太郎（飲食店）", type: "個人", fiscalMonth: 12, staff: "高橋", status: "要対応" },
  { code: "C005", name: "株式会社ダミー不動産", type: "法人", fiscalMonth: 6, staff: "鈴木", status: "順調" },
  { code: "C006", name: "見本 花子（デザイン事務所）", type: "個人", fiscalMonth: 12, staff: "佐藤", status: "資料待ち" },
  { code: "C007", name: "株式会社モックフーズ", type: "法人", fiscalMonth: 11, staff: "高橋", status: "要対応" },
  { code: "C008", name: "有限会社サンプル建設", type: "法人", fiscalMonth: 1, staff: "鈴木", status: "順調" },
];

export const deadlines = [
  { date: "2026-11-30", title: "9月決算法人の申告・納付期限", target: "合同会社テストラボ ほか2社", done: false },
  { date: "2026-12-10", title: "源泉所得税の納付（11月分）", target: "給与計算受託先 全社", done: false },
  { date: "2026-12-25", title: "10月決算法人の申告期限", target: "該当なし", done: true },
  { date: "2027-01-20", title: "源泉所得税の納付（納期の特例）", target: "特例適用先 5社", done: false },
  { date: "2027-01-31", title: "法定調書・給与支払報告書・償却資産申告", target: "顧問先 全社", done: false },
  { date: "2027-02-01", title: "11月決算法人の申告・納付期限", target: "株式会社モックフーズ", done: false },
  { date: "2027-03-15", title: "所得税の確定申告期限", target: "個人顧問先 全件", done: false },
];

export const todaySchedule = [
  { time: "10:00", title: "デモ工業株式会社 月次面談（オンライン）" },
  { time: "13:30", title: "所内ミーティング（会議室A）" },
  { time: "15:00", title: "架空 太郎 様 来所（確定申告の事前相談）" },
];

export const documents = [
  { group: "規程・マニュアル", items: ["就業規則", "経費精算マニュアル", "情報セキュリティ規程", "テレワーク規程"] },
  { group: "業務テンプレート", items: ["顧問契約書（法人）", "顧問契約書（個人）", "資料依頼チェックリスト", "決算報告書の表紙"] },
  { group: "申請書", items: ["休暇申請書", "出張申請書", "備品購入申請書"] },
];
