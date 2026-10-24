'use client';

import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

function Reveal({ children, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`wd-reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default Reveal;
