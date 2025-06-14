# 📝 Next.js ブログサイト

**Next.js 15** と **TypeScript** で構築された、モダンで使いやすいブログプラットフォームです。

![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-6.9.0-2D3748?style=flat-square&logo=prisma)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ 特徴

- 🚀 **高速**: Next.js 15 + Turbopack による高速開発・ビルド
- 📱 **レスポンシブ**: モバイル・デスクトップ対応
- 🌙 **ダークモード**: 自動対応
- 🔍 **SEO最適化**: Next.js App Router による最適化
- 💾 **データ永続化**: SQLite + Prisma ORM
- 🏷️ **タグ機能**: 記事のカテゴリ分類
- ✏️ **CRUD操作**: 記事の作成・編集・削除
- 🎌 **日本語対応**: 完全日本語UI

## 🖼️ スクリーンショット

### ホームページ
記事一覧とナビゲーション

### 記事作成画面
直感的なフォームで簡単投稿

### 記事詳細画面
読みやすいレイアウトとタイポグラフィ

## 🛠️ 技術スタック

| カテゴリ | 技術 |
|---------|------|
| **フレームワーク** | Next.js 15 (App Router) |
| **言語** | TypeScript |
| **スタイリング** | Tailwind CSS |
| **データベース** | SQLite + Prisma ORM |
| **開発ツール** | ESLint, Turbopack |

## 🚀 クイックスタート

### 1. 依存関係のインストール

```bash
npm install
```

### 2. データベースのセットアップ

```bash
# データベースの初期化
npx prisma db push

# サンプルデータの投入
npm run db:seed
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 📝 使い方

### 記事を投稿する
1. 「新しい記事を書く」ボタンをクリック
2. タイトル、要約、本文、タグを入力
3. 「記事を投稿」で公開

### 記事を編集・削除する
1. 記事詳細ページから「記事を編集」をクリック
2. 内容を修正して「記事を更新」
3. 削除する場合は「記事を削除」

## 🔧 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動
npm run start

# コード品質チェック
npm run lint

# サンプルデータ投入
npm run db:seed

# データベース管理画面
npx prisma studio
```

## 📁 プロジェクト構造

```
src/
├── app/                 # Next.js App Router
│   ├── page.tsx        # ホームページ（記事一覧）
│   ├── create/         # 記事作成ページ
│   ├── edit/[id]/      # 記事編集ページ
│   ├── posts/[id]/     # 記事詳細ページ
│   └── api/posts/      # REST API
├── lib/                # ユーティリティ
│   ├── blog.ts         # ブログ データ管理
│   └── prisma.ts       # データベース接続
└── types/              # TypeScript型定義
    └── blog.ts

prisma/
├── schema.prisma       # データベーススキーマ
├── seed.ts            # サンプルデータ
└── dev.db             # SQLiteデータベースファイル
```

## 🔧 カスタマイズ

### スタイリング
`src/app/globals.css` でグローバルスタイルをカスタマイズできます。

### データベーススキーマ
`prisma/schema.prisma` でデータベース構造を変更できます。

### API エンドポイント
`src/app/api/` ディレクトリでAPIをカスタマイズできます。

## 📦 デプロイ

### Vercel（推奨）
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### その他のプラットフォーム
- **Netlify**: `npm run build` の結果をデプロイ
- **Docker**: Dockerfile を作成してコンテナ化

## 🤝 コントリビューション

プルリクエストや Issue の報告を歓迎します！

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

## 🔗 参考リンク

- [Next.js ドキュメント](https://nextjs.org/docs)
- [Prisma ドキュメント](https://www.prisma.io/docs)
- [Tailwind CSS ドキュメント](https://tailwindcss.com/docs)

---

⭐ このプロジェクトが気に入ったら、ぜひスターを付けてください！
