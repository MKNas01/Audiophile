import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const insertOrder = mutation({
  args: {
    // Match your form/cart data exactly
    customer: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
    }),
    shipping: v.object({
      address: v.string(),
      zip: v.string(),
      city: v.string(),
      country: v.string(),
    }),
    items: v.array(
      v.object({
        id: v.number(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      })
    ),
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      taxes: v.number(),
      grandTotal: v.number(),
    }),
    payment: v.object({
      method: v.union(v.literal("eMoney"), v.literal("cash")),
      eMoneyNumber: v.optional(v.string()),
      eMoneyPin: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    // Insert with status and timestamp
    const orderId = await ctx.db.insert("orders", {
      ...args,
      status: "placed" as const,
      timestamp: Date.now(),
    });
    return { success: true, orderId }; // For client feedback
  },
});