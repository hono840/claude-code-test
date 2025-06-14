'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../atoms';
import { InputField, TextareaField } from '../molecules';
import type { CreateBlogPost } from '@/types/blog';

export interface PostFormProps {
  initialData?: Partial<CreateBlogPost>;
  onSubmit: (data: CreateBlogPost) => Promise<{ id: string } | null>;
  submitButtonText?: string;
  isEditing?: boolean;
  className?: string;
}

export function PostForm({ 
  initialData, 
  onSubmit, 
  submitButtonText = '記事を投稿',
  className = '' 
}: PostFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    summary: initialData?.summary || '',
    content: initialData?.content || '',
    tags: initialData?.tags?.join(', ') || ''
  });

  const handleChange = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'タイトルは必須です';
    }
    
    if (!formData.summary.trim()) {
      newErrors.summary = '要約は必須です';
    }
    
    if (!formData.content.trim()) {
      newErrors.content = '本文は必須です';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const tags = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag);
      
      const result = await onSubmit({
        title: formData.title,
        summary: formData.summary,
        content: formData.content,
        tags
      });

      if (result) {
        router.push(`/posts/${result.id}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <InputField
        label="タイトル"
        required
        value={formData.title}
        onChange={handleChange('title')}
        error={errors.title}
        placeholder="記事のタイトルを入力してください"
      />

      <TextareaField
        label="要約"
        required
        rows={3}
        value={formData.summary}
        onChange={handleChange('summary')}
        error={errors.summary}
        placeholder="記事の簡単な要約を書いてください"
      />

      <TextareaField
        label="本文"
        required
        rows={12}
        value={formData.content}
        onChange={handleChange('content')}
        error={errors.content}
        placeholder="記事の内容をここに書いてください..."
      />

      <InputField
        label="タグ（カンマ区切り）"
        value={formData.tags}
        onChange={handleChange('tags')}
        error={errors.tags}
        placeholder="技術, プログラミング, 日記"
      />

      <div className="flex gap-4 pt-4">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          variant="primary"
        >
          {isSubmitting ? '処理中...' : submitButtonText}
        </Button>
        
        <Button 
          type="button"
          variant="secondary"
          onClick={() => router.back()}
        >
          キャンセル
        </Button>
      </div>
    </form>
  );
}