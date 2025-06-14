import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import { Input } from './Input';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'フォーム要素用のラベルコンポーネント。必須項目の表示とアクセシビリティをサポート。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'ラベルのテキスト内容',
    },
    required: {
      control: 'boolean',
      description: '必須項目の表示',
    },
    htmlFor: {
      control: 'text',
      description: '関連する入力要素のID',
    },
  },
  args: {
    children: 'ラベル',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'デフォルトラベル',
  },
};

export const Required: Story = {
  args: {
    children: '必須項目',
    required: true,
  },
};

export const Optional: Story = {
  args: {
    children: '任意項目',
    required: false,
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <Label htmlFor="email" required>
          メールアドレス
        </Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="example@email.com"
        />
      </div>
      <div>
        <Label htmlFor="name">
          お名前（任意）
        </Label>
        <Input 
          id="name" 
          type="text" 
          placeholder="山田太郎"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '入力フィールドと組み合わせた実際の使用例',
      },
    },
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <Label htmlFor="title" required>
          記事タイトル
        </Label>
        <Input 
          id="title" 
          type="text" 
          placeholder="タイトルを入力してください"
        />
      </div>
      <div>
        <Label htmlFor="category" required>
          カテゴリ
        </Label>
        <select 
          id="category"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">選択してください</option>
          <option value="tech">技術</option>
          <option value="design">デザイン</option>
          <option value="business">ビジネス</option>
        </select>
      </div>
      <div>
        <Label htmlFor="tags">
          タグ（任意）
        </Label>
        <Input 
          id="tags" 
          type="text" 
          placeholder="カンマ区切りで入力"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '実際のフォームでの使用例',
      },
    },
  },
};

export const LabelVariations: Story = {
  render: () => (
    <div className="space-y-4">
      <Label>通常のラベル</Label>
      <Label required>必須項目のラベル</Label>
      <Label className="text-lg font-bold">カスタムスタイルのラベル</Label>
      <Label>
        複雑な内容を含む<br />
        複数行のラベル
      </Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '様々なラベルのバリエーション',
      },
    },
  },
};