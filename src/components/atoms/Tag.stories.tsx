import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'カテゴリやラベル表示用のタグコンポーネント。複数のスタイルバリエーションとサイズをサポート。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
      description: 'タグのスタイルバリエーション',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'タグのサイズ',
    },
    children: {
      control: 'text',
      description: 'タグのテキスト内容',
    },
  },
  args: {
    children: 'タグ',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'デフォルト',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'プライマリ',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'セカンダリ',
  },
};

export const SmallSize: Story = {
  args: {
    size: 'sm',
    children: '小サイズ',
  },
};

export const MediumSize: Story = {
  args: {
    size: 'md',
    children: '中サイズ',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="default">デフォルト</Tag>
      <Tag variant="primary">プライマリ</Tag>
      <Tag variant="secondary">セカンダリ</Tag>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'すべてのバリエーションを一覧表示',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Tag size="sm" variant="primary">小</Tag>
      <Tag size="md" variant="primary">中</Tag>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '2つのサイズバリエーションを比較表示',
      },
    },
  },
};

export const TagCollection: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Tag variant="primary" size="sm">React</Tag>
        <Tag variant="primary" size="sm">TypeScript</Tag>
        <Tag variant="primary" size="sm">Next.js</Tag>
        <Tag variant="secondary" size="sm">Tailwind</Tag>
        <Tag variant="default" size="sm">Storybook</Tag>
      </div>
      <div className="flex flex-wrap gap-2">
        <Tag variant="primary">フロントエンド</Tag>
        <Tag variant="secondary">バックエンド</Tag>
        <Tag variant="default">デザイン</Tag>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '実際の使用例：技術タグのコレクション',
      },
    },
  },
};

export const CategoryTags: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">カテゴリ:</span>
        <Tag variant="primary">技術記事</Tag>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">タグ:</span>
        <Tag variant="secondary" size="sm">JavaScript</Tag>
        <Tag variant="secondary" size="sm">チュートリアル</Tag>
        <Tag variant="default" size="sm">初心者向け</Tag>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'ブログ記事のカテゴリとタグ表示例',
      },
    },
  },
};