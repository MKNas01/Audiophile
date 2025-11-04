// components/cart/CartModal.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './CartContext';
import { CartItem } from './CartContext';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Component for a single item in the cart
function CartModalItem({ item }: { item: CartItem }) {
  const { updateItemQuantity } = useCart();

  const increment = () => {
    updateItemQuantity(item.product.id, item.quantity + 1);
  };

  const decrement = () => {
    updateItemQuantity(item.product.id, item.quantity - 1);
  };

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
      {/* Quantity Selector */}
      <div className="flex bg-gray-light h-8">
        <button
          onClick={decrement}
          className="w-6 text-black/25 hover:text-orange-primary transition-colors"
        >
          -
        </button>
        <span className="w-6 flex items-center justify-center text-black font-bold text-sm">
          {item.quantity}
        </span>
        <button
          onClick={increment}
          className="w-6 text-black/25 hover:text-orange-primary transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
}

// The main Cart Modal component
export default function CartModal() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    clearCart,
    cartTotal,
    cartCount,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Cart Modal */}
      {/* Added responsive width and height as requested */}
      <div className="fixed top-28 left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 lg:right-16 xl:right-40 bg-white rounded-lg shadow-lg z-50 p-7 w-[327px] h-auto max-h-[488px] md:w-[377px]">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-black font-bold uppercase tracking-[1.3px] text-lg">
              Cart ({cartCount})
            </h2>
            <button
              onClick={clearCart}
              className="text-black/50 underline hover:text-orange-primary transition-colors"
            >
              Remove all
            </button>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <div className="flex-grow flex items-center justify-center">
              <p className="text-black/50 font-bold">Your cart is empty.</p>
            </div>
          ) : (
            <div className="flex-grow space-y-6 overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <CartModalItem key={item.product.id} item={item} />
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-black/50 uppercase">Total</span>
              <span className="text-black font-bold text-lg">
                {formatPrice(cartTotal)}
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={() => setIsCartOpen(false)} // Close modal on click
              className={`block w-full text-center py-4 text-white uppercase text-sm font-bold tracking-[1px] ${
                cartItems.length === 0
                  ? 'bg-gray-light cursor-not-allowed'
                  : 'bg-orange-primary hover:bg-orange-light'
              } transition-colors`}
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
