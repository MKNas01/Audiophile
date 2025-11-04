// components/product/YouMayAlsoLike.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/data';

export default function YouMayAlsoLike({ product }: { product: Product }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold uppercase text-black mb-10 md:mb-16 text-center">
        You May Also Like
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
        {product.others.map((item) => (
          <div key={item.slug} className="flex flex-col items-center">
            {/* Other Product Image */}
            <div className="w-full rounded-lg overflow-hidden mb-8">
              <Image
                src={item.image.mobile}
                alt={item.name}
                width={540}
                height={560}
                className="w-full h-auto md:hidden"
              />
              <Image
                src={item.image.tablet}
                alt={item.name}
                width={540}
                height={560}
                className="w-full h-auto hidden md:block lg:hidden"
              />
              <Image
                src={item.image.desktop}
                alt={item.name}
                width={540}
                height={560}
                className="w-full h-auto hidden lg:block"
              />
            </div>
            {/* Other Product Details */}
            <h3 className="text-2xl font-bold uppercase text-black mb-8">
              {item.name}
            </h3>
            <Link
              href={`/${item.category}/${item.slug}`}
              className="bg-orange-primary text-white uppercase text-sm font-bold tracking-[1px] py-4 px-8 inline-block hover:bg-orange-light transition-colors"
            >
              See Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
