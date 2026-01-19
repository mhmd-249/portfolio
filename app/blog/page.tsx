import PageContainer from '@/components/PageContainer';
import Footer from '@/components/Footer';

// Blog page
// Specs: White background, scrollable
// Page title + subtitle + blog entries

export default function BlogPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-white flex flex-col">
      <PageContainer className="py-section-sm md:py-section-lg flex-1">
        <h1 className="text-page-title text-text-primary mb-6">
          Writing on machine learning, AI engineering, and AI systems.
        </h1>
        <p className="text-section-desc text-text-secondary mb-12">
          All of my long-form thoughts on AI, engineering, research, and more,
          collected in chronological order.
        </p>

        {/* Blog entries will be implemented here */}
        <div className="text-text-tertiary">
          Blog entries coming soon...
        </div>
      </PageContainer>

      <Footer />
    </main>
  );
}
