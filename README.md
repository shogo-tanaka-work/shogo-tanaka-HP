# 田中省伍 ポートフォリオサイト

Web Developer & AI Instructor の個人ポートフォリオサイトです。

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/tanaka-shogos-projects/v0-personal-introduction-lp)

## 🎯 プロジェクト概要

- **目的**: 個人のポートフォリオ・スキル・経験をアピールするランディングページ
- **技術スタック**: Next.js 15 + TypeScript + Tailwind CSS + shadcn/ui
- **デプロイ**: Vercel (Static Export)

## 📁 プロジェクト構造

```
shogo-tanaka-HP/
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # レイアウトコンポーネント
│   └── page.tsx          # メインページ（全セクション統合）
├── components/
│   ├── sections/          # 各セクションコンポーネント
│   │   ├── profile-section.tsx      # プロフィール情報
│   │   ├── social-links-section.tsx # SNS・連絡先リンク
│   │   ├── portfolio-section.tsx    # 制作実績一覧
│   │   ├── teaching-section.tsx     # 教育・指導経験
│   │   └── seminars-section.tsx     # セミナー情報
│   ├── ui/               # shadcn/ui コンポーネント
│   └── theme-provider.tsx # テーマ管理
├── data/
│   └── index.ts          # サイトデータ（プロフィール、実績、セミナーなど）
├── types/
│   └── index.ts          # TypeScript型定義
├── public/assets/        # 画像・静的ファイル
└── lib/
    └── utils.ts          # ユーティリティ関数
```

## 🛠️ 開発・カスタマイズ手順

### セットアップ
```bash
# 依存関係インストール
npm install
# または
pnpm install

# 開発サーバー起動
npm run dev
# または
pnpm dev
```

### 主要なカスタマイズポイント

#### 1. **個人情報の更新**
- **ファイル**: `data/index.ts`
- **内容**: プロフィール、SNSリンク、制作実績、教育経験、セミナー情報
- **修正例**:
  ```typescript
  // SNSリンクの更新
  export const socialLinks: SocialLink[] = [
    { name: "Twitter", url: "https://twitter.com/your-handle", icon: Twitter },
    // ...
  ]
  ```

#### 2. **プロフィール情報の変更**
- **ファイル**: `components/sections/profile-section.tsx`
- **内容**: 名前、職業、自己紹介文
- **修正箇所**: 16-24行目

#### 3. **制作実績の追加・編集**
- **ファイル**: `data/index.ts` の `webApps` 配列
- **構造**:
  ```typescript
  {
    title: "プロジェクト名",
    description: "説明文",
    technologies: ["使用技術1", "使用技術2"],
    image: "/assets/images/...",
    url: "プロジェクトURL"
  }
  ```

#### 4. **セミナー・イベント情報の更新**
- **ファイル**: `data/index.ts` の `upcomingSeminars` 配列
- **更新頻度**: 定期的（新しいセミナー追加・過去のセミナー削除）

#### 5. **デザイン・スタイルの調整**
- **グローバルスタイル**: `app/globals.css`
- **コンポーネント別スタイル**: 各セクションファイル内のTailwind classes
- **テーマカラー**: ゴールド系 (`#D4AF37`) がアクセントカラー

### 型定義の拡張
新しいデータ構造を追加する場合は `types/index.ts` に型定義を追加してください。

## 🚀 デプロイ

```bash
# ビルド
npm run build

# 静的エクスポート（Vercelで自動実行）
npm run export
```

## 📝 定期メンテナンス

### 月次更新推奨項目
- [ ] セミナー情報の更新（`data/index.ts`）
- [ ] 新しい制作実績の追加
- [ ] プロフィール画像の更新（`public/assets/images/`）

### 年次更新推奨項目
- [ ] 依存関係のアップデート
- [ ] デザインのリフレッシュ
- [ ] 教育経験・実績の見直し

## 🔧 トラブルシューティング

### よくある問題
1. **画像が表示されない**: `public/assets/images/` パスを確認
2. **データが反映されない**: `data/index.ts` の更新後、ブラウザをリロード
3. **スタイルが崩れる**: Tailwind CSS のクラス名を確認

### デバッグ用コマンド
```bash
# 型チェック
npx tsc --noEmit

# リンター実行
npm run lint
```