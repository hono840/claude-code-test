import { LabelHTMLAttributes, ReactNode } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  required?: boolean;
}

export function Label({ children, required, className = '', ...props }: LabelProps) {
  const classes = `block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${className}`;
  
  return (
    <label className={classes} {...props}>
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}