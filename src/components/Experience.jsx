import React from 'react';
import { timeline } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const typeColor = {
  Experience: 'text-accent border-accent/60',
  Education: 'text-ink-soft border-line',
  Training: 'text-ink-soft border-line',
};

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-16 sm:py-24 lg:py-28">
      <div className="container mx-auto px-5 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="experience" title="Education & Experience" />
        </Reveal>

        <div className="mt-10 sm:mt-12 max-w-3xl">
          <ol className="relative border-l border-line pl-6 sm:pl-8 space-y-8 sm:space-y-10">
            {timeline.map((item, i) => (
              <Reveal as="li" key={`${item.title}-${i}`} delay={i * 90} direction="left" className="relative group">
                <span
                  className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-2.5 h-2.5 rounded-full bg-paper border-2 border-accent transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                  <span
                    className={`font-mono text-[9px] uppercase tracking-[0.2em] border rounded-md px-2 py-0.5 ${
                      typeColor[item.type] || 'text-ink-soft border-ink-soft'
                    }`}
                  >
                    {item.type}
                  </span>
                  <span className="font-mono text-xs text-ink-soft">{item.period}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl text-ink">{item.title}</h3>
                <p className="font-mono text-xs text-ink-soft mb-3 tracking-wide">{item.org}</p>
                <ul className="space-y-1.5">
                  {item.points.map((point) => (
                    <li key={point} className="text-sm sm:text-base text-ink-soft leading-relaxed font-light text-justify hyphens-auto">
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
