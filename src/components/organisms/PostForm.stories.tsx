import type { Meta, StoryObj } from '@storybook/react';
import { PostForm } from './PostForm';

// Next.js routerのモック
const mockRouter = {
  push: (url: string) => console.log('Navigate to:', url),
  back: () => console.log('Navigate back'),
};

// useRouterのモック
const useRouterMock = () => mockRouter;

const meta: Meta<typeof PostForm> = {
  title: 'Organisms/PostForm',
  component: PostForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ブログ記事作成・編集用のフォームコンポーネント。バリデーション、送信処理、エラーハンドリングを含む。',
      },
    },
    nextjs: {
      navigation: {
        push: mockRouter.push,
        back: mockRouter.back,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    submitButtonText: {
      control: 'text',
      description: '送信ボタンのテキスト',
    },
    isEditing: {
      control: 'boolean',
      description: '編集モードかどうか',
    },
    onSubmit: {
      action: 'submitted',
      description: 'フォーム送信時のコールバック',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOnSubmit = async (data: any) => {
  console.log('Form submitted with data:', data);
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { id: 'mock-post-id' };
};

export const NewPost: Story = {
  args: {
    onSubmit: defaultOnSubmit,
    submitButtonText: '記事を投稿',
  },
};

export const EditPost: Story = {
  args: {
    onSubmit: defaultOnSubmit,
    submitButtonText: '記事を更新',
    isEditing: true,
    initialData: {
      title: '既存の記事タイトル',
      summary: 'これは既存記事の要約です。編集フォームに初期値として表示されます。',
      content: '# 既存の記事内容\n\nこれは既存の記事の内容です。\n\n## セクション1\n\n既存のコンテンツがここに表示されます。\n\n## セクション2\n\n更に詳しい内容がここに続きます。',
      tags: ['Next.js', 'React', 'TypeScript', 'Storybook'],
    },
  },
};

export const WithValidationErrors: Story = {
  render: () => {
    const handleSubmit = async () => {
      // エラーを表示するために何もしない（空フォームで送信）
      return null;
    };

    return (
      <div className="space-y-4">
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="text-sm text-yellow-800">
            💡 このストーリーでは、空のフォームで「記事を投稿」ボタンをクリックしてバリデーションエラーを確認できます。
          </p>
        </div>
        <PostForm onSubmit={handleSubmit} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'バリデーションエラーの表示例。空のフォームで送信ボタンをクリックするとエラーが表示されます。',
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    onSubmit: defaultOnSubmit,
    submitButtonText: '長い記事を投稿',
    initialData: {
      title: '非常に長いタイトルの記事例：Next.jsとReactを使用したモダンなWebアプリケーション開発における最新のベストプラクティス',
      summary: 'この記事では、Next.jsとReactを使用したモダンなWebアプリケーション開発における最新のベストプラクティスについて詳しく解説します。パフォーマンス最適化、SEO対策、ユーザビリティの向上など、実際の開発現場で役立つ知識を幅広くカバーしています。',
      content: `# Next.jsとReactを使用したモダンなWebアプリケーション開発

## はじめに

現代のWebアプリケーション開発では、ユーザーエクスペリエンス（UX）とパフォーマンスの両立が重要な課題となっています。特に、動的でインタラクティブなアプリケーションを構築する際には、適切なフレームワークとライブラリの選択が成功の鍵を握ります。

## Next.jsの特徴

Next.jsは、Reactをベースとした本格的なWebアプリケーションフレームワークです。以下のような特徴があります：

### 1. サーバーサイドレンダリング（SSR）
- 初期ページロードの高速化
- SEOの向上
- ソーシャルメディアでの共有最適化

### 2. 静的サイト生成（SSG）
- ビルド時のページ生成
- CDNでの高速配信
- 高いパフォーマンス

### 3. ファイルベースルーティング
- 直感的なルート設定
- 動的ルーティングのサポート
- APIルートの簡単な作成

## 実装のベストプラクティス

### コンポーネント設計
\`\`\`typescript
// 良い例：再利用可能なコンポーネント
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant, size, children }: ButtonProps) {
  return (
    <button className={\`btn btn-\${variant} btn-\${size}\`}>
      {children}
    </button>
  );
}
\`\`\`

### パフォーマンス最適化
1. **画像最適化**: Next.js Imageコンポーネントの活用
2. **コード分割**: 動的インポートの使用
3. **キャッシュ戦略**: ISRとSWRの適切な利用

## まとめ

Next.jsとReactを組み合わせることで、現代的で高性能なWebアプリケーションを効率的に開発することができます。適切な設計パターンとベストプラクティスの採用により、保守性とスケーラビリティを両立したプロジェクトを実現できるでしょう。`,
      tags: ['Next.js', 'React', 'TypeScript', 'SSR', 'SSG', 'パフォーマンス', 'ベストプラクティス', 'Webアプリケーション', '開発手法'],
    },
  },
  parameters: {
    docs: {
      description: {
        story: '長いコンテンツを含むフォームの表示例。実際の記事作成時のレイアウトを確認できます。',
      },
    },
  },
};

export const MinimalData: Story = {
  args: {
    onSubmit: defaultOnSubmit,
    submitButtonText: '記事を投稿',
    initialData: {
      title: '短いタイトル',
      summary: '短い要約',
      content: '短い内容',
      tags: ['短いタグ'],
    },
  },
  parameters: {
    docs: {
      description: {
        story: '最小限のデータを含むフォームの表示例。',
      },
    },
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const handleSubmit = async (data: any) => {
      const result = window.confirm(
        `以下の内容で投稿しますか？\n\nタイトル: ${data.title}\n要約: ${data.summary}\nタグ: ${data.tags.join(', ')}`
      );
      
      if (result) {
        alert('投稿が完了しました！');
        return { id: 'demo-post-id' };
      }
      
      return null;
    };

    return (
      <div className="space-y-4">
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
          <h3 className="font-medium text-blue-800 mb-2">インタラクティブデモ</h3>
          <p className="text-sm text-blue-700">
            実際にフォームを入力して送信の流れを体験できます。送信時に確認ダイアログが表示されます。
          </p>
        </div>
        <PostForm onSubmit={handleSubmit} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'インタラクティブなデモ。実際にフォームを操作して動作を確認できます。',
      },
    },
  },
};