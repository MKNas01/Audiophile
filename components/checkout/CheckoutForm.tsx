// components/checkout/CheckoutForm.tsx
'use client';

export type FormInputs = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  paymentMethod: 'eMoney' | 'cash';
  eMoneyNumber?: string;
  eMoneyPin?: string;
};

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import { useCart } from '@/components/cart/CartContext';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

// <-- 1. Import useCart

// Reusable Input Field Component
const InputField = ({
  label,
  name,
  registered,
  error,
  placeholder,
  ...props
}: any) => (
  <div className="flex-1">
    <div className="flex justify-between items-center mb-2">
      <label
        htmlFor={name}
        className={`text-sm font-bold ${error ? 'text-red-500' : 'text-black'}`}
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
    <input
      id={name}
      {...registered}
      {...props}
      placeholder={placeholder}
      className={`w-full px-6 py-4 border rounded-lg font-bold ${
        error
          ? 'border-red-500 focus:border-red-500'
          : 'border-gray-300 focus:border-orange-primary'
      } focus:outline-none focus:ring-1`}
    />
  </div>
);

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState<'eMoney' | 'cash'>('eMoney');
  const { setIsOrderComplete, cartItems, cartTotal } = useCart(); // <-- 2. Get the new function

  const insertOrder = useMutation(api.orders.insertOrder);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      paymentMethod: 'eMoney',
    },
  });

  // Watch the paymentMethod field
  const selectedPayment = watch('paymentMethod');

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
        // Compute totals (matches your Summary.tsx)
        const subtotal = cartTotal;
        const shipping = 50;
        const taxes = subtotal * 0.2;
        const grandTotal = subtotal + shipping;

        // Map cart to items
        const items = cartItems.map((item) => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        }));

        // Payment details
        const payment = {
        method: data.paymentMethod,
        ...(data.paymentMethod === 'eMoney' && {
            eMoneyNumber: data.eMoneyNumber,
            eMoneyPin: data.eMoneyPin,
        }),
        };

        // Call mutation (UPDATED: Capture result)
        const result = await insertOrder({
        customer: { name: data.name, email: data.email, phone: data.phone },
        shipping: { address: data.address, zip: data.zip, city: data.city, country: data.country },
        items,
        totals: { subtotal, shipping, taxes, grandTotal },
        payment,
        });

        // NEW: handle result
        if (result.success) {
        // Send confirmation email
        const emailResponse = await fetch('/api/send-order-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            orderId: result.orderId, // From mutation
            customer: { name: data.name, email: data.email },
            items,
            totals: { subtotal, shipping, taxes, grandTotal },
            shipping: {
                address: data.address,
                zip: data.zip,
                city: data.city,
                country: data.country,
            },
            }),
        });

        if (!emailResponse.ok) {
            console.warn('Email failed, but order saved:', await emailResponse.text());
        } else {
            console.log('Email sent successfully!');
        }

        setIsOrderComplete(true); // Trigger confirmation modal
        }
    } catch (error) {
        console.error('Order failed:', error);
        alert('Order placement failed. Please try again.');
    }
    };


  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form
      id="checkout-form" // <-- Add an id here
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 md:p-8 rounded-lg shadow-sm"
    >
      <h1 className="text-3xl font-bold uppercase text-black mb-8">Checkout</h1>

      {/* BILLING DETAILS */}
      <fieldset className="mb-8">
        <legend className="text-orange-primary uppercase font-bold text-sm tracking-[1px] mb-4">
          Billing Details
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Name"
            name="name"
            registered={register('name', { required: 'Name is required' })}
            error={errors.name}
            placeholder="Alexei Ward"
          />
          <InputField
            label="Email Address"
            name="email"
            registered={register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Wrong format',
              },
            })}
            error={errors.email}
            placeholder="alexei@mail.com"
            type="email"
          />
          <InputField
            label="Phone Number"
            name="phone"
            registered={register('phone', {
              required: 'Phone is required',
              pattern: {
                value: /^[0-9+\s-()]{7,}$/,
                message: 'Wrong format',
              },
            })}
            error={errors.phone}
            placeholder="+1 202-555-0136"
            type="tel"
          />
        </div>
      </fieldset>

      {/* SHIPPING INFO */}
      <fieldset className="mb-8">
        <legend className="text-orange-primary uppercase font-bold text-sm tracking-[1px] mb-4">
          Shipping Info
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <InputField
              label="Address"
              name="address"
              registered={register('address', {
                required: 'Address is required',
              })}
              error={errors.address}
              placeholder="1137 Williams Avenue"
            />
          </div>
          <InputField
            label="ZIP Code"
            name="zip"
            registered={register('zip', {
              required: 'ZIP Code is required',
              pattern: {
                value: /^[0-9]{5}(?:-[0-9]{4})?$/,
                message: 'Wrong format',
              },
            })}
            error={errors.zip}
            placeholder="10001"
          />
          <InputField
            label="City"
            name="city"
            registered={register('city', { required: 'City is required' })}
            error={errors.city}
            placeholder="New York"
          />
          <InputField
            label="Country"
            name="country"
            registered={register('country', {
              required: 'Country is required',
            })}
            error={errors.country}
            placeholder="United States"
          />
        </div>
      </fieldset>

      {/* PAYMENT DETAILS */}
      <fieldset>
        <legend className="text-orange-primary uppercase font-bold text-sm tracking-[1px] mb-4">
          Payment Details
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="text-sm font-bold">Payment Method</label>
          <div className="space-y-4">
            <label
              className={`flex items-center w-full px-6 py-4 border rounded-lg font-bold cursor-pointer ${
                selectedPayment === 'eMoney'
                  ? 'border-orange-primary ring-1 ring-orange-primary'
                  : 'border-gray-300'
              }`}
            >
              <input
                type="radio"
                value="eMoney"
                {...register('paymentMethod', {
                  required: 'Payment method is required',
                })}
                className="mr-4 text-orange-primary focus:ring-orange-primary"
              />
              e-Money
            </label>
            <label
              className={`flex items-center w-full px-6 py-4 border rounded-lg font-bold cursor-pointer ${
                selectedPayment === 'cash'
                  ? 'border-orange-primary ring-1 ring-orange-primary'
                  : 'border-gray-300'
              }`}
            >
              <input
                type="radio"
                value="cash"
                {...register('paymentMethod', {
                  required: 'Payment method is required',
                })}
                className="mr-4 text-orange-primary focus:ring-orange-primary"
              />
              Cash on Delivery
            </label>
          </div>
        </div>

        {/* Conditional Fields */}
        {selectedPayment === 'eMoney' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <InputField
              label="e-Money Number"
              name="eMoneyNumber"
              registered={register('eMoneyNumber', {
                required: 'e-Money Number is required',
                pattern: {
                  value: /^[0-9]{9}$/,
                  message: 'Must be 9 digits',
                },
              })}
              error={errors.eMoneyNumber}
              placeholder="238521993"
            />
            <InputField
              label="e-Money PIN"
              name="eMoneyPin"
              registered={register('eMoneyPin', {
                required: 'e-Money PIN is required',
                pattern: {
                  value: /^[0-9]{4}$/,
                  message: 'Must be 4 digits',
                },
              })}
              error={errors.eMoneyPin}
              placeholder="6891"
              type="password"
            />
          </div>
        )}

        {selectedPayment === 'cash' && (
          <div className="flex items-center gap-6 mt-6">
            <Image
              src="/assets/shared/desktop/icon-cash-on-delivery.svg"
              width={48}
              height={48}
              alt="Cash on Delivery"
            />
            <p className="text-black/50">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Please make sure you
              have the correct amount of cash on hand, as our couriers may not
              have change.
            </p>
          </div>
        )}
      </fieldset>

      {/* This is the hidden submit button that the Summary component's button 
        will trigger. I've updated the Summary component code to use 
        `form="checkout-form"` to link to the form's new ID.
      */}
      <button type="submit" id="checkout-submit-button" className="hidden">
        Submit
      </button>

      {hasErrors && (
        <p className="text-red-500 mt-6 text-sm">
          Please fix the errors in the form to continue.
        </p>
      )}
    </form>
  );
}

