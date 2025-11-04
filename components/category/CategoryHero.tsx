// components/category/CategoryHero.tsx
type CategoryHeroProps = {
  categoryName: string;
};

export default function CategoryHero({ categoryName }: CategoryHeroProps) {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Centered text, 40px size, and adjusted padding */}
        <div className="text-center py-10 md:py-16">
          {/* Updated font size for mobile */}
          <h1 className="text-[28px] md:text-[40px] font-bold uppercase tracking-[2px]">
            {categoryName}
          </h1>
        </div>
      </div>
    </section>
  );
}
