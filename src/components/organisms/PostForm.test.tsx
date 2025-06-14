import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { PostForm } from './PostForm';

// Next.js routerのモック
const mockPush = vi.fn();
const mockBack = vi.fn();
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    back: mockBack,
  }),
}));

describe('PostForm', () => {
  const mockOnSubmit = vi.fn();
  const defaultProps = {
    onSubmit: mockOnSubmit,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockOnSubmit.mockResolvedValue({ id: 'test-id' });
  });

  it('renders all form fields', () => {
    render(<PostForm {...defaultProps} />);

    expect(screen.getByLabelText('タイトル')).toBeInTheDocument();
    expect(screen.getByLabelText('要約')).toBeInTheDocument();
    expect(screen.getByLabelText('本文')).toBeInTheDocument();
    expect(screen.getByLabelText('タグ（カンマ区切り）')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '記事を投稿' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'キャンセル' })).toBeInTheDocument();
  });

  it('renders with initial data', () => {
    const initialData = {
      title: '初期タイトル',
      summary: '初期要約',
      content: '初期内容',
      tags: ['タグ1', 'タグ2'],
    };

    render(<PostForm {...defaultProps} initialData={initialData} />);

    expect(screen.getByDisplayValue('初期タイトル')).toBeInTheDocument();
    expect(screen.getByDisplayValue('初期要約')).toBeInTheDocument();
    expect(screen.getByDisplayValue('初期内容')).toBeInTheDocument();
    expect(screen.getByDisplayValue('タグ1, タグ2')).toBeInTheDocument();
  });

  it('shows custom submit button text', () => {
    render(<PostForm {...defaultProps} submitButtonText="更新する" />);
    expect(screen.getByRole('button', { name: '更新する' })).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    const user = userEvent.setup();
    render(<PostForm {...defaultProps} />);

    const submitButton = screen.getByRole('button', { name: '記事を投稿' });
    await user.click(submitButton);

    expect(screen.getByText('タイトルは必須です')).toBeInTheDocument();
    expect(screen.getByText('要約は必須です')).toBeInTheDocument();
    expect(screen.getByText('本文は必須です')).toBeInTheDocument();
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('clears errors when user starts typing', async () => {
    const user = userEvent.setup();
    render(<PostForm {...defaultProps} />);

    // First trigger validation errors
    const submitButton = screen.getByRole('button', { name: '記事を投稿' });
    await user.click(submitButton);

    expect(screen.getByText('タイトルは必須です')).toBeInTheDocument();

    // Start typing in title field
    const titleInput = screen.getByLabelText('タイトル');
    await user.type(titleInput, 'テストタイトル');

    // Error should be cleared
    expect(screen.queryByText('タイトルは必須です')).not.toBeInTheDocument();
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    render(<PostForm {...defaultProps} />);

    // Fill form fields
    await user.type(screen.getByLabelText('タイトル'), 'テストタイトル');
    await user.type(screen.getByLabelText('要約'), 'テスト要約');
    await user.type(screen.getByLabelText('本文'), 'テスト本文');
    await user.type(screen.getByLabelText('タグ（カンマ区切り）'), 'タグ1, タグ2, タグ3');

    const submitButton = screen.getByRole('button', { name: '記事を投稿' });
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        title: 'テストタイトル',
        summary: 'テスト要約',
        content: 'テスト本文',
        tags: ['タグ1', 'タグ2', 'タグ3'],
      });
    });

    expect(mockPush).toHaveBeenCalledWith('/posts/test-id');
  });

  it('handles tags correctly', async () => {
    const user = userEvent.setup();
    render(<PostForm {...defaultProps} />);

    // Fill required fields
    await user.type(screen.getByLabelText('タイトル'), 'テストタイトル');
    await user.type(screen.getByLabelText('要約'), 'テスト要約');
    await user.type(screen.getByLabelText('本文'), 'テスト本文');
    
    // Test various tag formats
    await user.type(screen.getByLabelText('タグ（カンマ区切り）'), 'タグ1,  タグ2  , タグ3, ');

    const submitButton = screen.getByRole('button', { name: '記事を投稿' });
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          tags: ['タグ1', 'タグ2', 'タグ3'], // Extra spaces and empty tags should be filtered
        })
      );
    });
  });

  it('shows loading state during submission', async () => {
    const user = userEvent.setup();
    const slowOnSubmit = vi.fn(() => new Promise(resolve => setTimeout(() => resolve({ id: 'test-id' }), 100)));
    
    render(<PostForm {...defaultProps} onSubmit={slowOnSubmit} />);

    // Fill required fields
    await user.type(screen.getByLabelText('タイトル'), 'テストタイトル');
    await user.type(screen.getByLabelText('要約'), 'テスト要約');
    await user.type(screen.getByLabelText('本文'), 'テスト本文');

    const submitButton = screen.getByRole('button', { name: '記事を投稿' });
    await user.click(submitButton);

    expect(screen.getByRole('button', { name: '処理中...' })).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    await waitFor(() => {
      expect(screen.getByRole('button', { name: '記事を投稿' })).toBeInTheDocument();
    });
  });

  it('handles cancel button click', async () => {
    const user = userEvent.setup();
    render(<PostForm {...defaultProps} />);

    const cancelButton = screen.getByRole('button', { name: 'キャンセル' });
    await user.click(cancelButton);

    expect(mockBack).toHaveBeenCalled();
  });

  it('handles submission error gracefully', async () => {
    const user = userEvent.setup();
    const errorOnSubmit = vi.fn().mockRejectedValue(new Error('Submission failed'));
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    render(<PostForm {...defaultProps} onSubmit={errorOnSubmit} />);

    // Fill required fields
    await user.type(screen.getByLabelText('タイトル'), 'テストタイトル');
    await user.type(screen.getByLabelText('要約'), 'テスト要約');
    await user.type(screen.getByLabelText('本文'), 'テスト本文');

    const submitButton = screen.getByRole('button', { name: '記事を投稿' });
    await user.click(submitButton);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Form submission error:', expect.any(Error));
    });

    // Form should be enabled again after error
    expect(screen.getByRole('button', { name: '記事を投稿' })).not.toBeDisabled();
    
    consoleSpy.mockRestore();
  });
});