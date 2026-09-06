import React from 'react';

// Seamless infinite marquee. Duplicates the items track so the loop is
// continuous. Pauses on hover. Honors reduced-motion via CSS.
const Marquee = ({ items, tone = 'dark', speed = 30 }) => {
  const isDark = tone === 'dark';
  const track = (
    <div className="marquee-track flex items-center shrink-0" style={{ animationDuration: `${speed}s` }}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`font-display text-4xl sm:text-6xl md:text-7xl px-6 sm:px-10 ${
              isDark ? 'text-paper' : 'text-ink'
            }`}
          >
            {item}
          </span>
          <span className={`text-2xl sm:text-4xl ${isDark ? 'text-accent-soft' : 'text-accent'}`}>✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee relative flex overflow-hidden select-none py-6 sm:py-8 border-y ${
        isDark ? 'bg-onyx border-line-dark' : 'bg-paper border-line'
      }`}
      aria-hidden="true"
    >
      {track}
      {track}
    </div>
  );
};

export default Marquee;
