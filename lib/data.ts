// lib/data.ts

// --- CATEGORY PAGE DATA ---
// This is the data for the category pages (the grid)
// We are adding a 'category' prop to it
export interface CategoryProduct {
  slug: string;
  name: string;
  description: string;
  isNew: boolean;
  category: 'headphones' | 'speakers' | 'earphones';
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

export const headphonesData: CategoryProduct[] = [
  {
    slug: 'xx99-mark-two-headphones',
    name: 'XX99 Mark II Headphones',
    category: 'headphones',
    isNew: true,
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    image: {
      mobile:
        '/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg',
      tablet:
        '/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg',
      desktop:
        '/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
    },
  },
  {
    slug: 'xx99-mark-one-headphones',
    name: 'XX99 Mark I Headphones',
    category: 'headphones',
    isNew: false,
    description:
      'As the gold standard for headphones, the original XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    image: {
      mobile:
        '/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg',
      tablet:
        '/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg',
      desktop:
        '/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg',
    },
  },
  {
    slug: 'xx59-headphones',
    name: 'XX59 Headphones',
    category: 'headphones',
    isNew: false,
    description:
      'Enjoy your audio naturally linking how audio is meant to be heard. With the XX59 headphones, you can enjoy this superb sound experience away from home or in the comfort of your own personal space.',
    image: {
      mobile: '/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg',
      tablet: '/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg',
      desktop: '/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg',
    },
  },
];

export const speakersData: CategoryProduct[] = [
  {
    slug: 'zx9-speaker',
    name: 'ZX9 Speaker',
    category: 'speakers',
    isNew: true,
    description:
      'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    image: {
      mobile: '/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg',
      tablet: '/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg',
      desktop: '/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg',
    },
  },
  {
    slug: 'zx7-speaker',
    name: 'ZX7 Speaker',
    category: 'speakers',
    isNew: false,
    description:
      'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the pinnacle of acoustic reproduction.',
    image: {
      mobile: '/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg',
      tablet: '/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg',
      desktop: '/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg',
    },
  },
];

export const earphonesData: CategoryProduct[] = [
  {
    slug: 'yx1-wireless-earphones',
    name: 'YX1 Wireless Earphones',
    category: 'earphones',
    isNew: true,
    description:
      'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    image: {
      mobile: '/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg',
      tablet: '/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg',
      desktop: '/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg',
    },
  },
];

// --- PRODUCT DETAIL PAGE DATA ---
// This is all the data needed for the individual product pages
// I have corrected all your file paths

