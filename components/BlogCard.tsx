import Link from 'next/link';
import { BlogPost } from '@/data/blogs';

interface BlogCardProps {
  post: BlogPost;
}

// Format date to "Month Year" format
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col md:flex-row gap-4 md:gap-8">
      {/* Date column - 20% on desktop */}
      <div className="md:w-1/5 flex-shrink-0">
        <time
          dateTime={post.date}
          className="text-meta text-text-tertiary"
        >
          {formatDate(post.date)}
        </time>
      </div>

      {/* Content column - 80% on desktop */}
      <div className="md:w-4/5">
        <h2 className="text-card-title text-text-primary mb-3 group-hover:text-text-secondary transition-colors duration-200">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <p className="text-body text-text-secondary leading-relaxed mb-4">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-mint hover:underline transition-all duration-200"
        >
          Read article
          <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
