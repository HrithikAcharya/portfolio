import React from 'react';
import { profile } from '../data/portfolioData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const socials = [
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    path: 'M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z',
    viewBox: '0 0 488 512',
    external: false,
  },
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    path: 'M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z',
    viewBox: '0 0 448 512',
    external: true,
  },
  {
    label: 'GitHub',
    href: profile.github,
    path: 'M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z',
    viewBox: '0 0 496 512',
    external: true,
  },
];

const Footer = () => {
  return (
    <footer id="contact-info" className="scroll-mt-24 relative overflow-hidden bg-onyx text-paper">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="aurora absolute top-[-8rem] left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] rounded-full bg-accent/20 blur-[120px]" />
      </div>
      <div className="absolute inset-0 grid-dots text-white/[0.05]" aria-hidden="true" />

      <div className="container relative mx-auto px-5 sm:px-6 py-16 sm:py-24 lg:py-28 text-center">
        <Reveal>
          <SectionHeading eyebrow="contact" title="Let's build something reliable" tone="dark" align="center" />
        </Reveal>

        <Reveal delay={80}>
          <p className="text-white/60 max-w-xl mx-auto mt-6 text-base sm:text-lg leading-relaxed font-light text-justify hyphens-auto">
            I'm looking for full-time software engineering roles where I can ship features and
            help make sure they hold up. Reach out — I reply quickly.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-3 sm:gap-4 mt-9 sm:mt-10">
            <a
              href={`mailto:${profile.email}`}
              className="btn-sheen text-center px-6 py-3 rounded-md bg-accent text-paper font-medium text-sm hover:bg-accent-strong transition-colors duration-200 break-all xs:break-normal"
            >
              {profile.email}
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-6 py-3 rounded-md border border-white/20 text-paper font-medium text-sm hover:border-accent-soft hover:bg-white/[0.03] transition-colors duration-200"
            >
              Download résumé
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex justify-center gap-6 mt-10">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className="text-white/50 hover:text-paper transform hover:scale-110 transition duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox={s.viewBox} className="w-5 h-5">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="relative border-t border-white/10 py-6 text-center">
        <p className="font-mono text-xs text-white/40">&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
