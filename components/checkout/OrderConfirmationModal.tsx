// components/checkout/OrderConfirmationModal.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart, CartItem } from '@/components/cart/CartContext';
import { useRouter } from 'next/navigation';

// Formats a price number into a string like "$ 2,999"
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Summary Item (for inside the modal)
function ModalSummaryItem({ item }: { item: CartItem }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Image
          src={item.product.cartImage}
          alt={item.product.name}
          width={50} // Smaller image for this modal
          height={50}
          className="rounded-lg"
        />
        <div>
          <p className="font-bold text-black">{item.product.shortName}</p>
          <p className="font-bold text-black/50 text-sm">
            {formatPrice(item.product.price)}
          </p>
        </div>
      </div>
      <span className="font-bold text-black/50">x{item.quantity}</span>
    </div>
  );
}

// The main Order Confirmation Modal component
export default function OrderConfirmationModal() {
  const {
    isOrderComplete,
    setIsOrderComplete,
    cartItems,
    cartTotal,
    clearCart,
  } = useCart();
  const router = useRouter();
  const [showAllItems, setShowAllItems] = useState(false);

  // Calculate totals
  const shipping = 50;
  const grandTotal = cartTotal + shipping;

  const firstItem = cartItems[0];
  const otherItemsCount = cartItems.length - 1;

  const handleBackToHome = () => {
    clearCart();
    setIsOrderComplete(false);
    router.push('/');
  };

  if (!isOrderComplete || !firstItem) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        aria-hidden="true"
      ></div>

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-50 p-8 md:p-12 w-[327px] md:w-[540px]">
        {/* Check Icon */}
        <div className="w-16 h-16 bg-orange-primary rounded-full flex items-center justify-center mb-6">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.285 6.28497L8.71497 17.855L3.42997 12.57"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        </div>

        {/* Text Content */}
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-black leading-tight tracking-[1px] mb-4">
          Thank you
          <br />
          for your order
        </h2>
        <p className="text-black/50 mb-6">
          You will receive an email confirmation shortly.
        </p>

        {/* Order Summary Box */}
        <div className="md:flex rounded-lg overflow-hidden">
          {/* Item(s) */}
          <div className="bg-gray-lighter p-6 flex-1">
            {showAllItems ? (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <ModalSummaryItem key={item.product.id} item={item} />
                ))}
              </div>
            ) : (
              <ModalSummaryItem item={firstItem} />
            )}

            {otherItemsCount > 0 && (
              <>
                <div className="h-px bg-black/10 my-4"></div>
                <button
                  onClick={() => setShowAllItems(!showAllItems)}
                  className="text-center w-full text-sm font-bold text-black/50"
                >
                  {showAllItems
                    ? 'View less'
                    : `and ${otherItemsCount} other item(s)`}
                </button>
              </>
            )}
          </div>
          {/* Grand Total */}
          <div className="bg-black text-white p-6 md:w-2/5 flex flex-col justify-center">
            <span className="uppercase text-white/50 text-sm mb-2">
              Grand Total
            </span>
            <span className="font-bold text-lg">{formatPrice(grandTotal)}</span>
          </div>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={handleBackToHome}
          className="bg-orange-primary text-white uppercase text-sm font-bold tracking-[1px] py-4 w-full mt-8 hover:bg-orange-light transition-colors"
        >
          Back to Home
        </button>
      </div>
    </>
  );
}
