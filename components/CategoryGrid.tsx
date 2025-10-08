import { ReactNode } from 'react';

export default function CategoryGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">{children}</div>;
}
