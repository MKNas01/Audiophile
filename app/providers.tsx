'use client';

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { CartProvider } from "@/components/cart/CartContext";
import CartModal from "@/components/cart/CartModal";

// Initialize Convex client (from env)
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <ConvexProvider client={convex}>
        {children}
        <CartModal />
      </ConvexProvider>
    </CartProvider>
  );
}