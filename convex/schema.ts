import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    // Customer details
    customer: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
    }),
    // Shipping details
    shipping: v.object({
      address: v.string(),
      zip: v.string(),
      city: v.string(),
      country: v.string(),
    }),
    // Items: Array of cart items
    items: v.array(
      v.object({
        id: v.number(), // Product ID
        name: v.string(), // Full product name
        price: v.number(),
        quantity: v.number(),
      })
    ),
    // Totals
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      taxes: v.number(), // VAT
      grandTotal: v.number(),
    }),
    // Payment (for completeness)
    payment: v.object({
      method: v.union(v.literal("eMoney"), v.literal("cash")),
      eMoneyNumber: v.optional(v.string()), // Only if eMoney
      eMoneyPin: v.optional(v.string()), // Only if eMoney
    }),
    // Order metadata
    status: v.string(), // e.g., "placed"
    timestamp: v.number(), // Server timestamp (ms)
  })
    .index("by_status", ["status"]) // Optional: Quick queries by status later
    .index("by_timestamp", ["timestamp"]), // Optional: Sort by date
});