import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Providers from "./providers"; // NEW: Client wrapper for contexts

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Audiophile E-commerce',
  description: 'High-end audio gear and accessories',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans`}>
        {/* NEW: Wrap children with Providers (client-side contexts) */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}