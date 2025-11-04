// components/category/ProductGrid.tsx
import { CategoryProduct } from '@/lib/data';
import ProductCard from './ProductCard';

type ProductGridProps = {
  products: CategoryProduct[];
  category: string; // 👈 new prop
};

export default function ProductGrid({ products, category }: ProductGridProps) {
  return (
    <div className="grid gap-24 md:gap-32">
      {products.map((product, index) => (
        <ProductCard
          key={product.slug}
          product={product}
          category={category} // 👈 pass it down
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
}
