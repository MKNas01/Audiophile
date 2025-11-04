import Image from 'next/image';
import Header from '@/components/common/Header';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import About from '@/components/home/About';
import Footer from '@/components/common/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-dark font-sans"> {/* Root wrapper; pb-[200px] optional here */}
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Categories Section */}
      <section className="section-padding max-w-7xl mx-auto">
        <Categories />
      </section>

      {/* Featured Products Section */}
      <section className="section-padding max-w-7xl mx-auto mt-24">
        <FeaturedProducts />
      </section>

      {/* About Section */}
      <section className="section-padding max-w-7xl mx-auto mt-24 mb-[200px]"> {/* <-- 200px gap to footer */}
        <About />
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}