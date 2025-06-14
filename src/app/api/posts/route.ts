import { NextRequest, NextResponse } from 'next/server';
import { createPost, getAllPosts } from '@/lib/blog';
import { CreateBlogPost } from '@/types/blog';

export async function GET() {
  try {
    const posts = await getAllPosts();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateBlogPost = await request.json();
    
    if (!body.title || !body.content || !body.summary) {
      return NextResponse.json(
        { error: 'Title, content, and summary are required' },
        { status: 400 }
      );
    }

    const post = await createPost(body);
    return NextResponse.json(post, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}