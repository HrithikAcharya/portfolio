import React from 'react';
import useCountUp from '../hooks/useCountUp';

const CountUp = ({ value, suffix = '', className = '' }) => {
  const [ref, current] = useCountUp(value);
  return (
    <span ref={ref} className={className}>
      {current}
      {suffix}
    </span>
  );
};

export default CountUp;
