export const sampleData = [
    {
        title: "#1231 \"広告構造データマートへ格納\" リリース",
        weight: 0,
        labels: ["PBI", "PPBI", "広告構造"],
        url: "https://gitlab.devsep.com/pyxis-enterprise/general/issues/issues/1319",
    },
    {
        title: "広告構造対応したクリエイティブレポートが過去にさかのぼって復旧される",
        weight: 3,
        labels: ["PBI", "PPBI", "広告構造"],
        url: "https://gitlab.devsep.com/pyxis-enterprise/general/issues/issues/1312",
    },
    {
        title: "選択したクリエイティブの日別のパフォーマンス推移が閲覧できる [Blocked #1348]",
        weight: 0,
        labels: ["Blocking", "PBI", "デイリーグラフ"],
        url: "https://gitlab.devsep.com/pyxis-enterprise/general/issues/issues/1211",
    },
    {
        title: "クリエイティブレポートの csv/excel ダウンロードが負荷軽減できる",
        weight: 0,
        labels: ["Blocking", "Excel raw data", "PBI", "PPBI"],
        url: "https://gitlab.devsep.com/pyxis-enterprise/general/issues/issues/1299",
    },
    {
        title: "[どのように合計・平均値を表示するかを決めること] タイル型でもCRレポートフィルタに合致した全CRの合計値と平均値を閲覧できる",
        weight: 0,
        labels: ["Creative report filter", "PBI"],
        url: "https://gitlab.devsep.com/pyxis-enterprise/general/issues/issues/1303",
    },
];

export const sampleDescription = "## 解決したいこと(Why)\n" +
    "\n" +
    "issues#1231 のリリースを行う。\n" +
    "\n" +
    "## Done 条件\n" +
    "\n" +
    "## 完了条件(What)\n" +
    "\n" +
    "### やること\n" +
    "\n" +
    "#### リリース作業\n" +
    "\n" +
    "計: 2.5 h\n" +
    "\n" +
    "1. prod Data Mart バックアップ\n" +
    "1. prod Data Mart ダンプ\n" +
    "    * #1312 の数値チェックで利用するため\n" +
    "1. リリース前に dev, prod の管理画面にログインし、30日前後前の日時に指定して結果を保存しておく\n" +
    "1. Data Mart マイグレーション\n" +
    "    * dev の クリエイティブレポート テーブル削除とマイグレーション実行\n" +
    "    * prod の クリエイティブレポート テーブル削除とマイグレーション実行\n" +
    "1. workflow リリース\n" +
    "    * https://gitlab.devsep.com/pyxis-enterprise/general/workflow/merge_requests/187 のマージ/CI 完了\n" +
    "1. 当日の Digdag セッションをリトライ\n" +
    "1. 動作確認(user-site/webapp-backend)\n" +
    "    * Data Mart のスキーマ変更が既存の動作に影響していないこと\n" +
    "        * 3 で取得したデータと同じデータがブラウザに返ってきていることを確認する\n" +
    "1. https://gitlab.devsep.com/pyxis-enterprise/general/webapp-backend/merge_requests/297 のマージ\n" +
    "\n" +
    "### やらないこと\n" +
    "\n" +
    "## リリース影響\n" +
    "\n" +
    "## プロダクトレビュー中のデモ実施者\n" +
    "\n" +
    "## 検討内容(How)";