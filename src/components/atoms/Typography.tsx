import { ReactNode } from 'react';

export interface TypographyProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'small';
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function Typography({ 
  children, 
  variant = 'body', 
  className = '', 
  as 
}: TypographyProps) {
  const variantClasses = {
    h1: 'text-4xl font-bold text-gray-900 dark:text-white',
    h2: 'text-3xl font-bold text-gray-900 dark:text-white',
    h3: 'text-2xl font-semibold text-gray-900 dark:text-white',
    h4: 'text-xl font-semibold text-gray-900 dark:text-white',
    body: 'text-base text-gray-700 dark:text-gray-300',
    caption: 'text-sm text-gray-600 dark:text-gray-400',
    small: 'text-xs text-gray-500 dark:text-gray-500'
  };
  
  const defaultElements = {
    h1: 'h1',
    h2: 'h2', 
    h3: 'h3',
    h4: 'h4',
    body: 'p',
    caption: 'p',
    small: 'span'
  } as const;
  
  const Component = as || defaultElements[variant];
  const classes = `${variantClasses[variant]} ${className}`;
  
  return (
    <Component className={classes}>
      {children}
    </Component>
  );
}