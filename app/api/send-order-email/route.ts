import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';  // NEW: SendGrid official client

// Define the expected request body (from client)
interface SendEmailRequest {
  orderId: string;
  customer: { name: string; email: string };
  items: Array<{ id: number; name: string; price: number; quantity: number }>;
  totals: { subtotal: number; shipping: number; taxes: number; grandTotal: number };
  shipping: { address: string; zip: string; city: string; country: string };
}

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Helper: Generate HTML email template (your updated styles preserved)
const generateEmailTemplate = (
  orderId: string,
  name: string,
  items: SendEmailRequest['items'],
  totals: SendEmailRequest['totals'],
  shipping: SendEmailRequest['shipping'],
  siteUrl: string  // NEW: Pass site URL for CTA
): string => {
  const itemsHtml = items
    .map(
      (item) => `
    <tr>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${item.name}</td>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">x${item.quantity}</td>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; text-align: right;">${formatPrice(item.price * item.quantity)}</td>
    </tr>
  `
    )
    .join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation</title>
      <style>
        body { font-family: 'Manrope', sans-serif; line-height: 1.6; color: #1f2937; background-color: #f9fafb; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        
        .header { background: #000000; color: white; padding: 40px 30px; }
        .logo { 
          color: #FFFFFF; 
          font-size: 1.6rem; 
          font-weight: 700; 
          letter-spacing: 1px; 
          text-transform: lowercase; 
          padding-bottom: 20px; 
          border-bottom: 1px solid #4C4C4C; /* Using gray-medium */
          margin-bottom: 30px; 
          text-align: left; 
        }
        .header h1 { margin: 0; font-size: 2.5rem; font-weight: 700; color: #FFFFFF; line-height: 1.2; }

        .content { padding: 40px 30px; }
        .greeting { font-size: 1.25rem; font-weight: 600; margin-bottom: 20px; }
        .order-id { background: #f3f4f6; padding: 15px; border-radius: 4px; margin: 20px 0; font-weight: 600; }
        .summary { margin: 30px 0; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        th, td { text-align: left; padding: 12px 0; }
        th { font-weight: 600; color: #6b7280; text-transform: uppercase; font-size: 0.875rem; }
        
        /* Updated Totals styles */
        .totals { background: #f9fafb; padding: 20px 20px 0 20px; border-radius: 8px 8px 0 0; }
        .total-row { display: flex; justify-content: space-between; margin-bottom: 10px; }
        .grand-total-row {
          background: #000000; 
          color: #FFFFFF; 
          padding: 20px; 
          border-radius: 0 0 8px 8px; 
          /* Negative margin to align with padding of .totals */
          margin: 0 -20px -20px -20px; 
        }
        .grand-total-label {
          color: #FFFFFF; 
          text-transform: uppercase; 
          font-size: 0.875rem; 
          opacity: 0.7;
        }
        .grand-total-value {
          color: #FFFFFF; 
          font-weight: 700; 
          font-size: 1.125rem;
        }

        .shipping { background: #f3f4f6; padding: 20px; border-radius: 4px; margin: 20px 0; }
        .cta { text-align: center; margin: 30px 0; }
        .cta a { display: inline-block; background: #D87D4A; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: 600; }
        
        .support { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; }
        .support a { color: #D87D4A; text-decoration: none; }

        @media (max-width: 600px) { 
          .container { margin: 0; border-radius: 0; } 
          .header, .content { padding: 20px; } 
          .grand-total-row { margin: 0 -20px -20px -20px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">audiophile</div>
          <h1>Thank You<br>For Your Order</h1>
        </div>
        <div class="content">
          <p class="greeting">Hi <strong>${name}</strong>,</p>
          <p>Thanks for shopping with Audiophile! Your order has been confirmed and will be shipped soon.</p>
        
          <div class="order-id">
            <strong>Order ID:</strong> #${orderId}
          </div>
        
          <div class="summary">
            <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 20px;">Order Summary</h2>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>
            
            <!-- Updated Totals Section -->
            <div class="totals">
              <div class="total-row">
                <span>Subtotal</span>
                <span>${formatPrice(totals.subtotal)}</span>
              </div>
              <div class="total-row">
                <span>Shipping</span>
                <span>${formatPrice(totals.shipping)}</span>
              </div>
              <div class="total-row">
                <span>VAT (Included)</span>
                <span>${formatPrice(totals.taxes)}</span>
              </div>
            </div>
            <div class="total-row grand-total-row">
              <span class="grand-total-label">Grand Total</span>
              <span class="grand-total-value">${formatPrice(totals.grandTotal)}</span>
            </div>
            <!-- End Updated Totals Section -->

          </div>
        
          <div class="shipping">
            <h3 style="margin: 0 0 10px 0; font-weight: 600;">Shipping To</h3>
            <p>${shipping.address}<br>
            ${shipping.city}, ${shipping.zip}<br>
            ${shipping.country}</p>
          </div>
        
          <div class="cta">
            <a href="${siteUrl}/orders/${orderId}">View Your Order</a>
          </div>
        
          <div class="support">
            <p>Questions? Reach out to <a href="mailto:support@audiophile.com">support@audiophile.com</a> or call +1-202-555-0136.</p>
            <p>Best,<br>The Audiophile Team</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

export async function POST(request: NextRequest) {
  try {
    const body: SendEmailRequest = await request.json();

    // NEW: Set API key for SendGrid
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      throw new Error('SENDGRID_API_KEY env var missing');
    }
    sgMail.setApiKey(apiKey);

    const fromEmail = process.env.SENDGRID_FROM_EMAIL;
    if (!fromEmail) {
      throw new Error('SENDGRID_FROM_EMAIL env var missing');
    }

    console.log('SendGrid ready'); // Debug

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const html = generateEmailTemplate(
      body.orderId,
      body.customer.name,
      body.items,
      body.totals,
      body.shipping,
      siteUrl
    );

    // NEW: Send via SendGrid API (no SMTP/port)
    const msg = {
      to: body.customer.email,
      from: {
        email: fromEmail,  // Verified sender
        name: 'Audiophile',
      },
      subject: `Order Confirmation #${body.orderId} - Audiophile`,
      html,
      text: `Thanks for your order #${body.orderId}! Check your email for details.`,
    };

    const info = await sgMail.send(msg);

    console.log('Email sent successfully to:', body.customer.email);
    // FIXED: Remove messageId to avoid TS error (not essential for your app)
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Email send failed:', {
      message: error.message,
      code: error.code,
      response: error.response?.body,
      stack: error.stack,
    });
    return NextResponse.json({ success: false, error: `Failed to send email: ${error.message}` }, { status: 500 });
  }
}