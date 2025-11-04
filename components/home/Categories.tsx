import Image from 'next/image';
import Link from 'next/link';
// 1. Added the arrow icon as a component
const ArrowRightIcon = () => (
  <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.322 1l5 5-5 5"
      stroke="#D87D4A"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);
export default function Categories() {
  const categories = [
    { name: 'Headphones', img: '/assets/shared/desktop/image-category-thumbnail-headphones.png', href: '/headphones' },
    { name: 'Speakers', img: '/assets/shared/desktop/image-category-thumbnail-speakers.png', href: '/speakers' },
    { name: 'Earphones', img: '/assets/shared/desktop/image-category-thumbnail-earphones.png', href: '/earphones' },
  ];
  return (
    // 2. Added a max-width container and spacing for the whole section
    <section className="max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-0 mt-32 md:mt-48 mt-[120px]">
      {/* 3. Updated grid gaps to be more accurate - tighter on md */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[30px] gap-y-16 md:gap-y-24 lg:gap-y-0 md:gap-x-6"> {/* md: smaller horizontal gap */}
        {categories.map((cat, index) => (
         
          // 4. This is the main wrapper. It's relative and has padding-top
          // to make space for the image to poke out.
          <article key={index} className="relative pt-20 md:pt-16"> {/* md: less protrusion space */}
           
            {/* 5. This is the gray content box. */}
            <div className="relative bg-[#F1F1F1] rounded-lg text-center pt-28 pb-8 px-4 md:pt-24 md:pb-6 md:px-3"> {/* md: tighter vertical padding */}
             
              {/* 6. The image is positioned absolutely, anchored to the gray box.
                  - It's centered ('left-1/2 -translate-x-1/2').
                  - It's shifted up by half its height ('-top-20') to protrude halfway outside the top of the gray box.
                  - This creates the desired overlap: bottom half inside the gray box, top half outside at the top.
              */}
              <div className="absolute -top-16 md:-top-12 left-1/2 -translate-x-1/2 w-full max-w-[150px] md:max-w-[120px] h-[160px] md:h-[140px]"> {/* md: smaller image size */}
                <Image
                  src={cat.img}
                  alt={`${cat.name} Category`}
                  fill // Fills the container above
                  className="object-contain" // Keeps aspect ratio
                />
              </div>
              {/* 7. Card text content, inside the gray box */}
              <h2 className="text-[18px] md:text-[16px] font-bold uppercase tracking-[1.3px] mb-4"> {/* md: smaller heading */}
                {cat.name}
              </h2>
             
              {/* 8. Corrected 'Shop' link with the arrow icon */}
              <Link
                href={cat.href}
                className="group inline-flex items-center justify-center gap-2 text-black opacity-50 font-bold uppercase text-[13px] tracking-[1px] hover:text-orange-primary transition-colors"
                aria-label={`Shop ${cat.name}`}
              >
                Shop
                <ArrowRightIcon />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}