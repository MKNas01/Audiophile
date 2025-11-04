// components/checkout/Summary.tsx
'use client';

import Image from 'next/image';
import { useCart } from '@/components/cart/CartContext';
import { CartItem } from '@/components/cart/CartContext';

// Formats a price number into a string like "$ 2,999"
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Component for a single item in the summary
function SummaryItem({ item }: { item: CartItem }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Image
          src={item.product.cartImage}
          alt={item.product.name}
          width={64}
          height={64}
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

export default function Summary() {
  const { cartItems, cartTotal } = useCart();

  const shipping = 50;
  // VAT is 20% of the cart total
  const vat = cartTotal * 0.2;
  // Grand total includes shipping
  const grandTotal = cartTotal + shipping;

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold uppercase text-black mb-8">Summary</h2>

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-black/50 font-bold">Your cart is empty.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <SummaryItem key={item.product.id} item={item} />
          ))}
        </div>
      )}

      {/* Totals */}
      <div className="space-y-2 mt-8">
        <div className="flex justify-between items-center">
          <span className="text-black/50 uppercase">Total</span>
          <span className="text-black font-bold text-lg">
            {formatPrice(cartTotal)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-black/50 uppercase">Shipping</span>
          <span className="text-black font-bold text-lg">
            {formatPrice(shipping)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          {/* You mentioned VAT (Included), so we display it, but grandTotal logic doesn't add it *again*. */}
          <span className="text-black/50 uppercase">VAT (Included)</span>
          <span className="text-black font-bold text-lg">
            {formatPrice(vat)}
          </span>
        </div>
        <div className="flex justify-between items-center pt-4">
          <span className="text-black/50 uppercase">Grand Total</span>
          <span className="text-orange-primary font-bold text-lg">
            {formatPrice(grandTotal)}
          </span>
        </div>
      </div>
        {/* Continue & Pay Button */}
      <button
        type="submit"
        form="checkout-form" // This links to the <form id="checkout-form">
        className={`w-full text-center py-4 text-white uppercase text-sm font-bold tracking-[1px] ${
          cartItems.length === 0
            ? 'bg-gray-light cursor-not-allowed'
            : 'bg-orange-primary hover:bg-orange-light'
        } transition-colors mt-8`}
        disabled={cartItems.length === 0}
      >
        Continue & Pay
      </button>
    </div>
  );
}

