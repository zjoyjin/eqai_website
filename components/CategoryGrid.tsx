import CategoryCard from './CategoryCard';

interface Category {
  key: string;
  href: string;
  title: string;
  subtitle: string;
}

interface CategoryGridProps {
  categories: Category[];
  locale: string;
}

export default function CategoryGrid({ categories, locale }: CategoryGridProps) {
  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
      {categories.map((category) => (
        <CategoryCard
          key={category.key}
          href={category.href}
          icon={category.key as 'kids' | 'pets' | 'self' | 'work'}
          title={category.title}
          subtitle={category.subtitle}
          locale={locale}
        />
      ))}
    </div>
  );
}
