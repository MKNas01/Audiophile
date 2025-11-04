import Image from "next/image";
import Link from "next/link";

// Icon imports
import IconFacebook from "../icons/IconFacebook";
import IconInstagram from "../icons/IconInstagram";
import IconTwitter from "../icons/IconTwitter";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Headphones", href: "/headphones" },
    { name: "Speakers", href: "/speakers" },
    { name: "Earphones", href: "/earphones" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", Icon: IconFacebook },
    { name: "Twitter", href: "#", Icon: IconTwitter },
    { name: "Instagram", href: "#", Icon: IconInstagram },
  ];

  return (
    <footer className="relative bg-[#101010] text-white pt-16 pb-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
        {/* Decorative Orange Line */}
        <div className="absolute top-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 h-1 w-[101px] bg-orange-primary"></div>

        {/* Logo + Nav */}
        <div className="flex flex-col items-center md:items-start md:flex-col lg:flex-row justify-between lg:items-center mt-12 md:mt-14 w-full">
          <Link
            href="/"
            aria-label="Audiophile Home"
            className="mb-8 md:mb-6 lg:mb-0"
          >
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="Audiophile Logo"
              width={143}
              height={25}
            />
          </Link>

          <nav aria-label="Footer Navigation">
            <ul className="flex flex-col items-center md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-8 uppercase text-[13px] font-bold tracking-[2px]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-orange-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Description */}
        <div className="mt-8 md:mt-9">
          <p className="text-[15px] font-medium leading-[25px] text-white opacity-50 text-center md:text-left max-w-lg mx-auto md:mx-0">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio gear so that you
            can enjoy music the way it was meant to be heard.
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col items-center md:flex-row md:items-center justify-between mt-12 md:mt-20 w-full">
          <p className="text-[15px] font-medium leading-[25px] text-white opacity-50 text-center md:text-left mb-4 md:mb-0">
            Copyright 2021. All Rights Reserved
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-label={link.name}
                className="text-white hover:text-orange-primary transition-colors duration-300"
              >
                <link.Icon className="h-6 w-auto md:h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
