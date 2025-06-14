import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '統一されたテキストスタイルを提供するコンポーネント。見出しから本文まで様々なバリエーションをサポート。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'body', 'caption', 'small'],
      description: 'テキストのスタイルバリエーション',
    },
    as: {
      control: 'text',
      description: 'レンダリングするHTMLタグ',
    },
    children: {
      control: 'text',
      description: 'テキストコンテンツ',
    },
  },
  args: {
    children: 'サンプルテキスト',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    variant: 'h1',
    children: '見出し1のテキスト',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
    children: '見出し2のテキスト',
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
    children: '見出し3のテキスト',
  },
};

export const H4: Story = {
  args: {
    variant: 'h4',
    children: '見出し4のテキスト',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: '本文のテキストです。通常の段落で使用されます。',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'キャプション用のテキストです。',
  },
};

export const Small: Story = {
  args: {
    variant: 'small',
    children: '小さなテキストです。',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <Typography variant="h1">見出し1 - メインタイトル</Typography>
      <Typography variant="h2">見出し2 - セクションタイトル</Typography>
      <Typography variant="h3">見出し3 - サブセクションタイトル</Typography>
      <Typography variant="h4">見出し4 - 小見出し</Typography>
      <Typography variant="body">
        本文テキストです。記事の内容や説明文で使用されます。
        適切な行間と文字サイズで読みやすさを重視しています。
      </Typography>
      <Typography variant="caption">
        キャプションテキスト - 画像の説明や補足情報に使用
      </Typography>
      <Typography variant="small">
        小さなテキスト - 注釈や著作権表示など
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'すべてのタイポグラフィバリエーションを一覧表示',
      },
    },
  },
};

export const CustomElements: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h2" as="div">
        div要素で表示される見出し2スタイル
      </Typography>
      <Typography variant="body" as="span">
        span要素で表示される本文スタイル
      </Typography>
      <Typography variant="h3" as="p">
        p要素で表示される見出し3スタイル
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'asプロパティを使用したカスタム要素の例',
      },
    },
  },
};

export const NestedContent: Story = {
  render: () => (
    <div className="space-y-4 max-w-lg">
      <Typography variant="h2">
        タイトルに<em>強調</em>テキストを含む
      </Typography>
      <Typography variant="body">
        本文に<strong>太字</strong>や<code>コード</code>を含むテキスト例です。
        <br />
        改行も正しく表示されます。
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'ネストされたコンテンツを含むテキスト例',
      },
    },
  },
};