import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateOrderConfirmationEmail, generateOrderReceivedEmail } from '../../lib/emailTemplates';

// Mail settings come from environment variables (.env.local locally, host settings in production).
// Hostinger SMTP: smtp.hostinger.com, port 587 (STARTTLS) or 465 (SSL).
const getMailConfig = () => {
  const { EMAIL_HOST, EMAIL_USER, EMAIL_PASS } = process.env;
  if (!EMAIL_HOST || !EMAIL_USER || !EMAIL_PASS) {
    return null;
  }
  const port = parseInt(process.env.EMAIL_PORT || '587');
  return {
    transport: {
      host: EMAIL_HOST,
      port,
      secure: port === 465,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    },
    // Hostinger only accepts a sender that belongs to the mailbox we log in with,
    // so always send from EMAIL_USER and keep EMAIL_FROM's address as the reply-to.
    from: `AZ Sports <${EMAIL_USER}>`,
    replyTo: process.env.EMAIL_FROM || EMAIL_USER,
    adminEmail: process.env.ADMIN_EMAIL || EMAIL_USER,
  };
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      customerName, 
      customerEmail, 
      items, 
      subtotal, 
      standTotal, 
      total, 
      shippingAddress,
      orderNumber,
      currency = { symbol: 'Rs', code: 'PKR' } // Default to PKR
    } = body;

    // Validate required fields
    if (!customerName || !customerEmail || !items || items.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const orderDate = new Date().toLocaleDateString('en-PK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const orderNum = orderNumber || `AZS-${Date.now()}`;

    // Generate email HTML
    const customerEmailHtml = generateOrderConfirmationEmail({
      customerName,
      customerEmail,
      orderNumber: orderNum,
      orderDate,
      items,
      subtotal: subtotal || 0,
      standTotal: standTotal || 0,
      total: total || 0,
      shippingAddress,
      currency: currency,
    });

    const adminEmailHtml = generateOrderReceivedEmail({
      customerName,
      customerEmail,
      orderNumber: orderNum,
      orderDate,
      items,
      total: total || 0,
      currency: currency,
    });

    const mail = getMailConfig();
    if (!mail) {
      console.error('Order email is not configured: set EMAIL_HOST, EMAIL_USER and EMAIL_PASS.');
      return NextResponse.json({ error: 'Email is not configured' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport(mail.transport);

    // The admin email is the only record of the order, so it must succeed.
    await transporter.sendMail({
      from: mail.from,
      to: mail.adminEmail,
      replyTo: customerEmail,
      subject: `New Order Received #${orderNum} - AZ Sports`,
      html: adminEmailHtml,
    });

    // The customer confirmation is best effort (a mistyped address must not lose the order).
    let customerEmailSent = true;
    try {
      await transporter.sendMail({
        from: mail.from,
        to: customerEmail,
        replyTo: mail.replyTo,
        subject: `Order Confirmed #${orderNum} - AZ Sports`,
        html: customerEmailHtml,
      });
    } catch (customerError) {
      customerEmailSent = false;
      console.error('Customer confirmation email failed:', customerError.message);
    }

    return NextResponse.json(
      {
        success: true,
        message: customerEmailSent ? 'Order confirmation emails sent' : 'Order received, customer email failed',
        orderNumber: orderNum,
        customerEmailSent,
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
