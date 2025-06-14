import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders with default props', () => {
    render(<Tag>Default tag</Tag>);
    
    const tag = screen.getByText('Default tag');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('bg-gray-100', 'text-gray-700', 'px-2', 'py-1', 'text-xs');
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Tag variant="default">Default</Tag>);
    let tag = screen.getByText('Default');
    expect(tag).toHaveClass('bg-gray-100', 'text-gray-700');

    rerender(<Tag variant="primary">Primary</Tag>);
    tag = screen.getByText('Primary');
    expect(tag).toHaveClass('bg-blue-100', 'text-blue-800');

    rerender(<Tag variant="secondary">Secondary</Tag>);
    tag = screen.getByText('Secondary');
    expect(tag).toHaveClass('bg-green-100', 'text-green-800');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<Tag size="sm">Small</Tag>);
    let tag = screen.getByText('Small');
    expect(tag).toHaveClass('px-2', 'py-1', 'text-xs');

    rerender(<Tag size="md">Medium</Tag>);
    tag = screen.getByText('Medium');
    expect(tag).toHaveClass('px-3', 'py-1', 'text-sm');
  });

  it('accepts custom className', () => {
    render(<Tag className="custom-tag">Custom</Tag>);
    expect(screen.getByText('Custom')).toHaveClass('custom-tag');
  });

  it('renders complex content', () => {
    render(
      <Tag variant="primary">
        <span>Complex</span> tag
      </Tag>
    );
    
    expect(screen.getByText('Complex')).toBeInTheDocument();
    expect(screen.getByText('tag')).toBeInTheDocument();
  });
});