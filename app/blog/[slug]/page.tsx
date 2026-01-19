import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import PageContainer from '@/components/PageContainer';
import Footer from '@/components/Footer';
import ArticleContent from '@/components/ArticleContent';
import { getBlogBySlug, getAllBlogSlugs } from '@/data/blogs';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Mohammed Mohammed`,
    description: post.excerpt,
  };
}

// Format date to full format
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const hasContent = post.content && post.content.length > 0;

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-white flex flex-col">
      <PageContainer className="py-section-sm md:py-section-lg flex-1">
        {/* Back navigation and date */}
        <div className="flex items-center gap-4 mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-text-tertiary hover:text-mint transition-colors duration-200"
            aria-label="Back to blog"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
          <time
            dateTime={post.date}
            className="text-meta text-text-tertiary"
          >
            {formatDate(post.date)}
          </time>
        </div>

        {/* Article title */}
        <h1 className="text-[2rem] md:text-page-title font-bold text-text-primary tracking-tight mb-8">
          {post.title}
        </h1>

        {/* Article content */}
        {hasContent ? (
          <ArticleContent content={post.content!} />
        ) : (
          <div className="text-text-secondary">
            <p className="text-section-desc mb-6">{post.excerpt}</p>
            <p className="text-body text-text-tertiary italic">
              Full article coming soon...
            </p>
          </div>
        )}
      </PageContainer>

      <Footer />
    </main>
  );
}
