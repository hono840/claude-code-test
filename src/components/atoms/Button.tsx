import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: ReactNode;
}

export interface LinkButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href: string;
  children: ReactNode;
  className?: string;
}

const getButtonClasses = (
  variant: ButtonProps['variant'] = 'primary',
  size: ButtonProps['size'] = 'md',
  fullWidth?: boolean
) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    ghost: 'text-blue-600 hover:text-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:ring-blue-500'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass}`.trim();
};

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth, 
  className = '', 
  disabled,
  children, 
  ...props 
}: ButtonProps) {
  const classes = `${getButtonClasses(variant, size, fullWidth)} ${className}`;
  
  return (
    <button 
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth, 
  href, 
  className = '', 
  children 
}: LinkButtonProps) {
  const classes = `${getButtonClasses(variant, size, fullWidth)} ${className}`;
  
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}