import PageContainer from '@/components/PageContainer';
import Footer from '@/components/Footer';

// Projects page
// Specs: White background, scrollable, centered content
// Page title + subtitle + project cards

export default function ProjectsPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-white flex flex-col">
      <PageContainer className="py-section-sm md:py-section-lg flex-1">
        <h1 className="text-page-title text-text-primary mb-6">
          Projects
        </h1>
        <p className="text-section-desc text-text-secondary mb-12">
          Selected work in machine learning and AI engineering.
        </p>

        {/* Project cards will be implemented here */}
        <div className="text-text-tertiary">
          Project cards coming soon...
        </div>
      </PageContainer>

      <Footer />
    </main>
  );
}