interface ImagePaths {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface InTheBoxItem {
  quantity: number;
  item: string;
}

interface YouMayAlsoLike {
  slug: string;
  name: string;
  category: 'headphones' | 'speakers' | 'earphones';
  image: ImagePaths;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  shortName: string; // <-- ADDED for cart display
  image: ImagePaths;
  cartImage: string; // <-- ADDED for cart image
  isNew: boolean;
  price: number;
  description: string;
  features: string; // Using string to handle line breaks
  inTheBox: InTheBoxItem[];
  gallery: {
    first: ImagePaths;
    second: ImagePaths;
    third: ImagePaths;
  };
  others: YouMayAlsoLike[];
}

const allProducts: Product[] = [
  // -- HEADPHONES --
  {
    id: 1,
    slug: 'xx99-mark-two-headphones',
    name: 'XX99 Mark II Headphones',
    shortName: 'XX99 MK II',
    cartImage: '/assets/cart/image-xx99-mark-two-headphones.jpg',
    image: {
      mobile: '/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg',
      tablet: '/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg',
      desktop:
        '/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg',
    },
    isNew: true,
    price: 2999,
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    features:
      'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for extended listening sessions. It also features intuitively designed controls allowing you to easily manage your music and calls.\n\nThe advanced active noise cancellation with built-in equalizers allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but also quickly tune into your surroundings with explicit clarity when you need it.',
    inTheBox: [
      { quantity: 1, item: 'Headphone Unit' },
      { quantity: 2, item: 'Replacement Earcups' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '3.5mm 5m Audio Cable' },
      { quantity: 1, item: 'Travel Bag' },
    ],
    gallery: {
      first: {
        mobile:
          '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg',
        tablet:
          '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg',
        desktop:
          '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg',
      },
      second: {
        mobile:
          '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg',
        tablet:
          '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg',
        desktop:
          '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg',
      },
      third: {
        mobile:
          '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg',
        tablet:
          '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg',
        desktop:
          '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg',
      },
    },
    others: [
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I',
        category: 'headphones',
        image: {
          mobile: '/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg',
          tablet: '/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg',
          desktop:
            '/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg',
        },
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59',
        category: 'headphones',
        image: {
          mobile: '/assets/product-xx59-headphones/mobile/image-product.jpg',
          tablet: '/assets/product-xx59-headphones/tablet/image-product.jpg',
          desktop: '/assets/product-xx59-headphones/desktop/image-product.jpg',
        },
      },
      {
        slug: 'zx9-speaker',
        name: 'ZX9 Speaker',
        category: 'speakers',
        image: {
          mobile: '/assets/product-zx9-speaker/mobile/image-product.jpg',
          tablet: '/assets/product-zx9-speaker/tablet/image-product.jpg',
          desktop: '/assets/product-zx9-speaker/desktop/image-product.jpg',
        },
      },
    ],
  },
  {
    id: 2,
    slug: 'xx99-mark-one-headphones',
    name: 'XX99 Mark I Headphones',
    shortName: 'XX99 MK I',
    cartImage: '/assets/cart/image-xx99-mark-one-headphones.jpg',
    image: {
      mobile: '/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg',
      tablet: '/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg',
      desktop:
        '/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg',
    },
    isNew: false,
    price: 1750,
    description:
      'As the gold standard for headphones, the original XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    features:
      'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio excellence. These headphones redefine the critical listening experience. This is an open-back design dynamic headphone with spatial sound reproduction capabilities, lending itself to discerning audiophiles and users moving from traditional systems.\n\nFrom the handcrafted wooden earcups to the robust metal headband with inner damping, each element of the XX99 Mark I is designed to provide you with the ultimate audio experience. Reduced resonance, balanced stereo imaging, and clear tonal separation are just a few of the qualities you will discover.',
    inTheBox: [
      { quantity: 1, item: 'Headphone Unit' },
      { quantity: 2, item: 'Replacement Earcups' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '3.5mm 5m Audio Cable' },
    ],
    gallery: {
      first: {
        mobile:
          '/assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg',
        tablet:
          '/assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg',
        desktop:
          '/assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg',
      },
      second: {
        mobile:
          '/assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg',
        tablet:
          '/assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg',
        desktop:
          '/assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg',
      },
      third: {
        mobile:
          '/assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg',
        tablet:
          '/assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg',
        desktop:
          '/assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg',
      },
    },
    others: [
      {
        slug: 'xx99-mark-two-headphones',
        name: 'XX99 Mark II',
        category: 'headphones',
        image: {
          mobile: '/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg',
          tablet: '/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg',
          desktop:
            '/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg',
        },
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59',
        category: 'headphones',
        image: {
          mobile: '/assets/product-xx59-headphones/mobile/image-product.jpg',
          tablet: '/assets/product-xx59-headphones/tablet/image-product.jpg',
          desktop: '/assets/product-xx59-headphones/desktop/image-product.jpg',
        },
      },
      {
        slug: 'zx9-speaker',
        name: 'ZX9 Speaker',
        category: 'speakers',
        image: {
          mobile: '/assets/product-zx9-speaker/mobile/image-product.jpg',
          tablet: '/assets/product-zx9-speaker/tablet/image-product.jpg',
          desktop: '/assets/product-zx9-speaker/desktop/image-product.jpg',
        },
      },
    ],
  },
  {
    id: 3,
    slug: 'xx59-headphones',
    name: 'XX59 Headphones',
    shortName: 'XX59',
    cartImage: '/assets/cart/image-xx59-headphones.jpg',
    image: {
      mobile: '/assets/product-xx59-headphones/mobile/image-product.jpg',
      tablet: '/assets/product-xx59-headphones/tablet/image-product.jpg',
      desktop: '/assets/product-xx59-headphones/desktop/image-product.jpg',
    },
    isNew: false,
    price: 899,
    description:
      'Enjoy your audio naturally, taking you straight to the heart of the music. From the crackle of a vinyl record to the smooth tones of a jazz performance, the XX59 headphones connect you to the music, no matter where you are.',
    features:
      'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured via the latest wireless technology with background noise minimized thanks to custom-designed noise-cancelling micro-chip technology.\n\nType-C charging ensures convenient compatibility with a broad range of devices. Quick charging capabilities provide up to 10 hours of playback from just 15 minutes of charge. With a full charge, you can enjoy up to 35 hours of high-quality audio playback.',
    inTheBox: [
      { quantity: 1, item: 'Headphone Unit' },
      { quantity: 2, item: 'Replacement Earcups' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '3.5mm 5m Audio Cable' },
    ],
    gallery: {
      first: {
        mobile: '/assets/product-xx59-headphones/mobile/image-gallery-1.jpg',
        tablet: '/assets/product-xx59-headphones/tablet/image-gallery-1.jpg',
        desktop: '/assets/product-xx59-headphones/desktop/image-gallery-1.jpg',
      },
      second: {
        mobile: '/assets/product-xx59-headphones/mobile/image-gallery-2.jpg',
        tablet: '/assets/product-xx59-headphones/tablet/image-gallery-2.jpg',
        desktop: '/assets/product-xx59-headphones/desktop/image-gallery-2.jpg',
      },
      third: {
        mobile: '/assets/product-xx59-headphones/mobile/image-gallery-3.jpg',
        tablet: '/assets/product-xx59-headphones/tablet/image-gallery-3.jpg',
        desktop: '/assets/product-xx59-headphones/desktop/image-gallery-3.jpg',
      },
    },
    others: [
      {
        slug: 'xx99-mark-two-headphones',
        name: 'XX99 Mark II',
        category: 'headphones',
        image: {
          mobile: '/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg',
          tablet: '/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg',
          desktop:
            '/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg',
        },
      },
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I',
        category: 'headphones',
        image: {
          mobile: '/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg',
          tablet: '/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg',
          desktop:
            '/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg',
        },
      },
      {
        slug: 'zx9-speaker',
        name: 'ZX9 Speaker',
        category: 'speakers',
        image: {
          mobile: '/assets/product-zx9-speaker/mobile/image-product.jpg',
          tablet: '/assets/product-zx9-speaker/tablet/image-product.jpg',
          desktop: '/assets/product-zx9-speaker/desktop/image-product.jpg',
        },
      },
    ],
  },
  // -- SPEAKERS --
  {
    id: 4,
    slug: 'zx9-speaker',
    name: 'ZX9 Speaker',
    shortName: 'ZX9',
    cartImage: '/assets/cart/image-zx9-speaker.jpg',
    image: {
      mobile: '/assets/product-zx9-speaker/mobile/image-product.jpg',
      tablet: '/assets/product-zx9-speaker/tablet/image-product.jpg',
      desktop: '/assets/product-zx9-speaker/desktop/image-product.jpg',
    },
    isNew: true,
    price: 4500,
    description:
      'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity creating new possibilities for more pleasing and practical audio setups.',
    features:
      'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital, and analog inputs for a wide variety of connection options. Enjoy pristine wireless sound reproduction with Bluetooth 5.0 and aptX support. The ZX9 Speaker pair also features a subwoofer output with automatic detection and digital crossover.\n\nDiscover more; more natural, more revealing, and more detailed sound. With its built-in signature sound profile, the ZX9 offers a wide dynamic range and neutral sound representation. Whether you are listening to classical music or EDM, the ZX9 delivers a powerful and precise sound experience that will impress even the most discerning audiophile.',
    inTheBox: [
      { quantity: 2, item: 'Speaker Unit' },
      { quantity: 2, item: 'Speaker Cloth Panel' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '3.5mm 10m Audio Cable' },
      { quantity: 1, item: '10m Optical Cable' },
    ],
    gallery: {
      first: {
        mobile: '/assets/product-zx9-speaker/mobile/image-gallery-1.jpg',
        tablet: '/assets/product-zx9-speaker/tablet/image-gallery-1.jpg',
        desktop: '/assets/product-zx9-speaker/desktop/image-gallery-1.jpg',
      },
      second: {
        mobile: '/assets/product-zx9-speaker/mobile/image-gallery-2.jpg',
        tablet: '/assets/product-zx9-speaker/tablet/image-gallery-2.jpg',
        desktop: '/assets/product-zx9-speaker/desktop/image-gallery-2.jpg',
      },
      third: {
        mobile: '/assets/product-zx9-speaker/mobile/image-gallery-3.jpg',
        tablet: '/assets/product-zx9-speaker/tablet/image-gallery-3.jpg',
        desktop: '/assets/product-zx9-speaker/desktop/image-gallery-3.jpg',
      },
    },
    others: [
      {
        slug: 'zx7-speaker',
        name: 'ZX7 Speaker',
        category: 'speakers',
        image: {
          mobile: '/assets/product-zx7-speaker/mobile/image-product.jpg',
          tablet: '/assets/product-zx7-speaker/tablet/image-product.jpg',
          desktop: '/assets/product-zx7-speaker/desktop/image-product.jpg',
        },
      },
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I',
        category: 'headphones',
        image: {
          mobile: '/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg',
          tablet: '/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg',
          desktop:
            '/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg',
        },
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59',
        category: 'headphones',
        image: {
          mobile: '/assets/product-xx59-headphones/mobile/image-product.jpg',
          tablet: '/assets/product-xx59-headphones/tablet/image-product.jpg',
          desktop: '/assets/product-xx59-headphones/desktop/image-product.jpg',
        },
      },
    ],
  },
  {
    id: 5,
    slug: 'zx7-speaker',
    name: 'ZX7 Speaker',
    shortName: 'ZX7',
    cartImage: '/assets/cart/image-zx7-speaker.jpg',
    image: {
      mobile: '/assets/product-zx7-speaker/mobile/image-product.jpg',
      tablet: '/assets/product-zx7-speaker/tablet/image-product.jpg',
      desktop: '/assets/product-zx7-speaker/desktop/image-product.jpg',
    },
    isNew: false,
    price: 3500,
    description:
      'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the pinnacle of acoustic reproduction.',
    features:
      'The ZX7 speaker is the perfect blend of style and performance. It features a flat diaphragm tweeter that provides a fast response rate and excellent high-frequency extension. This allows the ZX7 to reproduce subtle details with remarkable clarity, making your music sound more alive than ever.\n\nThe ZX7 speaker is also designed with aesthetics in mind. Its sleek, minimalist design makes it a stylish addition to any room. The ZX7 speaker is available in a variety of finishes to match your decor. With its superior sound quality and elegant design, the ZX7 speaker is the perfect choice for anyone who values both form and function.',
    inTheBox: [
      { quantity: 2, item: 'Speaker Unit' },
      { quantity: 2, item: 'Speaker Cloth Panel' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: '3.5mm 10m Audio Cable' },
      { quantity: 1, item: '7.5m Optical Cable' },
    ],
    gallery: {
      first: {
        mobile: '/assets/product-zx7-speaker/mobile/image-gallery-1.jpg',
        tablet: '/assets/product-zx7-speaker/tablet/image-gallery-1.jpg',
        desktop: '/assets/product-zx7-speaker/desktop/image-gallery-1.jpg',
      },
      second: {
        mobile: '/assets/product-zx7-speaker/mobile/image-gallery-2.jpg',
        tablet: '/assets/product-zx7-speaker/tablet/image-gallery-2.jpg',
        desktop: '/assets/product-zx7-speaker/desktop/image-gallery-2.jpg',
      },
      third: {
        mobile: '/assets/product-zx7-speaker/mobile/image-gallery-3.jpg',
        tablet: '/assets/product-zx7-speaker/tablet/image-gallery-3.jpg',
        desktop: '/assets/product-zx7-speaker/desktop/image-gallery-3.jpg',
      },
    },
    others: [
      {
        slug: 'zx9-speaker',
        name: 'ZX9 Speaker',
        category: 'speakers',
        image: {
          mobile: '/assets/product-zx9-speaker/mobile/image-product.jpg',
          tablet: '/assets/product-zx9-speaker/tablet/image-product.jpg',
          desktop: '/assets/product-zx9-speaker/desktop/image-product.jpg',
        },
      },
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I',
        category: 'headphones',
        image: {
          mobile: '/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg',
          tablet: '/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg',
          desktop:
            '/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg',
        },
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59',
        category: 'headphones',
        image: {
          mobile: '/assets/product-xx59-headphones/mobile/image-product.jpg',
          tablet: '/assets/product-xx59-headphones/tablet/image-product.jpg',
          desktop: '/assets/product-xx59-headphones/desktop/image-product.jpg',
        },
      },
    ],
  },
  // -- EARPHONES --
  {
    id: 6,
    slug: 'yx1-wireless-earphones',
    name: 'YX1 Wireless Earphones',
    shortName: 'YX1',
    cartImage: '/assets/cart/image-yx1-earphones.jpg',
    image: {
      mobile: '/assets/product-yx1-earphones/mobile/image-product.jpg',
      tablet: '/assets/product-yx1-earphones/tablet/image-product.jpg',
      desktop: '/assets/product-yx1-earphones/desktop/image-product.jpg',
    },
    isNew: true,
    price: 599,
    description:
      'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    features:
      'Experience unparalleled stereo sound thanks to innovative acoustic technology. With 1Both left and right earphones featuring independent sound channels, you can immerse yourself in your music, games, or podcasts.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice commands. These truly wireless earphones are designed to keep up with your busy lifestyle. They are IPX5-rated for water and sweat resistance, meaning you can wear them during workouts or in the rain without worry.',
    inTheBox: [
      { quantity: 2, item: 'Earphone Unit' },
      { quantity: 6, item: 'Multi-size Earplugs' },
      { quantity: 1, item: 'User Manual' },
      { quantity: 1, item: 'USB-C Charging Cable' },
      { quantity: 1, item: 'Travel Case' },
    ],
    gallery: {
      first: {
        mobile: '/assets/product-yx1-earphones/mobile/image-gallery-1.jpg',
        tablet: '/assets/product-yx1-earphones/tablet/image-gallery-1.jpg',
        desktop: '/assets/product-yx1-earphones/desktop/image-gallery-1.jpg',
      },
      second: {
        mobile: '/assets/product-yx1-earphones/mobile/image-gallery-2.jpg',
        tablet: '/assets/product-yx1-earphones/tablet/image-gallery-2.jpg',
        desktop: '/assets/product-yx1-earphones/desktop/image-gallery-2.jpg',
      },
      third: {
        mobile: '/assets/product-yx1-earphones/mobile/image-gallery-3.jpg',
        tablet: '/assets/product-yx1-earphones/tablet/image-gallery-3.jpg',
        desktop: '/assets/product-yx1-earphones/desktop/image-gallery-3.jpg',
      },
    },
    others: [
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I',
        category: 'headphones',
        image: {
          mobile: '/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg',
          tablet: '/assets/product-xx99-mark-one-headphones/tablet/image-product.jpg',
          desktop:
            '/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg',
        },
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59',
        category: 'headphones',
        image: {
          mobile: '/assets/product-xx59-headphones/mobile/image-product.jpg',
          tablet: '/assets/product-xx59-headphones/tablet/image-product.jpg',
          desktop: '/assets/product-xx59-headphones/desktop/image-product.jpg',
        },
      },
      {
        slug: 'zx9-speaker',
        name: 'ZX9 Speaker',
        category: 'speakers',
        image: {
          mobile: '/assets/product-zx9-speaker/mobile/image-product.jpg',
          tablet: '/assets/product-zx9-speaker/tablet/image-product.jpg',
          desktop: '/assets/product-zx9-speaker/desktop/image-product.jpg',
        },
      },
    ],
  },
];

// Helper function to get all product data
export function getAllProducts(): Product[] {
  return allProducts;
}

// Helper function to get a product by its slug
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((product) => product.slug === slug);
}

// Helper function to get slugs for a specific category
export function getSlugsForCategory(
  category: 'headphones' | 'speakers' | 'earphones'
): string[] {
  const categoryData =
    category === 'headphones'
      ? headphonesData
      : category === 'speakers'
      ? speakersData
      : earphonesData;
  return categoryData.map((product) => product.slug);
}
