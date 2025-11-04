// app/orders/[id]/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function OrderPage() {
  const params = useParams();
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) setOrderId(params.id as string);
  }, [params.id]);

  if (!orderId) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-lighter py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Order #{orderId}</h1>
        <p>Order details would go here (fetch from Convex with auth).</p>
        {/* TODO: Use useQuery to fetch order by ID */}
      </div>
    </div>
  );
}