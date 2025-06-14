import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostById } from '@/lib/blog';

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
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        ← ブログに戻る
      </Link>

      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="text-gray-500 dark:text-gray-400 text-sm">
            <p>作成日: {post.createdAt.toLocaleDateString('ja-JP')}</p>
            {post.updatedAt.getTime() !== post.createdAt.getTime() && (
              <p>更新日: {post.updatedAt.toLocaleDateString('ja-JP')}</p>
            )}
          </div>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <div className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
            {post.summary}
          </div>
          
          <div className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed">
            {post.content}
          </div>
        </div>

        <footer className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link
            href={`/edit/${post.id}`}
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors mr-4"
          >
            記事を編集
          </Link>
          <Link
            href="/"
            className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            ブログに戻る
          </Link>
        </footer>
      </article>
    </div>
  );
}