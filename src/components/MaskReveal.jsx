import React from 'react';
import useReveal from '../hooks/useReveal';

// Wraps text in an overflow-clip line; the inner span slides up from below
// the mask when scrolled into view — the signature "editorial" heading reveal.
const MaskReveal = ({ as: Tag = 'span', delay = 0, className = '', children }) => {
  const [ref, visible] = useReveal(0.3);

  return (
    <Tag ref={ref} className={`block overflow-hidden ${className}`}>
      <span
        className="block will-change-transform"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(110%)',
          transition: `transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        }}
      >
        {children}
      </span>
    </Tag>
  );
};

export default MaskReveal;
