// components/product/GoBackButton.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function GoBackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-black/50 hover:text-orange-primary transition-colors"
    >
      Go Back
    </button>
  );
}
