import PageContainer from '@/components/PageContainer';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

// Projects page
// Specs: White background, scrollable, centered content
// Page title + subtitle + project cards

export default function ProjectsPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-white flex flex-col">
      <PageContainer className="py-section-sm md:py-section-lg flex-1">
        <h1 className="text-[2rem] md:text-page-title text-text-primary mb-6">
          Projects
        </h1>
        <p className="text-lg md:text-section-desc text-text-secondary leading-relaxed mb-16">
          Selected work in machine learning and AI engineering.
        </p>

        {/* Project cards - 4rem (64px) spacing between projects */}
        <div className="space-y-project-card">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </PageContainer>

      <Footer />
    </main>
  );
}
