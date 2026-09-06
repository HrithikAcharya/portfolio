import React, { useMemo, useState } from 'react';
import { projects } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const tags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ['All', ...Array.from(set)];
  }, []);

  const [active, setActive] = useState('All');

  const visible = active === 'All' ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-24 lg:py-28 bg-paper-dim/60">
      <div className="container mx-auto px-5 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="projects" title="My Work" />
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-wrap gap-2 mt-7 sm:mt-8 -mx-1 px-1 overflow-x-auto sm:overflow-visible pb-1">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`flex-shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] px-3.5 sm:px-4 py-2 rounded-md border transition-all duration-200 ${
                  active === tag
                    ? 'bg-ink text-paper border-ink scale-[1.02]'
                    : 'border-line text-ink-soft hover:border-ink hover:text-ink'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          key={active}
          className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-7 sm:mt-8"
        >
          {visible.map((project, i) => (
            <Reveal key={`${active}-${project.title}`} delay={(i % 3) * 80} direction="scale">
              <ProjectCard {...project} index={projects.indexOf(project)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
