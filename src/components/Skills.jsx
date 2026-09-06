import React from 'react';
import { skillGroups } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-24 lg:py-28 bg-paper-dim/60">
      <div className="container mx-auto px-5 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="skills" title="What I work with" />
        </Reveal>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 90} direction="scale">
              <div className="card-lift h-full border border-line rounded-md p-5 sm:p-6 bg-paper hover:border-accent/40">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-accent mb-4 sm:mb-5">
                  {group.category}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((skill) => (
                    <li key={skill} className="group flex items-center gap-2.5 text-sm sm:text-base text-ink font-light">
                      <span className="h-px w-2.5 bg-accent/50 flex-shrink-0 transition-all duration-300 group-hover:w-4 group-hover:bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
