import { BlogPost, CreateBlogPost } from '@/types/blog';
import { prisma } from './prisma';

export const getAllPosts = async (): Promise<BlogPost[]> => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });
  
  return posts.map(post => ({
    ...post,
    tags: JSON.parse(post.tags)
  }));
};

export const getPostById = async (id: string): Promise<BlogPost | null> => {
  const post = await prisma.post.findUnique({
    where: { id }
  });
  
  if (!post) return null;
  
  return {
    ...post,
    tags: JSON.parse(post.tags)
  };
};

export const createPost = async (postData: CreateBlogPost): Promise<BlogPost> => {
  const post = await prisma.post.create({
    data: {
      title: postData.title,
      content: postData.content,
      summary: postData.summary,
      tags: JSON.stringify(postData.tags)
    }
  });
  
  return {
    ...post,
    tags: JSON.parse(post.tags)
  };
};

export const updatePost = async (id: string, postData: Partial<CreateBlogPost>): Promise<BlogPost | null> => {
  try {
    const updateData: {
      title?: string;
      content?: string;
      summary?: string;
      tags?: string;
    } = {};
    
    if (postData.title !== undefined) updateData.title = postData.title;
    if (postData.content !== undefined) updateData.content = postData.content;
    if (postData.summary !== undefined) updateData.summary = postData.summary;
    if (postData.tags !== undefined) updateData.tags = JSON.stringify(postData.tags);
    
    const post = await prisma.post.update({
      where: { id },
      data: updateData
    });
    
    return {
      ...post,
      tags: JSON.parse(post.tags)
    };
  } catch {
    return null;
  }
};

export const deletePost = async (id: string): Promise<boolean> => {
  try {
    await prisma.post.delete({
      where: { id }
    });
    return true;
  } catch {
    return false;
  }
};