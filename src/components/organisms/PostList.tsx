import { Typography, LinkButton } from '../atoms';
import { PostCard } from './PostCard';
import type { BlogPost } from '@/types/blog';

export interface PostListProps {
  posts: BlogPost[];
  className?: string;
}

function EmptyState() {
  return (
    <div className="text-center py-12">
      <Typography variant="body" className="mb-4">
        まだ記事がありません。
      </Typography>
      <LinkButton href="/create" variant="primary">
        最初の記事を書いてみませんか？
      </LinkButton>
    </div>
  );
}

export function PostList({ posts, className = '' }: PostListProps) {
  if (posts.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}