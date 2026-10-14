import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const subjectLabels = {
  order: 'Order Inquiry',
  product: 'Product Question',
  return: 'Returns & Refunds',
  bulk: 'Bulk Orders',
  feedback: 'Feedback',
  other: 'Other',
};

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const { EMAIL_HOST, EMAIL_USER, EMAIL_PASS } = process.env;
    if (!EMAIL_HOST || !EMAIL_USER || !EMAIL_PASS) {
      console.error('Contact email is not configured: set EMAIL_HOST, EMAIL_USER and EMAIL_PASS.');
      return NextResponse.json({ error: 'Email is not configured' }, { status: 500 });
    }

    const port = parseInt(process.env.EMAIL_PORT || '587');
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port,
      secure: port === 465,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    const subjectLabel = subjectLabels[subject] || 'Other';

    await transporter.sendMail({
      from: `AZ Sports Website <${EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || EMAIL_USER,
      replyTo: email,
      subject: `Website message: ${subjectLabel} - ${String(name).slice(0, 80)}`,
      html: `
        <h2>New message from the AZ Sports website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone) || '-'}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subjectLabel)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact email error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
