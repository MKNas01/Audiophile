// app/speakers/page.tsx
import Header from '@/components/common/Header';
import CategoryHero from '@/components/category/CategoryHero';
import ProductGrid from '@/components/category/ProductGrid';
import Categories from '@/components/home/Categories';
import About from '@/components/home/About';
import Footer from '@/components/common/Footer';
import { speakersData } from '@/lib/data'; 
export default function SpeakersPage() {
  return (
    <main className="min-h-screen text-gray-dark font-sans">
      {/* Black top section for Header and Category Title */}
      <div className="bg-black">
        <Header currentPage="speakers" variant="category" />
        <CategoryHero categoryName="Speakers" />
      </div>

      {/* Page content with white background */}
      <div className="bg-white pt-[160px]">
        <div className="space-y-[160px] mb-[160px]">
          {/* Product Grid */}
          {/* We pass the imported data to the component */}
          <section className="max-w-7xl mx-auto px-6 md:px-8">
            <ProductGrid products={speakersData} category="speakers" />
          </section>

          {/* Featured Products (Cross-Category Teasers) */}
          {/* Renamed this to 'Categories' to match its content */}
          <section className="max-w-7xl mx-auto px-6 md:px-8">
            <Categories />
          </section>

          {/* About */}
          <section className="max-w-7xl mx-auto px-6 md:px-8">
            <About />
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
