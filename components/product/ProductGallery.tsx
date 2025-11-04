// components/product/ProductGallery.tsx
import Image from 'next/image';
import { Product } from '@/lib/data';

type GalleryImageProps = {
  images: { mobile: string; tablet: string; desktop: string };
  alt: string;
  className?: string;
};

// Fixed GalleryImage with proper aspect ratios
function GalleryImage({ images, alt, className = '' }: GalleryImageProps) {
  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      {/* Mobile Image */}
      <div className="relative aspect-[327/174] md:hidden">
        <Image
          src={images.mobile}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
      </div>
      
      {/* Tablet Image */}
      <div className="relative aspect-[277/174] hidden md:block lg:hidden">
        <Image
          src={images.tablet}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1023px) 50vw, 33vw"
        />
      </div>
      
      {/* Desktop Image */}
      <div className="relative aspect-[445/280] hidden lg:block">
        <Image
          src={images.desktop}
          alt={alt}
          fill
          className="object-cover"
          sizes="33vw"
        />
      </div>
    </div>
  );
}

export default function ProductGallery({ product }: { product: Product }) {
  return (
    <>
      {/* Mobile: Stack all three vertically */}
      <div className="grid grid-cols-1 gap-6 md:hidden">
        <GalleryImage
          images={product.gallery.first}
          alt={`${product.name} gallery image 1`}
        />
        <GalleryImage
          images={product.gallery.second}
          alt={`${product.name} gallery image 2`}
        />
        <GalleryImage
          images={product.gallery.third}
          alt={`${product.name} gallery image 3`}
        />
      </div>

      {/* Tablet/Desktop: 2-column layout with perfect alignment */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
        {/* Left column: Two small images stacked */}
        <div className="grid grid-rows-2 gap-6 lg:gap-8">
          <GalleryImage
            images={product.gallery.first}
            alt={`${product.name} gallery image 1`}
          />
          <GalleryImage
            images={product.gallery.second}
            alt={`${product.name} gallery image 2`}
          />
        </div>

        {/* Right column: Large image spanning both rows */}
        <div className="relative aspect-[635/592] row-span-2 rounded-lg overflow-hidden">
          <Image
            src={product.gallery.third.desktop}
            alt={`${product.name} gallery image 3`}
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 50vw, 33vw"
          />
        </div>
      </div>
    </>
  );
}