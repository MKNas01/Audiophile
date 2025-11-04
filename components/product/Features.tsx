// components/product/Features.tsx
import { Product } from '@/lib/data';

export default function Features({ product }: { product: Product }) {
  return (
    <div className="flex flex-col lg:flex-row gap-24 lg:gap-32">
      {/* Features */}
      <div className="lg:w-2/3">
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-black mb-8">
          Features
        </h2>
        <div className="text-black/50 space-y-6">
          {/* Split features string by newline and render as paragraphs */}
          {product.features.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* In the Box */}
      <div className="lg:w-1/3">
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-black mb-8">
          In the Box
        </h2>
        <ul className="space-y-2">
          {product.inTheBox.map((item) => (
            <li key={item.item} className="flex">
              <span className="text-orange-primary font-bold w-8">
                {item.quantity}x
              </span>
              <span className="text-black/50">{item.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
