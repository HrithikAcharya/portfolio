import React from 'react';
import { aboutText, skillGroups, projects } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import CountUp from './CountUp';

const totalSkills = skillGroups.reduce((sum, g) => sum + g.items.length, 0);

const stats = [
  { value: projects.length, suffix: '', label: 'Projects shipped' },
  { value: totalSkills, suffix: '', label: 'Technologies' },
  { value: 4, suffix: '', label: 'Internships & training' },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24 lg:py-28">
      <div className="container mx-auto px-5 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="about" title="About Me" />
        </Reveal>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 sm:gap-10 lg:gap-16 items-start">
          <Reveal delay={80} direction="left">
            <p className="text-ink-soft text-lg sm:text-xl leading-relaxed font-light text-justify hyphens-auto">{aboutText}</p>
          </Reveal>

          <Reveal delay={160} direction="right">
            <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-line pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-ink-soft mt-2 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
