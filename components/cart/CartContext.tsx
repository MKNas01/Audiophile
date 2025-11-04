// components/cart/CartContext.tsx
'use client';

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from 'react';
import { Product } from '@/lib/data'; // Import your main Product type

// Define what a cart item looks like
export interface CartItem {
  product: Product;
  quantity: number;
}

// Define the shape of the context
interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  addItemToCart: (product: Product, quantity: number) => void;
  updateItemQuantity: (productId: number, newQuantity: number) => void;
  removeItemFromCart: (productId: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isOrderComplete: boolean; // <-- ADDED
  setIsOrderComplete: (isComplete: boolean) => void; // <-- ADDED
}

// Create the context
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Create the provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false); // <-- ADDED

  // Add item or update quantity if it already exists
  const addItemToCart = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        // Update quantity
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item
        return [...prevItems, { product, quantity }];
      }
    });
    setIsCartOpen(true); // Open cart modal when item is added
  };

  // Update quantity for an item in the cart
  const updateItemQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItemFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Remove an item from the cart
  const removeItemFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  // Clear all items from the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate the total price
  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }, [cartItems]);

  // Calculate the total number of items
  const cartCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        updateItemQuantity,
        removeItemFromCart,
        clearCart,
        cartTotal,
        cartCount,
        isOrderComplete, // <-- ADDED
        setIsOrderComplete, // <-- ADDED
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

