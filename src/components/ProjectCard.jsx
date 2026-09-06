import React from 'react';

const ProjectCard = ({ title, description, link, tags, index }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-lift group relative h-full flex flex-col border border-line rounded-md p-5 sm:p-6 bg-paper hover:border-accent focus-visible:border-accent overflow-hidden"
    >
      {typeof index === 'number' && (
        <span
          className="ghost-number pointer-events-none absolute -top-3 right-2 font-display text-7xl sm:text-8xl leading-none select-none"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      )}
      <div className="relative flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[9px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-md bg-paper-dim text-ink-soft transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="relative font-display text-xl sm:text-2xl text-ink mb-3 leading-snug transition-colors duration-300 group-hover:text-accent">
        {title}
      </h3>

      <p className="relative text-sm sm:text-base text-ink-soft leading-relaxed mb-6 flex-1 font-light text-justify hyphens-auto">{description}</p>

      <span className="relative inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent group-hover:gap-3 transition-all duration-300 mt-auto">
        View project
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
        </svg>
      </span>
    </a>
  );
};

export default ProjectCard;
