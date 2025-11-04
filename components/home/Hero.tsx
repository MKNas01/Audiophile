import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    // 1. The main section is relative to position the Image and text content inside.
    //    Responsive heights: mobile shorter, tablet medium, desktop full.
    //    bg-[#141414] acts as a fallback color.
    <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[729px] bg-[#141414] overflow-hidden"> {/* Mobile: ~400px; md: 500px; lg: 729px */}
      
      {/* 2. The Next.js Image component acts as the background - Responsive swaps */}
      {/* Mobile Hero Image - Full container fill, centered crop */}
      <Image
        src="/assets/home/mobile/image-header.jpg" // Mobile-specific path
        alt="XX99 Mark II Headphones"
        fill
        className="object-cover object-center z-0 block md:hidden" // Full cover/center; visible <md (mobile)
        priority // Load eagerly for LCP
      />

      {/* Tablet Hero Image */}
      <Image
        src="/assets/home/tablet/image-header.jpg" // Tablet-specific path
        alt="XX99 Mark II Headphones"
        fill
        className="object-cover object-center z-0 hidden md:block lg:hidden" // Visible md to lg- (tablet)
        priority // Load eagerly for LCP
      />

      {/* Desktop Hero Image */}
      <Image
        src="/assets/home/desktop/image-hero.jpg" // Desktop-specific path
        alt="XX99 Mark II Headphones"
        fill
        className="object-cover object-center z-0 hidden lg:block" // Full cover/center; visible lg+ only
        priority // Load eagerly for LCP
      />

      {/* 3. This container holds the text content.
          - 'relative z-10' places it on top of the z-0 Image.
          - 'max-w-7xl mx-auto' constrains the content width.
          - Responsive flex/justify for centering on mobile/tablet, left on desktop. */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 md:px-8 lg:px-0 min-h-[400px] md:min-h-[500px] lg:min-h-[729px] flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
        
        {/* 4. This is your text block, responsive widths/scaling. */}
        <div className="max-w-[280px] md:max-w-sm lg:max-w-md px-2"> {/* Mobile: tighter max-w; md: sm; lg: md */}
          
          {/* Badge: Scaled for mobile */}
          <span className="block uppercase text-[12px] md:text-[12px] lg:text-[14px] font-bold tracking-[8px] md:tracking-[8px] lg:tracking-[10px] leading-auto mb-4 md:mb-6 text-white opacity-50">
            New Product
          </span>

          {/* Title: Scaled for mobile - smaller font/tighter leading */}
          <h1 className="text-[32px] md:text-[40px] lg:text-[56px] font-bold text-gray-light uppercase tracking-[1px] md:tracking-[1.5px] lg:tracking-[2px] leading-[38px] md:leading-[45px] lg:leading-[58px] mb-4 md:mb-6">
            XX99 Mark II
            <br />
            Headphones
          </h1>

          {/* Description: Scaled for mobile - smaller font/tighter leading */}
          <p className="text-[12px] md:text-[13px] lg:text-[15px] text-white opacity-75 font-medium leading-[20px] md:leading-[22px] lg:leading-[25px] mb-6 md:mb-10 max-w-[250px] md:max-w-sm lg:max-w-sm mx-auto lg:mx-0">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>

          {/* CTA Button: Scaled for mobile - smaller padding/font */}
          <Link 
            href="/headphones/xx99-mark-two-headphones"
            className="btn-primary bg-orange-primary hover:bg-[#FBAF85] text-gray-light px-4 md:px-4 lg:px-6 py-2 md:py-2 lg:py-3 text-[11px] md:text-[12px] lg:text-[13px]" // Mobile: smaller px/py/font
            aria-label="View XX99 Mark II Headphones"
          >
            See Product
          </Link>
        </div>

      </div>
    </section>
  );
}