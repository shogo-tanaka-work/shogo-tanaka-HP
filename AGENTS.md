# Repository Guidelines

## プロジェクト構成とモジュール配置
- アプリ本体: `app/`（App Router、`layout.tsx`、`page.tsx`、グローバルスタイル）。
- UI: `components/sections/`（各セクション）、`components/ui/`（shadcn/ui）。
- データと型: `data/index.ts`、`types/index.ts` にサイトデータと型を集約。
- ユーティリティ/フック: `lib/utils.ts`、`hooks/` に再利用ロジック。
- アセット: `public/assets/` に画像・静的ファイル。
- 生成物: `.next/` と `out/`（編集しない）。

## ビルド・テスト・開発コマンド
- `npm run dev`（または `pnpm dev`）: 開発サーバー起動。
- `npm run build`: 本番ビルドを作成。
- `npm run start`: ビルド済みアプリを起動（SSR）。
- `npm run export`: 静的書き出しを `out/` に生成。
- `npm run lint`: ESLint/Next.js のルールを実行。
- `npx tsc --noEmit`: 型チェックのみ実行。

## コーディング規約・命名
- TypeScript: `strict` 有効。可能な限り明示的な型。必要に応じて `zod` で実行時検証。
- インデント: 半角スペース2。読みやすい短い行を心がける。
- React: コンポーネントは PascalCase（例: `ProfileSection.tsx`）。フックは `use` 始まりで `hooks/` 配置。
- データ駆動: 文言・一覧は `data/index.ts` を編集し直書きを避ける。
- スタイル: Tailwind CSS。共通UIは `components/ui/` に集約。
- インポート: `tsconfig.json` の `@/*` エイリアスを使用。

## テスト方針
- 現状テスト基盤は未導入。追加する場合は Vitest または Jest + React Testing Library を推奨。
- テスト命名: `*.test.ts(x)`。コンポーネント横置きまたは `__tests__/`。
- 重要画面の描画・アクセシビリティ状態・データマッピングを重点的にカバー。

## コミット/PR ガイドライン
- コミット: 簡潔な現在形サマリ＋必要ならスコープ（例: `profile: 画像を更新` / `profile: update hero image`）。
- PR: 変更概要・背景・影響範囲を記載。関連Issueをリンク。UI変更はスクリーンショット添付。`.next/` と `out/` は生成物。
- 変更は小さく焦点を絞る。スキーマ変更時は `README.md` や `data/types` を更新。

## セキュリティ/設定の注意
- 機密情報はコミットしない。設定は `next.config.mjs`、`tailwind.config.ts`、`postcss.config.mjs` を参照。
- 画像は `public/assets/`。サイズ最適化を推奨。生成フォルダの直接編集は禁止。
