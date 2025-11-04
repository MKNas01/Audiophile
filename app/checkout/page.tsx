'use client';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import GoBackButton from '@/components/product/GoBackButton';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import Summary from '@/components/checkout/Summary';
import OrderConfirmationModal from '@/components/checkout/OrderConfirmationModal'; // <-- 1. Import the new modal

export default function CheckoutPage() {
  return (
    <main className="min-h-screen font-sans bg-gray-lighter">
      {/* Black top section for Header */}
      <div className="bg-black">
        <Header variant="category" />
      </div>

      {/* Page content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-8 md:pt-16 pb-24">
        <GoBackButton />
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-start mt-8">
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>
          <div className="lg:col-span-1 mt-8 lg:mt-0">
            <Summary />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* 2. Add the modal here */}
      {/* It's invisible by default and will appear when its internal state is true */}
      <OrderConfirmationModal />
    </main>
  );
}

