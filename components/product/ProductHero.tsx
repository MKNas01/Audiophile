// components/product/ProductHero.tsx
'use client'; // Add 'use client' for state
import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/data';
import { useCart } from '@/components/cart/CartContext'; // <-- 1. Import useCart

// Component for the quantity selector and Add to Cart button
// Now takes the full product object
function AddToCart({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useCart(); // <-- 2. Get the addItemToCart function

  const increment = () => setQuantity((q) => q + 1);
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // Format price
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price);

  // 3. Create the handler function
  const handleAddToCart = () => {
    addItemToCart(product, quantity); // This adds the item to the global state
  };

  return (
    <>
      <span className="text-black text-lg font-bold tracking-[1.3px]">
        {formattedPrice}
      </span>
      <div className="flex gap-4 mt-8">
        {/* Quantity Selector */}
        <div className="flex bg-gray-light">
          <button
            onClick={decrement}
            className="w-10 h-12 text-black/25 hover:text-orange-primary transition-colors"
          >
            -
          </button>
          <span className="w-10 h-12 flex items-center justify-center text-black font-bold text-sm">
            {quantity}
          </span>
          <button
            onClick={increment}
            className="w-10 h-12 text-black/25 hover:text-orange-primary transition-colors"
          >
            +
          </button>
        </div>
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart} // <-- 4. Call the handler on click
          className="bg-orange-primary text-white uppercase text-sm font-bold tracking-[1px] py-4 px-8 inline-block hover:bg-orange-light transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}

// Main Product Hero Component
export default function ProductHero({ product }: { product: Product }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-32">
      {/* Product Image */}
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
        {/* Mobile Image */}
        <Image
          src={product.image.mobile}
          alt={product.name}
          width={540}
          height={560}
          className="w-full h-auto md:hidden"
        />
        {/* Tablet Image */}
        <Image
          src={product.image.tablet}
          alt={product.name}
          width={540}
          height={560}
          className="w-full h-auto hidden md:block lg:hidden"
        />
        {/* Desktop Image */}
        <Image
          src={product.image.desktop}
          alt={product.name}
          width={540}
          height={560}
          className="w-full h-auto hidden lg:block"
        />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2">
        {product.isNew && (
          <span className="text-orange-primary uppercase tracking-[10px] text-sm mb-4 block">
            New Product
          </span>
        )}
        <h1 className="text-3xl md:text-4xl font-bold uppercase text-black">
          {product.name}
        </h1>
        <p className="text-black/50 my-6 md:my-8">{product.description}</p>
        <AddToCart product={product} /> {/* <-- 5. Pass the full product object */}
      </div>
    </div>
  );
}

