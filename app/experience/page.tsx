import PageContainer from '@/components/PageContainer';
import Footer from '@/components/Footer';
import TimelineEntry from '@/components/TimelineEntry';
import { experiences } from '@/data/experience';

// Experience/Timeline page
// Specs: White background, scrollable, vertical timeline
// Page title + timeline entries

export default function ExperiencePage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-white flex flex-col">
      <PageContainer className="py-section-sm md:py-section-lg flex-1">
        <h1 className="text-[2rem] md:text-page-title text-text-primary mb-16">
          Timeline
        </h1>

        {/* Timeline entries */}
        <div>
          {experiences.map((experience, index) => (
            <TimelineEntry
              key={experience.id}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </PageContainer>

      <Footer />
    </main>
  );
}
