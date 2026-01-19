import { Experience } from '@/data/experience';

interface TimelineEntryProps {
  experience: Experience;
  isLast?: boolean;
}

export default function TimelineEntry({ experience, isLast = false }: TimelineEntryProps) {
  const { title, company, description, learned, date, isCurrent, isYearMarker } = experience;

  return (
    <div className="relative flex gap-6 md:gap-8">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div
          className={`relative z-10 flex-shrink-0 w-3 h-3 rounded-full border-2 ${
            isCurrent
              ? 'bg-amber-400 border-amber-400' // Gold/amber for "Today"
              : isYearMarker
              ? 'bg-white border-text-tertiary' // Hollow dot for year markers
              : 'bg-text-primary border-text-primary' // Filled dot for regular entries
          }`}
        />
        {/* Vertical line */}
        {!isLast && (
          <div className="w-0.5 flex-1 bg-border -mb-6" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 pb-12 ${isLast ? 'pb-0' : ''}`}>
        {/* Date */}
        <span className="text-meta text-text-tertiary block mb-1">
          {date}
        </span>

        {/* Title and Company */}
        <h3 className="text-card-title text-text-primary">
          {title}
          {company && (
            <span className="font-normal text-text-secondary">
              {' '}at {company}
            </span>
          )}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-body text-text-secondary leading-relaxed mt-3">
            {description}
          </p>
        )}

        {/* Learned section */}
        {learned && (
          <p className="text-meta text-text-tertiary italic mt-3">
            <span className="not-italic font-medium">Learned:</span> {learned}
          </p>
        )}
      </div>
    </div>
  );
}
