import { ReactNode } from 'react';
import { Label, Input, Textarea } from '../atoms';
import type { InputProps, TextareaProps } from '../atoms';

export interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children?: ReactNode;
  className?: string;
}

export interface InputFieldProps extends FormFieldProps, Omit<InputProps, 'error'> {
  type?: 'text' | 'email' | 'password' | 'number';
  id?: string;
}

export interface TextareaFieldProps extends FormFieldProps, Omit<TextareaProps, 'error'> {
  id?: string;
}

export function FormField({ label, required, error, children, className = '' }: FormFieldProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      <Label required={required}>
        {label}
      </Label>
      {children}
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export function InputField({ 
  label, 
  required, 
  error, 
  className = '', 
  id,
  ...inputProps 
}: InputFieldProps) {
  const generateId = (text: string) => {
    // Use a simple mapping for common Japanese labels
    const labelMap: Record<string, string> = {
      'タイトル': 'title',
      '要約': 'summary', 
      '本文': 'content',
      'タグ（カンマ区切り）': 'tags',
      'タグ': 'tags',
      'お名前': 'name',
      'メールアドレス': 'email',
      'パスワード': 'password'
    };
    
    return labelMap[text] || `input-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };
  
  const inputId = id || generateId(label);
  
  return (
    <div className={`space-y-1 ${className}`}>
      <Label htmlFor={inputId} required={required}>
        {label}
      </Label>
      <Input 
        id={inputId}
        error={!!error}
        required={required}
        {...inputProps} 
      />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextareaField({ 
  label, 
  required, 
  error, 
  className = '', 
  id,
  ...textareaProps 
}: TextareaFieldProps) {
  const generateId = (text: string) => {
    // Use a simple mapping for common Japanese labels
    const labelMap: Record<string, string> = {
      'タイトル': 'title',
      '要約': 'summary', 
      '本文': 'content',
      'タグ（カンマ区切り）': 'tags',
      'タグ': 'tags',
      'コメント': 'comment',
      'メッセージ': 'message',
      '説明': 'description'
    };
    
    return labelMap[text] || `textarea-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };
  
  const textareaId = id || generateId(label);
  
  return (
    <div className={`space-y-1 ${className}`}>
      <Label htmlFor={textareaId} required={required}>
        {label}
      </Label>
      <Textarea 
        id={textareaId}
        error={!!error}
        required={required}
        {...textareaProps} 
      />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}