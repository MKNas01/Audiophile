// Example for app/headphones/[slug]/page.tsx (apply same to others)

import { notFound } from 'next/navigation';
import {
  getProductBySlug,
  getSlugsForCategory,
  Product,
} from '@/lib/data';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import About from '@/components/home/About';
import Categories from '@/components/home/Categories';
import GoBackButton from '@/components/product/GoBackButton';
import ProductHero from '@/components/product/ProductHero';
import Features from '@/components/product/Features';
import ProductGallery from '@/components/product/ProductGallery';
import YouMayAlsoLike from '@/components/product/YouMayAlsoLike';

type Props = {
  params: Promise<{ slug: string }>;  // ← Change: params is a Promise
};

export async function generateStaticParams() {
  const slugs = getSlugsForCategory('earphones');  // Or 'earphones' / 'speakers' as appropriate
  return slugs.map((slug) => ({
    slug,
  }));
}

// ← Make the component async
export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;  // ← Await to unwrap
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen text-gray-dark font-sans">
      {/* Black top section for Header */}
      <div className="bg-black">
        <Header variant="category" />
      </div>

      {/* Page content with white background */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 pt-8 md:pt-16">
          <GoBackButton />
        </div>

        <div className="space-y-[160px] py-[160px]">
          <section className="max-w-7xl mx-auto px-6 md:px-8">
            <ProductHero product={product} />
          </section>

          <section className="max-w-7xl mx-auto px-6 md:px-8">
            <Features product={product} />
          </section>

          <section className="max-w-7xl mx-auto px-6 md:px-8">
            <ProductGallery product={product} />
          </section>

          <section className="max-w-7xl mx-auto px-6 md:px-8">
            <YouMayAlsoLike product={product} />
          </section>

          <section className="max-w-7xl mx-auto px-6 md:px-8">
            <Categories />
          </section>

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