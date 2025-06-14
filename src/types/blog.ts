export interface BlogPost {
  id: string;
  title: string;
  content: string;
  summary: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}

export interface CreateBlogPost {
  title: string;
  content: string;
  summary: string;
  tags: string[];
}