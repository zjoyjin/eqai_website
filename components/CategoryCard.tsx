'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

export default function CategoryCard({
  href,
  title,
  description,
  icon,
  ariaLabel,
}: {
  href: string;
  title: string;
  description: string;
  icon: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel ?? title}
      className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 md:p-8"
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
        {icon}
      </div>
      <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-1 text-neutral-600">{description}</p>
    </Link>
  );
}
