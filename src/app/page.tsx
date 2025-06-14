import { getAllPosts } from '@/lib/blog';
import { MainLayout, Header, PostList } from '@/components';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <MainLayout>
      <Header />
      <main>
        <PostList posts={posts} />
      </main>
    </MainLayout>
  );
}
