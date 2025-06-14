import type { Meta, StoryObj } from '@storybook/react';
import { Input, Textarea } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'フォーム入力用のコンポーネント。エラー状態の表示とフォワードリファレンスをサポート。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: 'boolean',
      description: 'エラー状態の表示',
    },
    placeholder: {
      control: 'text',
      description: 'プレースホルダーテキスト',
    },
    disabled: {
      control: 'boolean',
      description: '入力を無効化',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'インプットのタイプ',
    },
  },
  args: {
    placeholder: 'テキストを入力してください',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'デフォルトの入力フィールド',
  },
};

export const WithError: Story = {
  args: {
    error: true,
    placeholder: 'エラー状態の入力フィールド',
    defaultValue: '不正な値',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '無効化された入力フィールド',
  },
};

export const InputTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input type="text" placeholder="テキスト入力" />
      <Input type="email" placeholder="メールアドレス" />
      <Input type="password" placeholder="パスワード" />
      <Input type="number" placeholder="数値入力" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '異なる入力タイプの表示例',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input placeholder="通常状態" />
      <Input error placeholder="エラー状態" />
      <Input disabled placeholder="無効化状態" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '入力フィールドの各状態を表示',
      },
    },
  },
};

// Textarea Stories
const textareaMeta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '複数行テキスト入力用のコンポーネント。エラー状態とカスタム行数をサポート。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: 'boolean',
      description: 'エラー状態の表示',
    },
    rows: {
      control: 'number',
      description: '表示行数',
    },
    placeholder: {
      control: 'text',
      description: 'プレースホルダーテキスト',
    },
  },
  args: {
    placeholder: '複数行のテキストを入力してください',
    rows: 3,
  },
};

export const TextareaDefault: StoryObj<typeof Textarea> = {
  ...textareaMeta,
  args: {
    placeholder: 'デフォルトのテキストエリア',
  },
};

export const TextareaWithError: StoryObj<typeof Textarea> = {
  ...textareaMeta,
  args: {
    error: true,
    placeholder: 'エラー状態のテキストエリア',
    defaultValue: '不正な内容',
  },
};

export const TextareaSizes: StoryObj<typeof Textarea> = {
  ...textareaMeta,
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Textarea rows={2} placeholder="2行のテキストエリア" />
      <Textarea rows={4} placeholder="4行のテキストエリア" />
      <Textarea rows={6} placeholder="6行のテキストエリア" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '異なる行数のテキストエリア',
      },
    },
  },
};