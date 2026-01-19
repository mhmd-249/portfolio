import PageContainer from '@/components/PageContainer';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogs';

// Blog page
// Specs: White background, scrollable
// Page title + subtitle + blog entries

export default function BlogPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-white flex flex-col">
      <PageContainer className="py-section-sm md:py-section-lg flex-1">
        <h1 className="text-[2rem] md:text-page-title text-text-primary mb-6">
          Writing on machine learning, AI engineering, and AI systems.
        </h1>
        <p className="text-lg md:text-section-desc text-text-secondary leading-relaxed mb-16">
          All of my long-form thoughts on AI, engineering, research, and more,
          collected in chronological order.
        </p>

        {/* Blog entries - 3rem (48px) spacing between entries */}
        <div className="space-y-blog-entry">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </PageContainer>

      <Footer />
    </main>
  );
}
