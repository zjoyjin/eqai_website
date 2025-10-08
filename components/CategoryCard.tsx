'use client';

import Link from 'next/link';
import MotionWrapper from './MotionWrapper';

interface CategoryCardProps {
  href: string;
  emoji: string;
  title: string;
  subtitle: string;
  index: number;
}

export default function CategoryCard({ href, emoji, title, subtitle, index }: CategoryCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <MotionWrapper
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group"
    >
      <Link
        href={href}
        className="flex h-full flex-col items-center justify-center rounded-xl border border-neutral-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-primary-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
      >
        <span
          className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110"
          role="img"
          aria-label={title}
        >
          {emoji}
        </span>
        <h3 className="mb-2 text-xl font-semibold text-neutral-900 transition-colors group-hover:text-primary-700">
          {title}
        </h3>
        <p className="text-sm text-neutral-600">
          {subtitle}
        </p>
      </Link>
    </MotionWrapper>
  );
}
