'use client';

import Link from 'next/link';
import { Baby, PawPrint, UserRound, BriefcaseBusiness, LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  href: string;
  icon: 'kids' | 'pets' | 'self' | 'work';
  title: string;
  subtitle: string;
  locale: string;
}

const iconMap: Record<string, LucideIcon> = {
  kids: Baby,
  pets: PawPrint,
  self: UserRound,
  work: BriefcaseBusiness,
};

export default function CategoryCard({ href, icon, title, subtitle }: CategoryCardProps) {
  const Icon = iconMap[icon];

  return (
    <Link
      href={href}
      className="focus-ring group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:translate-y-[-2px] md:p-8"
      aria-label={`${title}: ${subtitle}`}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200">
        <Icon className="h-6 w-6 text-gray-700" aria-hidden="true" />
      </div>

      <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
        {title}
      </h2>

      <p className="text-sm text-gray-600 md:text-base">
        {subtitle}
      </p>
    </Link>
  );
}
