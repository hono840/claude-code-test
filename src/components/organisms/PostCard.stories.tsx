import type { Meta, StoryObj } from '@storybook/react';
import { PostCard } from './PostCard';
import type { BlogPost } from '@/types/blog';

const meta: Meta<typeof PostCard> = {
  title: 'Organisms/PostCard',
  component: PostCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ブログ記事を表示するカードコンポーネント。記事一覧での使用を想定。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'カスタムCSSクラス',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const samplePost: BlogPost = {
  id: 'sample-post-1',
  title: 'Next.jsで始めるモダンなWeb開発',
  summary: 'Next.jsを使用してモダンなWebアプリケーションを構築する方法について学びます。SSR、SSG、そして最新の機能について詳しく解説します。',
  content: 'ここに記事の本文が入ります...',
  tags: ['Next.js', 'React', 'TypeScript'],
  createdAt: new Date('2024-01-15T09:30:00Z'),
  updatedAt: new Date('2024-01-16T14:20:00Z'),
};

export const Default: Story = {
  args: {
    post: samplePost,
  },
};

export const LongTitle: Story = {
  args: {
    post: {
      ...samplePost,
      title: 'TypeScriptとReactを使用した大規模なWebアプリケーション開発における設計パターンとベストプラクティス：実践的なアプローチ',
    },
  },
};

export const LongSummary: Story = {
  args: {
    post: {
      ...samplePost,
      summary: '現代のWebアプリケーション開発では、ユーザーエクスペリエンスとパフォーマンスの両立が重要な課題となっています。この記事では、Next.jsを使用して高性能なWebアプリケーションを構築するための実践的な手法について詳しく解説します。サーバーサイドレンダリング、静的サイト生成、そして最新のReactの機能を活用したモダンな開発手法を学ぶことができます。また、実際のプロジェクトで遭遇する問題とその解決策についても触れていきます。',
    },
  },
};

export const ManyTags: Story = {
  args: {
    post: {
      ...samplePost,
      tags: ['Next.js', 'React', 'TypeScript', 'SSR', 'SSG', 'JavaScript', 'Web開発', 'フロントエンド', 'バックエンド', 'フルスタック'],
    },
  },
  parameters: {
    docs: {
      description: {
        story: '多数のタグを持つ記事の表示例。maxDisplay=3により最初の3つのタグのみ表示されます。',
      },
    },
  },
};

export const NoTags: Story = {
  args: {
    post: {
      ...samplePost,
      tags: [],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'タグが設定されていない記事の表示例。',
      },
    },
  },
};

export const ShortContent: Story = {
  args: {
    post: {
      ...samplePost,
      title: '短いタイトル',
      summary: '短い要約',
      tags: ['簡潔'],
    },
  },
};

export const TechnicalPost: Story = {
  args: {
    post: {
      ...samplePost,
      title: 'Atomic Design パターンの実装',
      summary: 'Atomic Designの原則に基づいてReactコンポーネントを設計し、保守性の高いUIライブラリを構築する方法を解説します。',
      tags: ['Atomic Design', 'React', 'UI/UX', 'コンポーネント設計'],
      createdAt: new Date('2024-02-10T08:00:00Z'),
      updatedAt: new Date('2024-02-10T08:00:00Z'),
    },
  },
};

export const PersonalPost: Story = {
  args: {
    post: {
      ...samplePost,
      title: '開発者として学んだこと',
      summary: 'ソフトウェア開発者として働き始めて1年が経ちました。この間に学んだことや感じたことを振り返ってみたいと思います。',
      tags: ['キャリア', '学習', '振り返り'],
      createdAt: new Date('2024-03-01T19:00:00Z'),
      updatedAt: new Date('2024-03-01T19:00:00Z'),
    },
  },
};

export const RecentPost: Story = {
  args: {
    post: {
      ...samplePost,
      title: '最新のJavaScript機能を使ってみた',
      summary: 'ES2024で追加された新しい機能を実際のプロジェクトで使用してみた感想と、従来の書き方との比較について紹介します。',
      tags: ['JavaScript', 'ES2024', '新機能'],
      createdAt: new Date(), // 現在時刻
      updatedAt: new Date(),
    },
  },
};

export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <PostCard post={samplePost} />
      <PostCard 
        post={{
          ...samplePost,
          id: 'post-2',
          title: 'Tailwind CSSの活用術',
          summary: 'Tailwind CSSを使用した効率的なスタイリング手法について解説します。',
          tags: ['Tailwind CSS', 'CSS', 'デザイン'],
        }} 
      />
      <PostCard 
        post={{
          ...samplePost,
          id: 'post-3',
          title: 'テスト駆動開発の実践',
          summary: 'TDDを取り入れた開発プロセスとその効果について実体験を基に紹介します。',
          tags: ['TDD', 'テスト', '開発手法'],
        }} 
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '複数のPostCardをグリッドレイアウトで表示した例。実際のブログ一覧ページでの使用イメージ。',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-6xl">
        <Story />
      </div>
    ),
  ],
};