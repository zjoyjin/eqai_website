'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  variants?: any;
  whileHover?: any;
  [key: string]: any;
}

/**
 * Motion wrapper that respects prefers-reduced-motion
 * Disables animations if user prefers reduced motion
 */
export default function MotionWrapper({
  children,
  className,
  ...motionProps
}: MotionWrapperProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // If user prefers reduced motion, return plain div without animations
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}
