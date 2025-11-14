
import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, isInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const startTime = Date.now();
      
      const step = () => {
        const currentTime = Date.now();
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const currentCount = Math.floor(progress * (end - start) + start);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
            setCount(end);
        }
      };
      
      requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default AnimatedCounter;
