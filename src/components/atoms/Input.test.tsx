import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Input, Textarea } from './Input';

describe('Input', () => {
  it('renders with default props', () => {
    render(<Input />);
    
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('border-gray-300', 'focus:ring-blue-500');
  });

  it('handles error state', () => {
    render(<Input error />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-red-300', 'focus:ring-red-500');
  });

  it('handles user input', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<Input onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    await user.type(input, 'test input');
    
    expect(input).toHaveValue('test input');
    expect(handleChange).toHaveBeenCalled();
  });

  it('accepts custom className', () => {
    render(<Input className="custom-input" />);
    expect(screen.getByRole('textbox')).toHaveClass('custom-input');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Input ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });
});

describe('Textarea', () => {
  it('renders with default props', () => {
    render(<Textarea />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('handles error state', () => {
    render(<Textarea error />);
    
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveClass('border-red-300', 'focus:ring-red-500');
  });

  it('handles user input', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    render(<Textarea onChange={handleChange} />);
    
    const textarea = screen.getByRole('textbox');
    await user.type(textarea, 'multiline\ntext content');
    
    expect(textarea).toHaveValue('multiline\ntext content');
    expect(handleChange).toHaveBeenCalled();
  });

  it('accepts rows prop', () => {
    render(<Textarea rows={5} />);
    expect(screen.getByRole('textbox')).toHaveAttribute('rows', '5');
  });
});