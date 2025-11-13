# Audiophile E-Commerce

A high-fidelity audio gear e-commerce site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Convex (reactive backend for orders), and SendGrid (transactional emails). Features product browsing, cart management, checkout, order storage, and confirmation emails.

![Audiophile Hero](public/assets/home/desktop/image-hero.jpg) <!-- Replace with your hero image path if needed -->

## Live Demo
- **Deployed Site**: [https://audiophile-mk.netlify.app/](https://audiophile-mk.netlify.app/)
- **Backend**: Convex (orders stored in cloud DB)
- **Emails**: SendGrid (confirmation on successful checkout)

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
git clone https://github.com/MKNas01/Audiophile.git
cd Audiophile
npm install

Set Up Environment Variables
Create .env.local in the root (never commit it! Add to .gitignore). Get values from your services:
# Convex (sign up at dashboard.convex.dev, create project)
NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud  # From Convex dashboard > Deployments

# SendGrid (sign up at sendgrid.com, create full-access API key, verify a sender email)
SENDGRID_API_KEY=SG.your_api_key_here
SENDGRID_FROM_EMAIL=your-verified-sender@example.com  # Verified in SendGrid > Settings > Sender Authentication

# Site URL (update for prod)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

Set Up Convex Backend
npx convex dev  # Initializes/syncs schema/functions; run in separate terminal
Edit convex/schema.ts and convex/orders.ts as needed.
View DB: http://localhost:3183.
For prod: npx convex deploy --prod (updates URL).

Run Locally
npm run dev
Open http://localhost:3000.
Test: Add to cart → Checkout → Submit (use verified email for real send).

Build and Start (Prod Preview)
npm run build
npm run start  # Runs on http://localhost:3000

Deployment

Frontend (Netlify/Vercel): Connect Git repo; add env vars (above). Build command: npm run build, publish: .next.
Backend (Convex): Run npx convex deploy --prod for production DB/functions.
Emails: SendGrid free tier limits 100/day; monitor in dashboard > Activity.

Audiophile/
├── app/                 # Next.js App Router pages/components
├── components/          # UI: Cart, Checkout, Product, etc.
├── convex/              # Backend: schema.ts, orders.ts (mutations)
├── lib/                 # Data: products
├── public/              # Assets: images, icons
├── .gitignore           # Excludes secrets
├── README.md            # This file
└── package.json         # Deps: next, react, convex, @sendgrid/mail

Tech Stack
Category,Tech
Frontend,"Next.js 14, React 19, TypeScript, Tailwind CSS"
Backend,Convex (DB + functions)
Forms,react-hook-form
Emails,@sendgrid/mail
State,React Context (cart)

Troubleshooting

Build Errors: Ensure env vars are set; run npm run build locally.
Emails Fail: Check SendGrid Activity; verify sender email.
Convex Issues: Run npx convex dev and check dashboard.
No Emails in Prod: Confirm env vars in Netlify (Site settings > Environment variables).

Contributing
Fork, branch, PR. Run npm run lint before push.
License
MIT. © 2025 MKNas01.

