'use client';

import { BlogTemplate, PostForm } from '@/components';
import type { CreateBlogPost } from '@/types/blog';

export default function CreatePost() {
  const handleSubmit = async (data: CreateBlogPost) => {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return await response.json();
    }
    
    return null;
  };

  return (
    <BlogTemplate 
      title="新しい記事を作成" 
      backText="ブログに戻る"
    >
      <PostForm onSubmit={handleSubmit} />
    </BlogTemplate>
  );
}