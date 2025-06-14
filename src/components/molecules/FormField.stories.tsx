import type { Meta, StoryObj } from '@storybook/react';
import { FormField, InputField, TextareaField } from './FormField';
import { Input, Textarea } from '../atoms/Input';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ラベル、入力フィールド、エラーメッセージを組み合わせたフォームフィールドコンポーネント。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'フィールドのラベル',
    },
    required: {
      control: 'boolean',
      description: '必須項目の表示',
    },
    error: {
      control: 'text',
      description: 'エラーメッセージ',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'デフォルトフィールド',
    input: <Input placeholder="入力してください" />,
  },
};

export const Required: Story = {
  args: {
    label: '必須フィールド',
    input: <Input placeholder="必須項目です" />,
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'エラーフィールド',
    input: <Input error placeholder="エラー状態" defaultValue="不正な値" />,
    error: 'この項目は必須です',
    required: true,
  },
};

export const WithTextarea: Story = {
  args: {
    label: 'テキストエリアフィールド',
    input: <Textarea rows={4} placeholder="複数行の入力が可能です" />,
  },
};

// InputField Stories
const inputMeta: Meta<typeof InputField> = {
  title: 'Molecules/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ラベルと入力フィールドを統合した便利なコンポーネント。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'フィールドのラベル',
    },
    placeholder: {
      control: 'text',
      description: 'プレースホルダーテキスト',
    },
    required: {
      control: 'boolean',
      description: '必須項目の表示',
    },
    error: {
      control: 'text',
      description: 'エラーメッセージ',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: '入力タイプ',
    },
  },
};

export const InputDefault: StoryObj<typeof InputField> = {
  ...inputMeta,
  args: {
    label: 'ユーザー名',
    placeholder: 'ユーザー名を入力してください',
  },
};

export const InputRequired: StoryObj<typeof InputField> = {
  ...inputMeta,
  args: {
    label: 'メールアドレス',
    type: 'email',
    placeholder: 'example@email.com',
    required: true,
  },
};

export const InputWithError: StoryObj<typeof InputField> = {
  ...inputMeta,
  args: {
    label: 'パスワード',
    type: 'password',
    placeholder: 'パスワードを入力',
    required: true,
    error: 'パスワードは8文字以上で入力してください',
    defaultValue: '123',
  },
};

// TextareaField Stories
const textareaMeta: Meta<typeof TextareaField> = {
  title: 'Molecules/TextareaField',
  component: TextareaField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'ラベルとテキストエリアを統合した便利なコンポーネント。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'フィールドのラベル',
    },
    placeholder: {
      control: 'text',
      description: 'プレースホルダーテキスト',
    },
    rows: {
      control: 'number',
      description: '表示行数',
    },
    required: {
      control: 'boolean',
      description: '必須項目の表示',
    },
    error: {
      control: 'text',
      description: 'エラーメッセージ',
    },
  },
};

export const TextareaDefault: StoryObj<typeof TextareaField> = {
  ...textareaMeta,
  args: {
    label: 'コメント',
    placeholder: 'コメントを入力してください',
    rows: 3,
  },
};

export const TextareaRequired: StoryObj<typeof TextareaField> = {
  ...textareaMeta,
  args: {
    label: '記事内容',
    placeholder: '記事の内容を詳しく書いてください',
    rows: 6,
    required: true,
  },
};

export const TextareaWithError: StoryObj<typeof TextareaField> = {
  ...textareaMeta,
  args: {
    label: '説明',
    placeholder: '詳細な説明を入力',
    rows: 4,
    required: true,
    error: '説明は最低50文字以上入力してください',
    defaultValue: '短い説明',
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <InputField
        label="お名前"
        placeholder="山田太郎"
        required
      />
      <InputField
        label="メールアドレス"
        type="email"
        placeholder="example@email.com"
        required
      />
      <InputField
        label="ウェブサイト"
        type="url"
        placeholder="https://example.com"
      />
      <TextareaField
        label="メッセージ"
        placeholder="お問い合わせ内容をご記入ください"
        rows={5}
        required
      />
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