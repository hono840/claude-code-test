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
- `/src/components/` - **Atomic Design コンポーネント**
  - `/atoms/` - 最小単位のコンポーネント
  - `/molecules/` - Atoms の組み合わせ
  - `/organisms/` - Molecules の組み合わせ  
  - `/templates/` - レイアウト構造
- `/src/lib/blog.ts` - コアブログデータ管理機能（Prismaベース）
- `/src/lib/prisma.ts` - Prisma クライアント設定
- `/src/types/blog.ts` - ブログデータ用 TypeScript インターフェース
- `/prisma/schema.prisma` - データベーススキーマ定義
- `/prisma/seed.ts` - データベースシーディングスクリプト
- `/src/app/globals.css` - Tailwind とカスタムプローズスタイルのグローバルスタイル

### Atomic Design コンポーネント設計
このプロジェクトは Brad Frost の Atomic Design 手法に基づいて設計されています：

#### Atoms（原子）- 最小単位のコンポーネント
- `Button` / `LinkButton` - 統一されたボタンスタイル（variant: primary/secondary/danger/ghost）
- `Input` / `Textarea` - フォーム入力要素（エラー状態対応）
- `Label` - ラベル表示（必須マーク対応）
- `Tag` - タグ表示（複数バリアント・サイズ）
- `Typography` - 統一されたテキストスタイル（h1-h4, body, caption, small）
- `Icon` - SVGアイコンコンポーネント（ArrowLeft, Edit, Delete, Plus）

#### Molecules（分子）- Atoms の組み合わせ
- `FormField` / `InputField` / `TextareaField` - ラベル・入力・エラー表示の組み合わせ
- `TagList` - タグの一覧表示（最大表示数制御）
- `PostMeta` - 投稿メタ情報（作成日・更新日）
- `BackNavigation` - 戻るナビゲーション（アイコン付き）

#### Organisms（組織）- Molecules の組み合わせ
- `PostCard` - 投稿カード表示（タイトル・要約・タグ・日付）
- `PostList` - 投稿一覧（空状態対応・グリッドレイアウト）
- `PostForm` - 投稿作成・編集フォーム（バリデーション付き）
- `Header` - ページヘッダー（タイトル・説明・作成ボタン）

#### Templates（テンプレート）- レイアウト構造
- `MainLayout` - 基本レイアウト（コンテナ・パディング）
- `BlogTemplate` - ブログページ用テンプレート（戻るボタン・タイトル・コンテンツエリア）

### コンポーネント使用例
```typescript
// Atoms の使用
import { Button, Typography, Tag } from '@/components';

// Molecules の使用  
import { InputField, TagList, PostMeta } from '@/components';

// Organisms の使用
import { PostForm, PostList, Header } from '@/components';

// Templates の使用
import { MainLayout, BlogTemplate } from '@/components';
```

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
- **Atomic Design による設計システム**

### 開発ガイドライン

#### 新しいコンポーネントの追加
1. **Atoms**: 最小単位の再利用可能コンポーネント（ボタン、入力など）
2. **Molecules**: Atoms の組み合わせ（フォーム項目、ナビゲーションなど）
3. **Organisms**: Molecules の組み合わせ（フォーム全体、カードリストなど）
4. **Templates**: レイアウト構造の定義
5. **Pages**: Templates にデータを注入した完成形

#### コンポーネント作成時の注意点
- TypeScript インターフェースで props を明確に定義
- variant（バリエーション）や size（サイズ）でカスタマイズ可能に
- className props で追加スタイルを受け取れるようにする
- 適切なデフォルト値を設定
- アクセシビリティを考慮（aria-label、キーボード対応など）

#### ファイル構成
```
/src/components/
├── atoms/
│   ├── Button.tsx
│   ├── Input.tsx
│   └── index.ts
├── molecules/
│   ├── FormField.tsx
│   └── index.ts
├── organisms/
│   ├── PostForm.tsx
│   └── index.ts
├── templates/
│   ├── MainLayout.tsx
│   └── index.ts
└── index.ts  # 統一エクスポート
```
