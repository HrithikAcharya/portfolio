import React, { useState } from 'react';
import { profile } from '../data/portfolioData';
import useParallax from '../hooks/useParallax';

const meta = [
  profile.location,
  'MS in Information Technology, Florida State',
  'QA · Full-stack · Cloud',
];

const initials = profile.name
  .split(' ')
  .map((w) => w[0])
  .join('');

const Hero = () => {
  const [imgFailed, setImgFailed] = useState(false);
  const portraitRef = useParallax(0.04);
  const blob1 = useParallax(-0.12);
  const blob2 = useParallax(0.16);

  return (
    <section id="top" className="relative overflow-hidden bg-onyx text-paper">
      {/* Drifting aurora blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div ref={blob1} className="aurora absolute -top-32 -left-24 w-[26rem] h-[26rem] rounded-full bg-accent/25 blur-[100px]" />
        <div ref={blob2} className="aurora aurora-slow absolute -bottom-40 right-[-6rem] w-[30rem] h-[30rem] rounded-full bg-accent-strong/25 blur-[120px]" />
      </div>
      <div className="absolute inset-0 grid-dots text-white/[0.04]" aria-hidden="true" />

      <div className="container relative mx-auto px-5 sm:px-6 pt-14 pb-20 sm:pt-24 sm:pb-28 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 sm:gap-14 lg:gap-20 items-center">
        {/* Portrait — first on mobile, second on desktop */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-rise" style={{ animationDelay: '250ms' }}>
          <div ref={portraitRef} className="group relative w-44 sm:w-60 lg:w-full lg:max-w-[22rem]">
            <div className="relative overflow-hidden rounded-xl aspect-[801/958] bg-onyx-soft border border-white/10">
              {imgFailed ? (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-display text-5xl sm:text-6xl text-accent-soft/70">{initials}</span>
                </div>
              ) : (
                <img
                  src={`${import.meta.env.BASE_URL}headshot.jpg`}
                  alt={`Portrait of ${profile.name}`}
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-cover object-center"
                />
              )}
            </div>
          </div>
        </div>

        <div className="order-2 lg:order-1">
          <div className="animate-rise inline-flex items-center gap-2.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-line-dark text-accent-soft mb-7 sm:mb-8" style={{ animationDelay: '0ms' }}>
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-accent-soft pulse-dot" />
            </span>
            {profile.status}
          </div>

          <h1 className="animate-rise font-display text-4xl xs:text-5xl leading-[1.05] sm:text-6xl md:text-7xl sm:leading-[1.02] mb-4 sm:mb-5" style={{ animationDelay: '90ms' }}>
            {profile.name}
          </h1>

          <p className="animate-rise font-mono text-accent-soft text-xs sm:text-sm uppercase tracking-[0.18em] mb-6 sm:mb-7" style={{ animationDelay: '170ms' }}>
            {profile.role}
          </p>

          <p className="animate-rise text-white/65 text-base sm:text-lg leading-relaxed max-w-xl mb-8 sm:mb-9 font-light text-justify hyphens-auto" style={{ animationDelay: '250ms' }}>
            An Information Technology graduate student at Florida State University who builds
            software end to end — and cares just as much that it holds up. My work runs from
            full-stack web apps to applied AI, paired with the testing rigor that keeps it reliable.
          </p>

          <div className="animate-rise flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 sm:gap-4" style={{ animationDelay: '330ms' }}>
            <a
              href="#projects"
              className="btn-sheen text-center px-6 py-3 rounded-md bg-accent text-paper font-medium text-sm tracking-wide hover:bg-accent-strong transition-colors duration-300"
            >
              View my work
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-6 py-3 rounded-md border border-white/20 text-paper font-medium text-sm tracking-wide hover:border-accent-soft hover:bg-white/[0.03] transition-colors duration-300"
            >
              Résumé
            </a>
          </div>

          <ul className="animate-rise flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-0 mt-10 sm:mt-12 pt-6 sm:pt-7 border-t border-white/10 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white/40" style={{ animationDelay: '420ms' }}>
            {meta.map((item, i) => (
              <li key={item} className="flex items-center">
                {i > 0 && <span className="hidden sm:inline mx-3 text-white/20">/</span>}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative hidden sm:flex justify-center pb-8" aria-hidden="true">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 flex flex-col items-center gap-2">
          Scroll
          <span className="w-px h-8 bg-gradient-to-b from-accent-soft/60 to-transparent" />
        </span>
      </div>
    </section>
  );
};

export default Hero;
