export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  coverUrl: string;
  buyLink: string;
  releaseYear: string;
  rating?: number;
  reviewCount?: number;
  isNew?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Can support basic HTML or markdown-like text
  date: string;
  imageUrl?: string;
  readTime: string;
  tags: string[];
}