import Link from 'next/link';
import { Typography } from '../atoms';
import { TagList, PostMeta } from '../molecules';
import type { BlogPost } from '@/types/blog';

export interface PostCardProps {
  post: BlogPost;
  className?: string;
}

export function PostCard({ post, className = '' }: PostCardProps) {
  return (
    <article className={`bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 ${className}`}>
      <header className="mb-4">
        <Typography variant="h3" className="mb-3">
          <Link 
            href={`/posts/${post.id}`} 
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {post.title}
          </Link>
        </Typography>
        
        <Typography variant="body" className="line-clamp-3 mb-4">
          {post.summary}
        </Typography>
      </header>

      <footer className="space-y-4">
        <TagList 
          tags={post.tags} 
          variant="default" 
          maxDisplay={3}
        />
        
        <PostMeta 
          createdAt={post.createdAt}
          updatedAt={post.updatedAt}
          showUpdated={false}
        />
      </footer>
    </article>
  );
}