import Link from 'next/link';
import Footer from '@/components/Footer';
import AgentPathways from '@/components/AgentPathways';

// Landing page
// Specs: Single page, non-scrollable, 100vh, cream background (#F5F1ED)
// Hero centered vertically with bio and visualization

export default function Home() {
  return (
    <main className="h-[calc(100vh-4rem)] bg-cream flex flex-col overflow-hidden">
      {/* Main content - centered vertically */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-content mx-auto px-6 md:px-12">
          {/* Hero Section */}
          <section className="text-center">
            {/* Greeting */}
            <h1 className="text-[2.5rem] md:text-page-title font-bold tracking-tight text-text-primary mb-6">
              Hi, I&apos;m Mohammed
            </h1>

            {/* Bio */}
            <p className="text-lg md:text-section-desc text-text-secondary leading-relaxed mb-4">
              a machine learning engineer and researcher. I help companies
              build production-grade AI solutions. My thoughts focus on machine
              learning and AI engineering.
            </p>

            {/* Call to action with inline links */}
            <p className="text-lg md:text-section-desc text-text-secondary leading-relaxed mb-10 md:mb-12">
              You can start reading my{' '}
              <Link
                href="/blog"
                className="text-mint underline underline-offset-4 decoration-mint/50 hover:decoration-mint transition-all duration-200"
              >
                personal blog posts
              </Link>{' '}
              or my{' '}
              <Link
                href="/projects"
                className="text-mint underline underline-offset-4 decoration-mint/50 hover:decoration-mint transition-all duration-200"
              >
                portfolio of projects
              </Link>
              .
            </p>

            {/* Agent Pathways Visualization */}
            <AgentPathways />
          </section>
        </div>
      </div>

      {/* Footer pinned to bottom */}
      <Footer variant="landing" />
    </main>
  );
}
