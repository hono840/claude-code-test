import type { Meta, StoryObj } from '@storybook/react';
import { ArrowLeftIcon, EditIcon, DeleteIcon, PlusIcon } from './Icon';

const meta: Meta<typeof ArrowLeftIcon> = {
  title: 'Atoms/Icon',
  component: ArrowLeftIcon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'アプリケーション全体で使用するSVGアイコンコンポーネント。サイズとカラーのカスタマイズが可能。',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
      description: 'アイコンのサイズ（px）',
    },
    className: {
      control: 'text',
      description: 'カスタムCSSクラス',
    },
  },
  args: {
    size: 20,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ArrowLeft: Story = {
  render: (args) => <ArrowLeftIcon {...args} />,
  args: {
    size: 20,
  },
};

export const Edit: Story = {
  render: (args) => <EditIcon {...args} />,
  args: {
    size: 20,
  },
};

export const Delete: Story = {
  render: (args) => <DeleteIcon {...args} />,
  args: {
    size: 20,
  },
};

export const Plus: Story = {
  render: (args) => <PlusIcon {...args} />,
  args: {
    size: 20,
  },
};

export const AllIcons: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <div className="flex flex-col items-center gap-2">
        <ArrowLeftIcon size={24} />
        <span className="text-xs text-gray-600">ArrowLeft</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <EditIcon size={24} />
        <span className="text-xs text-gray-600">Edit</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <DeleteIcon size={24} />
        <span className="text-xs text-gray-600">Delete</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PlusIcon size={24} />
        <span className="text-xs text-gray-600">Plus</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '利用可能なすべてのアイコンを一覧表示',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <EditIcon size={16} />
        <span className="text-xs text-gray-600">16px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <EditIcon size={20} />
        <span className="text-xs text-gray-600">20px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <EditIcon size={24} />
        <span className="text-xs text-gray-600">24px</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <EditIcon size={32} />
        <span className="text-xs text-gray-600">32px</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '異なるサイズでのアイコン表示例',
      },
    },
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <EditIcon size={24} className="text-gray-600" />
        <span className="text-xs text-gray-600">Gray</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <EditIcon size={24} className="text-blue-600" />
        <span className="text-xs text-gray-600">Blue</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <DeleteIcon size={24} className="text-red-600" />
        <span className="text-xs text-gray-600">Red</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PlusIcon size={24} className="text-green-600" />
        <span className="text-xs text-gray-600">Green</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'カラーバリエーション例（currentColor使用）',
      },
    },
  },
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-4">
      <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        <PlusIcon size={16} />
        新規作成
      </button>
      <button className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
        <EditIcon size={16} />
        編集
      </button>
      <button className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700">
        <DeleteIcon size={16} />
        削除
      </button>
      <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded hover:bg-gray-50">
        <ArrowLeftIcon size={16} />
        戻る
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'ボタンと組み合わせた実際の使用例',
      },
    },
  },
};