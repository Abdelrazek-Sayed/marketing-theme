
import React, { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className = '', delay = 'delay-100' }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out ${delay} ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
