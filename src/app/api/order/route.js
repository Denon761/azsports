import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateOrderConfirmationEmail, generateOrderReceivedEmail } from '../../lib/emailTemplates';

// Configure your email transporter
// Hostinger SMTP: smtp.hostinger.com
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || 'info@azsports.pk',
      pass: process.env.EMAIL_PASS || '[O*m+@vM2:',
    },
  });
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
      orderNumber 
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
      shippingAddress
    });

    const adminEmailHtml = generateOrderReceivedEmail({
      customerName,
      customerEmail,
      orderNumber: orderNum,
      orderDate,
      items,
      total: total || 0
    });

    const transporter = createTransporter();

    // Email configuration
    const emailFrom = process.env.EMAIL_FROM || 'AZ Sports <support@azsports.com>';
    const adminEmail = process.env.ADMIN_EMAIL || 'support@azsports.com';

    // Send confirmation email to customer
    await transporter.sendMail({
      from: emailFrom,
      to: customerEmail,
      subject: `Order Confirmed #${orderNum} - AZ Sports`,
      html: customerEmailHtml,
    });

    // Send notification to admin
    await transporter.sendMail({
      from: emailFrom,
      to: adminEmail,
      subject: `New Order Received #${orderNum} - AZ Sports`,
      html: adminEmailHtml,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Order confirmation emails sent',
        orderNumber: orderNum 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
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
