import PageContainer from '@/components/PageContainer';
import Footer from '@/components/Footer';

// Experience/Timeline page
// Specs: White background, scrollable, vertical timeline
// Page title + timeline entries

export default function ExperiencePage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-white flex flex-col">
      <PageContainer className="py-section-sm md:py-section-lg flex-1">
        <h1 className="text-page-title text-text-primary mb-12">
          Timeline
        </h1>

        {/* Timeline entries will be implemented here */}
        <div className="text-text-tertiary">
          Timeline entries coming soon...
        </div>
      </PageContainer>

      <Footer />
    </main>
  );
}
