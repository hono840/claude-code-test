import { notFound } from 'next/navigation';
import { getPostById } from '@/lib/blog';
import { MainLayout, Typography, TagList, PostMeta, LinkButton, BackNavigation } from '@/components';

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <MainLayout className="max-w-4xl">
      <BackNavigation href="/" className="mb-8">
        ブログに戻る
      </BackNavigation>

      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <header className="mb-8">
          <Typography variant="h1" className="mb-4">
            {post.title}
          </Typography>
          
          <TagList 
            tags={post.tags} 
            variant="primary" 
            size="md" 
            className="mb-4" 
          />

          <PostMeta 
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
          />
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <Typography variant="body" className="mb-6 text-lg">
            {post.summary}
          </Typography>
          
          <div className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed">
            {post.content}
          </div>
        </div>

        <footer className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 flex gap-4">
          <LinkButton
            href={`/edit/${post.id}`}
            variant="primary"
          >
            記事を編集
          </LinkButton>
          <LinkButton
            href="/"
            variant="secondary"
          >
            ブログに戻る
          </LinkButton>
        </footer>
      </article>
    </MainLayout>
  );
}