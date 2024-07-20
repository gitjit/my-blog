// src/BlogPost.tsx
import React, { useEffect, useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer';

interface BlogPostProps {
  post: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`./posts/${post}.md`)
      .then((res) => fetch(res.default))
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [post]);

  return <MarkdownRenderer markdown={content} />;
};

export default BlogPost;
