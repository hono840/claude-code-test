import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { FormField, InputField, TextareaField } from './FormField';

describe('FormField', () => {
  it('renders label and children correctly', () => {
    render(
      <FormField label="テストラベル">
        <input data-testid="test-input" />
      </FormField>
    );

    expect(screen.getByText('テストラベル')).toBeInTheDocument();
    expect(screen.getByTestId('test-input')).toBeInTheDocument();
  });

  it('displays error message when provided', () => {
    render(
      <FormField
        label="テストラベル"
        error="エラーメッセージ"
      >
        <input />
      </FormField>
    );

    expect(screen.getByText('エラーメッセージ')).toBeInTheDocument();
    expect(screen.getByText('エラーメッセージ')).toHaveClass('text-red-600');
  });

  it('renders required field correctly', () => {
    render(
      <FormField
        label="必須項目"
        required
      >
        <input />
      </FormField>
    );

    expect(screen.getByText('*')).toBeInTheDocument();
    expect(screen.getByText('*')).toHaveClass('text-red-500');
  });
});

describe('InputField', () => {
  it('renders input field with all props', () => {
    const handleChange = vi.fn();
    
    render(
      <InputField
        label="入力フィールド"
        placeholder="テキストを入力"
        value="初期値"
        onChange={handleChange}
        required
      />
    );

    const input = screen.getByDisplayValue('初期値');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'テキストを入力');
    expect(screen.getByText('入力フィールド')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('handles input changes', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(
      <InputField
        label="入力フィールド"
        onChange={handleChange}
      />
    );

    const input = screen.getByRole('textbox');
    await user.type(input, 'テスト入力');

    expect(handleChange).toHaveBeenCalled();
  });

  it('displays error state correctly', () => {
    render(
      <InputField
        label="エラーフィールド"
        error="入力エラーです"
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-red-300');
    expect(screen.getByText('入力エラーです')).toBeInTheDocument();
  });
});

describe('TextareaField', () => {
  it('renders textarea field with all props', () => {
    const handleChange = vi.fn();
    
    render(
      <TextareaField
        label="テキストエリア"
        placeholder="複数行入力"
        value="初期テキスト"
        onChange={handleChange}
        rows={5}
        required
      />
    );

    const textarea = screen.getByDisplayValue('初期テキスト');
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe('TEXTAREA');
    expect(textarea).toHaveAttribute('placeholder', '複数行入力');
    expect(textarea).toHaveAttribute('rows', '5');
    expect(screen.getByText('テキストエリア')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('handles textarea changes', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(
      <TextareaField
        label="テキストエリア"
        onChange={handleChange}
      />
    );

    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'テスト\n複数行入力');

    expect(handleChange).toHaveBeenCalled();
  });

  it('displays error state correctly', () => {
    render(
      <TextareaField
        label="エラーテキストエリア"
        error="入力が長すぎます"
      />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('border-red-300');
    expect(screen.getByText('入力が長すぎます')).toBeInTheDocument();
  });
});