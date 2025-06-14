import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');
  
  const post = await prisma.post.create({
    data: {
      title: 'ブログへようこそ！',
      summary: 'このブログサイトの機能を紹介するサンプル記事です。',
      content: 'ブログへようこそ！\n\nこれは、ブログの機能をデモンストレーションするためのサンプル投稿です。このインターフェースを使って、記事の作成、編集、削除を行うことができます。\n\nこのブログは Next.js 15、TypeScript、Tailwind CSS で構築されており、データの永続化には Prisma と SQLite を使用しています。\n\n## 主な機能\n- 記事の作成・編集・削除\n- タグ機能\n- レスポンシブデザイン\n- ダークモード対応\n\nお気軽に記事を投稿してみてください！',
      tags: JSON.stringify(['ようこそ', 'サンプル', 'nextjs', 'ブログ'])
    }
  });
  
  console.log(`Created post with id: ${post.id}`);
  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });