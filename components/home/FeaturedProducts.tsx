import Image from "next/image";
import Link from "next/link";

export default function FeaturedProducts() {
  return (
    <div className="max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-0 flex flex-col gap-6 md:gap-8 lg:gap-12">
      {/* --- PROMO 1: ZX9 SPEAKER --- */}
      <section className="relative grid grid-cols-1 lg:grid-cols-2 items-center bg-orange-primary rounded-lg overflow-hidden py-14 px-6 lg:py-0 lg:pl-24 md:py-10 md:px-4">
        {/* Decorative Rings Background */}
        <div className="absolute top-0 lg:top-auto lg:bottom-0 left-1/2 lg:left-0 -translate-x-1/2 lg:-translate-x-1/4 -translate-y-1/2 lg:translate-y-1/4 z-0 hidden md:block">
          <Image
            src="/assets/home/desktop/pattern-circles.svg"
            alt=""
            width={944}
            height={944}
            className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[944px] lg:h-[944px]"
          />
        </div>

        {/* Speaker Image */}
        <div className="relative z-10 flex justify-center lg:justify-start lg:self-end h-[207px] md:h-[237px] lg:h-auto mb-8 lg:mb-0 md:mb-4">
          <Image
            src="/assets/home/mobile/image-speaker-zx9.png"
            alt="ZX9 Speaker"
            width={410}
            height={493}
            className="w-auto h-full block md:hidden"
          />
          <Image
            src="/assets/home/tablet/image-speaker-zx9.png"
            alt="ZX9 Speaker"
            width={410}
            height={493}
            className="w-auto h-full hidden md:block lg:hidden"
          />
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            alt="ZX9 Speaker"
            width={410}
            height={493}
            className="w-auto h-full hidden lg:block"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center lg:text-left text-white lg:py-24 lg:pr-24 md:py-8 md:pr-4">
          <h2 className="text-[36px] md:text-[56px] lg:text-[56px] font-bold uppercase leading-tight tracking-[2px] mb-6 max-w-xs mx-auto lg:mx-0 md:max-w-sm">
            ZX9
            <br />
            Speaker
          </h2>
          <p className="font-medium text-[15px] leading-[25px] opacity-75 mb-10 max-w-sm mx-auto lg:mx-0">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            href="/speakers/zx9-speaker"
            className="btn-secondary-dark bg-black px-[18px] py-[8px] hover:bg-gray-medium md:px-4 md:py-3 md:text-[12px]"
            aria-label="View ZX9 Speaker"
          >
            See Product
          </Link>
        </div>
      </section>

      {/* --- PROMO 2: ZX7 SPEAKER --- */}
      <section className="relative w-full h-[320px] md:h-[280px] rounded-lg overflow-hidden">
        <Image
          src="/assets/home/mobile/image-speaker-zx7.jpg"
          alt="ZX7 Speaker"
          fill
          className="object-cover object-center z-0 block md:hidden"
        />
        <Image
          src="/assets/home/tablet/image-speaker-zx7.jpg"
          alt="ZX7 Speaker"
          fill
          className="object-cover object-center z-0 hidden md:block lg:hidden"
        />
        <Image
          src="/assets/home/desktop/image-speaker-zx7.jpg"
          alt="ZX7 Speaker"
          fill
          className="object-cover object-center z-0 hidden lg:block"
        />
        <div className="absolute z-10 top-1/2 -translate-y-1/2 left-6 md:left-16 lg:left-24">
          <h2 className="text-[28px] md:text-[32px] font-bold uppercase tracking-[2px] md:tracking-[1.5px] mb-8">
            ZX7 Speaker
          </h2>
          <Link
            href="/speakers/zx7-speaker"
            className="btn-secondary hover:bg-black hover:text-gray-light md:px-4 md:py-3 md:text-[12px]"
            aria-label="View ZX7 Speaker"
          >
            See Product
          </Link>
        </div>
      </section>

      {/* --- PROMO 3: YX1 EARPHONES --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Image */}
        <div className="relative w-full h-[200px] md:h-[320px] rounded-lg overflow-hidden">
          <Image
            src="/assets/home/mobile/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            fill
            className="object-cover object-center block md:hidden"
          />
          <Image
            src="/assets/home/tablet/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            fill
            className="object-cover object-center hidden md:block lg:hidden"
          />
          <Image
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            fill
            className="object-cover object-center hidden lg:block"
          />
        </div>

        {/* Content */}
        <div className="bg-[#F1F1F1] rounded-lg flex flex-col justify-center h-[200px] md:h-[320px] px-6 md:px-16 lg:px-24">
          <h2 className="text-[28px] md:text-[32px] font-bold uppercase tracking-[2px] md:tracking-[1.5px] mb-8">
            YX1 Earphones
          </h2>
          <Link
            href="/earphones/yx1-earphones"
            className="btn-secondary hover:bg-black hover:text-gray-light md:px-4 md:py-3 md:text-[12px]"
            aria-label="View YX1 Earphones"
          >
            See Product
          </Link>
        </div>
      </section>
    </div>
  );
}
