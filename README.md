# Audiophile E-Commerce

A high-fidelity audio gear e-commerce site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Convex (reactive backend for orders), and SendGrid (transactional emails). Features product browsing, cart management, checkout, order storage, and confirmation emails.

![Screenshot of Homepage](public/assets/home/desktop/image-hero.jpg) <!-- Add a screenshot if you have one -->

## Features
- Responsive design for mobile/tablet/desktop.
- Product categories (headphones, speakers, earphones) with dynamic pages.
- Cart with quantity updates and modal UI.
- Checkout form with validation (react-hook-form).
- Orders stored in Convex DB with customer/shipping/items/totals.
- Transactional confirmation emails via SendGrid.
- No auth (anonymous orders; add Clerk/NextAuth for users).

## Quick Start

### Prerequisites
- Node.js 18+.
- Git.
- Accounts: [Convex](https://dashboard.convex.dev) (free backend), [SendGrid](https://sendgrid.com) (free for 100 emails/day).

### 1. Clone and Install
```bash
git clone https://github.com/yourusername/audiophile.git  # Replace with your repo URL
cd audiophile
npm install