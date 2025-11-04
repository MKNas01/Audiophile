// components/category/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { CategoryProduct } from '@/lib/data';

type ProductCardProps = {
  product: CategoryProduct;
  category: string; // 👈 add this
  reverse?: boolean;
};

export default function ProductCard({ product, category, reverse = false }: ProductCardProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-32 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Product Image */}
      <div className="w-full lg:w-1/2 rounded-lg overflow-hidden">
        <Image
          src={product.image.mobile}
          alt={product.name}
          width={540}
          height={560}
          className="w-full h-auto md:hidden"
        />
        <Image
          src={product.image.tablet}
          alt={product.name}
          width={540}
          height={560}
          className="w-full h-auto hidden md:block lg:hidden"
        />
        <Image
          src={product.image.desktop}
          alt={product.name}
          width={540}
          height={560}
          className="w-full h-auto hidden lg:block"
        />
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        {product.isNew && (
          <span className="text-orange-primary uppercase tracking-[10px] text-sm mb-4 block">
            New Product
          </span>
        )}
        <h2 className="text-[28px] md:text-4xl font-bold uppercase text-black">
          {product.name}
        </h2>
        <p className="text-black/50 my-6 md:my-8">{product.description}</p>

        {/* ✅ Dynamic link */}
        <Link
          href={`/${category}/${product.slug}`}
          className="bg-orange-primary text-white uppercase text-sm font-bold tracking-[1px] py-4 px-8 inline-block hover:bg-orange-light transition-colors"
        >
          See Product
        </Link>
      </div>
    </div>
  );
}
