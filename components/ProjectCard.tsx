import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group">
      {/* Project title */}
      <h2 className="text-card-title text-text-primary mb-4 group-hover:text-text-secondary transition-colors duration-200">
        {project.title}
      </h2>

      {/* Project description */}
      <p className="text-body text-text-secondary leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tech stack - inline, subtle */}
      <div className="flex flex-wrap gap-x-1">
        {project.techStack.map((tech, index) => (
          <span
            key={tech}
            className="text-meta text-text-tertiary"
          >
            {tech}
            {index < project.techStack.length - 1 && (
              <span className="mx-1.5">·</span>
            )}
          </span>
        ))}
      </div>
    </article>
  );
}
