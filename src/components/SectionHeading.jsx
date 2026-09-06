import React from 'react';
import MaskReveal from './MaskReveal';

const SectionHeading = ({ eyebrow, title, tone = 'light', align = 'left' }) => {
  const isDark = tone === 'dark';

  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <p
        className={`font-mono text-[10px] sm:text-[11px] tracking-[0.28em] uppercase mb-4 ${
          isDark ? 'text-accent-soft' : 'text-accent'
        }`}
      >
        {eyebrow}
      </p>
      <MaskReveal
        as="h2"
        className={`font-display text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.08] pb-[0.1em] ${
          isDark ? 'text-paper' : 'text-ink'
        }`}
      >
        {title}
      </MaskReveal>
    </div>
  );
};

export default SectionHeading;
