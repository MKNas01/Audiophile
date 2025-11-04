'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/components/cart/CartContext'; // ⬅️ Added
import IconCart from '@/components/icons/IconCart';

interface HeaderProps {
  currentPage?: string;
  variant?: 'home' | 'category';
}

export default function Header({ currentPage = 'home', variant = 'home' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isCartOpen, setIsCartOpen, cartCount } = useCart(); // ⬅️ Integrated from sample

  const bgClass = variant === 'category' ? 'bg-black' : 'bg-gray-dark';
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`text-white pt-4 ${bgClass}`}>
      <nav className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-0 pb-[36px] pt-[32px] border-b border-[#979797]">
        <div className="flex items-center justify-between">
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden mr-4"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMenuOpen}
          >
            <Image
              src="/assets/hamburger.svg"
              alt="Hamburger Menu"
              width={24}
              height={20}
              className="hover:brightness-75 transition-colors"
            />
          </button>

          {/* Logo */}
          <Link href="/" aria-label="Audiophile Home" className="flex-1 text-center lg:flex-none">
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="Audiophile Logo"
              width={143}
              height={25}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex space-x-8 uppercase tracking-widest font-medium">
            <li>
              <Link href="/" className="text-[13px] hover:text-orange-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/headphones"
                className={`text-[13px] transition-colors ${
                  currentPage === 'headphones' ? 'text-orange-primary' : 'hover:text-orange-primary'
                }`}
              >
                Headphones
              </Link>
            </li>
            <li>
              <Link
                href="/speakers"
                className="text-[13px] hover:text-orange-primary transition-colors"
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                href="/earphones"
                className="text-[13px] hover:text-orange-primary transition-colors"
              >
                Earphones
              </Link>
            </li>
          </ul>

          {/* 🛒 Cart Button (exact logic + look from sample) */}
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative text-white hover:text-orange-primary transition-colors ml-4"
            aria-label={`Open cart (${cartCount} items)`}
          >
            <IconCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile/Tablet Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#141414] border-t border-[#979797] py-4 lg:hidden z-40">
            <ul className="flex flex-col space-y-4 px-6 uppercase tracking-widest font-medium text-center">
              <li>
                <Link
                  href="/"
                  className="text-[13px] hover:text-orange-primary transition-colors block py-2"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/headphones"
                  className="text-[13px] hover:text-orange-primary transition-colors block py-2"
                  onClick={toggleMenu}
                >
                  Headphones
                </Link>
              </li>
              <li>
                <Link
                  href="/speakers"
                  className="text-[13px] hover:text-orange-primary transition-colors block py-2"
                  onClick={toggleMenu}
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  href="/earphones"
                  className="text-[13px] hover:text-orange-primary transition-colors block py-2"
                  onClick={toggleMenu}
                >
                  Earphones
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
