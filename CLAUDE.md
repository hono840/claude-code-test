# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## プロジェクト概要

TypeScript と Tailwind CSS で構築された Next.js 15 ブログサイトです。ブログ投稿の完全な CRUD 操作機能を備えています。

## 開発コマンド

- `npm run dev` - 開発サーバーを起動（Turbopack有効）
- `npm run build` - 本番用ビルド
- `npm run start` - 本番サーバーを起動
- `npm run lint` - ESLint コード品質チェック
- `npm run db:seed` - サンプルデータをデータベースに投入
- `npx prisma studio` - Prisma Studio でデータベースを表示・編集
- `npx prisma db push` - スキーマ変更をデータベースに適用

## アーキテクチャ

### 技術スタック
- **フレームワーク**: Next.js 15 with App Router
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS（カスタムプローズスタイル付き）
- **データベース**: SQLite with Prisma ORM
- **データ永続化**: ファイルベース SQLite データベース（`prisma/dev.db`）

### プロジェクト構造
- `/src/app/` - Next.js App Router ページと API ルート
  - `page.tsx` - ブログ投稿一覧のホームページ
  - `/create/` - ブログ投稿作成フォーム
  - `/edit/[id]/` - ブログ投稿編集インターフェース
  - `/posts/[id]/` - 個別ブログ投稿表示
  - `/api/posts/` - ブログ操作用 REST API エンドポイント
- `/src/lib/blog.ts` - コアブログデータ管理機能（Prismaベース）
- `/src/lib/prisma.ts` - Prisma クライアント設定
- `/src/types/blog.ts` - ブログデータ用 TypeScript インターフェース
- `/prisma/schema.prisma` - データベーススキーマ定義
- `/prisma/seed.ts` - データベースシーディングスクリプト
- `/src/app/globals.css` - Tailwind とカスタムプローズスタイルのグローバルスタイル

### データ管理
- ブログ投稿は Prisma ORM を使用して SQLite データベースに保存
- 各投稿の構成: id（UUID）、title、content、summary、tags（JSON）、createdAt、updatedAt
- Prisma による自動タイムスタンプ管理
- API は GET、POST、PUT、DELETE 操作をサポート
- 投稿識別用 UUID の自動生成

### 主な機能
- ダークモード対応のレスポンシブデザイン
- CRUD 操作（作成、読み取り、更新、削除）
- カテゴリ分類用タグシステム
- プローズスタイリングによる美しいタイポグラフィ
- RESTful API 設計
- 日本語対応 UI