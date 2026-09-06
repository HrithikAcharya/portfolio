import { useEffect, useRef } from 'react';

// Translates an element vertically as it moves through the viewport.
// speed > 0 moves it slower than scroll (drifts down), < 0 moves it faster.
export default function useParallax(speed = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    let raf = null;
    const update = () => {
      raf = null;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      // distance of element center from viewport center, normalized
      const offset = rect.top + rect.height / 2 - viewport / 2;
      node.style.transform = `translate3d(0, ${(-offset * speed).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}
