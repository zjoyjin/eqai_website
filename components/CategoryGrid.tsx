'use client';

import Link from 'next/link';

interface Category {
  key: string;
  href: string;
  emoji: string;
  title: string;
  subtitle: string;
}

interface CategoryGridProps {
  categories: Category[];
  locale: string;
}

export default function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
      {categories.map((category) => (
        <Link
          key={category.key}
          href={category.href}
          className="group flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-12 text-center shadow-sm transition-all duration-200 hover:border-neutral-300 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.currentTarget.click();
            }
          }}
        >
          <span
            className="mb-4 text-6xl transition-transform duration-200 group-hover:scale-110"
            role="img"
            aria-label={category.title}
          >
            {category.emoji}
          </span>
          <h2 className="mb-2 text-2xl font-medium text-neutral-900">
            {category.title}
          </h2>
          <p className="text-sm text-neutral-600">
            {category.subtitle}
          </p>
        </Link>
      ))}
    </div>
  );
}
