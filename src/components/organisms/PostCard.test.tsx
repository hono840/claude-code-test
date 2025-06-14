import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PostCard } from './PostCard';
import type { BlogPost } from '@/types/blog';

const mockPost: BlogPost = {
  id: 'test-post-1',
  title: 'テストポストタイトル',
  summary: 'これはテストポストの要約文です。実際の記事の概要を表示します。',
  content: 'テストポストの本文内容',
  tags: ['React', 'TypeScript', 'Test'],
  createdAt: new Date('2024-01-01T10:00:00Z'),
  updatedAt: new Date('2024-01-02T10:00:00Z'),
};

describe('PostCard', () => {
  it('renders post information correctly', () => {
    render(<PostCard post={mockPost} />);

    // タイトルとリンクの確認
    const titleLink = screen.getByRole('link', { name: 'テストポストタイトル' });
    expect(titleLink).toBeInTheDocument();
    expect(titleLink).toHaveAttribute('href', '/posts/test-post-1');

    // 要約の確認
    expect(screen.getByText('これはテストポストの要約文です。実際の記事の概要を表示します。')).toBeInTheDocument();

    // タグの確認
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<PostCard post={mockPost} className="custom-class" />);
    const article = container.querySelector('article');
    expect(article).toHaveClass('custom-class');
  });

  it('renders with default styling classes', () => {
    const { container } = render(<PostCard post={mockPost} />);
    const article = container.querySelector('article');
    expect(article).toHaveClass(
      'bg-white',
      'dark:bg-gray-800',
      'rounded-lg',
      'shadow-md',
      'hover:shadow-lg',
      'transition-shadow',
      'p-6'
    );
  });

  it('renders post with empty tags', () => {
    const postWithoutTags = { ...mockPost, tags: [] };
    render(<PostCard post={postWithoutTags} />);

    expect(screen.getByText('テストポストタイトル')).toBeInTheDocument();
    expect(screen.getByText('これはテストポストの要約文です。実際の記事の概要を表示します。')).toBeInTheDocument();
  });

  it('renders post with many tags (only first 3 should be visible)', () => {
    const postWithManyTags = {
      ...mockPost,
      tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5'],
    };
    render(<PostCard post={postWithManyTags} />);

    expect(screen.getByText('Tag1')).toBeInTheDocument();
    expect(screen.getByText('Tag2')).toBeInTheDocument();
    expect(screen.getByText('Tag3')).toBeInTheDocument();
    // TagListコンポーネントのmaxDisplay=3により、残りのタグは表示されないか省略表示される
  });

  it('renders post meta information', () => {
    render(<PostCard post={mockPost} />);
    
    // PostMetaコンポーネントから作成日時が表示されることを確認
    // 実際の表示形式は PostMeta コンポーネントに依存
    expect(screen.getByText(/2024/)).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    render(<PostCard post={mockPost} />);

    // article要素
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();

    // header要素（タイトルと要約を含む）
    const header = article.querySelector('header');
    expect(header).toBeInTheDocument();

    // footer要素（タグとメタ情報を含む）
    const footer = article.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });

  it('has hover effects on title link', () => {
    render(<PostCard post={mockPost} />);
    
    const titleLink = screen.getByRole('link', { name: 'テストポストタイトル' });
    expect(titleLink).toHaveClass(
      'hover:text-blue-600',
      'dark:hover:text-blue-400',
      'transition-colors'
    );
  });
});