import type { Meta, StoryObj } from '@storybook/react';
import { Button, LinkButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '統一されたボタンスタイルを提供するコンポーネント。複数のバリエーションとサイズをサポート。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost'],
      description: 'ボタンのスタイルバリエーション',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'ボタンのサイズ',
    },
    fullWidth: {
      control: 'boolean',
      description: '幅100%でボタンを表示',
    },
    disabled: {
      control: 'boolean',
      description: 'ボタンを無効化',
    },
    children: {
      control: 'text',
      description: 'ボタンのラベルテキスト',
    },
  },
  args: {
    children: 'ボタン',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'プライマリボタン',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'セカンダリボタン',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: '削除ボタン',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'ゴーストボタン',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">小</Button>
      <Button size="md">中</Button>
      <Button size="lg">大</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '3つのサイズバリエーション（sm, md, lg）を並べて表示',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button>通常</Button>
        <Button disabled>無効化</Button>
      </div>
      <Button fullWidth>フルワイズ</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '通常、無効化、フルワイズの状態を表示',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <Button variant="primary">プライマリ</Button>
      <Button variant="secondary">セカンダリ</Button>
      <Button variant="danger">デンジャー</Button>
      <Button variant="ghost">ゴースト</Button>
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

// LinkButton Stories
const linkMeta: Meta<typeof LinkButton> = {
  title: 'Atoms/LinkButton',
  component: LinkButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Next.js Linkを使用したボタンスタイルのリンクコンポーネント。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    href: {
      control: 'text',
      description: 'リンク先のURL',
    },
  },
  args: {
    href: '/example',
    children: 'リンクボタン',
  },
};

export const LinkButtonPrimary: StoryObj<typeof LinkButton> = {
  ...linkMeta,
  args: {
    href: '/home',
    variant: 'primary',
    children: 'ホームに戻る',
  },
};