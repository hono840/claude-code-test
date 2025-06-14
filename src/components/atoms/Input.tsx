import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const inputClasses = 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors dark:bg-gray-700 dark:text-white';
const normalClasses = 'border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500';
const errorClasses = 'border-red-300 dark:border-red-600 focus:ring-red-500 focus:border-red-500';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className = '', ...props }, ref) => {
    const classes = `${inputClasses} ${error ? errorClasses : normalClasses} ${className}`;
    
    return (
      <input
        ref={ref}
        className={classes}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, className = '', ...props }, ref) => {
    const classes = `${inputClasses} ${error ? errorClasses : normalClasses} ${className}`;
    
    return (
      <textarea
        ref={ref}
        className={classes}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';