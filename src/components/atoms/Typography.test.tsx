import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Typography } from './Typography';

describe('Typography', () => {
  it('renders with default props', () => {
    render(<Typography>Default text</Typography>);
    
    const element = screen.getByText('Default text');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('P');
    expect(element).toHaveClass('text-base', 'text-gray-700');
  });

  it('renders different variants with correct styles', () => {
    const { rerender } = render(<Typography variant="h1">Heading 1</Typography>);
    let element = screen.getByText('Heading 1');
    expect(element.tagName).toBe('H1');
    expect(element).toHaveClass('text-4xl', 'font-bold');

    rerender(<Typography variant="h2">Heading 2</Typography>);
    element = screen.getByText('Heading 2');
    expect(element.tagName).toBe('H2');
    expect(element).toHaveClass('text-3xl', 'font-bold');

    rerender(<Typography variant="caption">Caption text</Typography>);
    element = screen.getByText('Caption text');
    expect(element.tagName).toBe('P');
    expect(element).toHaveClass('text-sm', 'text-gray-600');

    rerender(<Typography variant="small">Small text</Typography>);
    element = screen.getByText('Small text');
    expect(element.tagName).toBe('SPAN');
    expect(element).toHaveClass('text-xs', 'text-gray-500');
  });

  it('renders with custom element using as prop', () => {
    render(<Typography variant="body" as="div">Custom element</Typography>);
    
    const element = screen.getByText('Custom element');
    expect(element.tagName).toBe('DIV');
    expect(element).toHaveClass('text-base', 'text-gray-700');
  });

  it('accepts custom className', () => {
    render(<Typography className="custom-typography">Custom styled</Typography>);
    expect(screen.getByText('Custom styled')).toHaveClass('custom-typography');
  });

  it('renders nested content correctly', () => {
    render(
      <Typography variant="h1">
        Title with <strong>bold text</strong>
      </Typography>
    );
    
    expect(screen.getByText('Title with')).toBeInTheDocument();
    expect(screen.getByText('bold text')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});