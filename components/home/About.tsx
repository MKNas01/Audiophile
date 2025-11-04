import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      {/* IMAGE SECTION */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
        {/* Desktop Image (≥1024px) */}
        <div className="relative hidden lg:block w-[540px] h-[588px]">
          <Image
            src="/assets/home/desktop/man.png"
            alt="Person wearing headphones in studio"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Tablet Image (≥768px and <1024px) */}
        <div className="relative hidden md:block lg:hidden w-[689px] h-[300px]">
          <Image
            src="/assets/home/tablet/man.png"
            alt="Person wearing headphones in studio"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Mobile Image (<768px) */}
        <div className="relative block md:hidden w-[327px] h-[300px]">
          <Image
            src="/assets/home/mobile/man.png"
            alt="Person wearing headphones in studio"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="lg:w-1/2 text-center lg:text-left flex justify-center lg:justify-start order-2 lg:order-1 md:w-full md:text-center md:justify-center">
        <div className="max-w-[445px] md:max-w-[350px] flex flex-col justify-center">
          <h2 className="text-[40px] md:text-[28px] lg:text-4xl font-bold uppercase mb-6">
            Bringing you the <br />
            <span className="text-orange-primary">best</span> audio gear
          </h2>
          <p className="text-lg md:text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0 md:max-w-sm md:mx-auto">
            Located at the heart of New York, Audiophile is the premier store
            for high-end headphones, earphones, Bluetooth speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of our experts and try a
            wide range of our premium products.
          </p>
        </div>
      </div>
    </div>
  );
}
