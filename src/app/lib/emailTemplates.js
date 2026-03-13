// Email template utilities for AZ Sports

export const generateOrderConfirmationEmail = (orderDetails) => {
  const { customerName, customerEmail, orderNumber, orderDate, items, subtotal, standTotal, total, shippingAddress } = orderDetails;

  const itemsHtml = items.map(item => `
    <tr>
      <td style="padding: 12px; border-bottom: 1px solid #333;">
        <strong style="color: #fff;">${item.name}</strong>
        ${item.tag ? `<br><span style="color: #f59e0b; font-size: 12px;">${item.tag}</span>` : ''}
        ${item.addStand ? '<br><span style="color: #888; font-size: 11px;">+ Foldable Stand</span>' : ''}
      </td>
      <td style="padding: 12px; border-bottom: 1px solid #333; text-align: center; color: #fff;">${item.quantity}</td>
      <td style="padding: 12px; border-bottom: 1px solid #333; text-align: right; color: #fff;">Rs ${item.price.toLocaleString()}</td>
      <td style="padding: 12px; border-bottom: 1px solid #333; text-align: right; color: #fff;">Rs ${(item.price * item.quantity).toLocaleString()}</td>
    </tr>
  `).join('');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation - AZ Sports</title>
</head>
<body style="margin: 0; padding: 0; background-color: #000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #18181b; border-radius: 12px; overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #fff; font-size: 28px; font-weight: 900;">AZ SPORTS</h1>
              <p style="margin: 5px 0 0; color: #fff; font-size: 14px;">Amjad Zahoor Sports - Since 1940</p>
            </td>
          </tr>
          
          <!-- Order Confirmation -->
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 10px; color: #fff; font-size: 24px; font-weight: 700;">Order Confirmed!</h2>
              <p style="margin: 0 0 20px; color: #a1a1aa; font-size: 14px;">Thank you for your order, ${customerName}!</p>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #27272a; border-radius: 8px; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 15px;">
                    <p style="margin: 0; color: #f59e0b; font-size: 12px; font-weight: 600; text-transform: uppercase;">Order Number</p>
                    <p style="margin: 5px 0 0; color: #fff; font-size: 18px; font-weight: 700;">${orderNumber}</p>
                  </td>
                  <td style="padding: 15px; border-left: 1px solid #3f3f46;">
                    <p style="margin: 0; color: #f59e0b; font-size: 12px; font-weight: 600; text-transform: uppercase;">Order Date</p>
                    <p style="margin: 5px 0 0; color: #fff; font-size: 14px;">${orderDate}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Order Items -->
          <tr>
            <td style="padding: 0 30px;">
              <h3 style="margin: 0 0 15px; color: #fff; font-size: 16px; font-weight: 600;">Order Details</h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #27272a; border-radius: 8px; overflow: hidden;">
                <thead>
                  <tr>
                    <th style="padding: 12px; background-color: #3f3f46; color: #a1a1aa; font-size: 12px; text-transform: uppercase; text-align: left;">Product</th>
                    <th style="padding: 12px; background-color: #3f3f46; color: #a1a1aa; font-size: 12px; text-transform: uppercase; text-align: center;">Qty</th>
                    <th style="padding: 12px; background-color: #3f3f46; color: #a1a1aa; font-size: 12px; text-transform: uppercase; text-align: right;">Price</th>
                    <th style="padding: 12px; background-color: #3f3f46; color: #a1a1aa; font-size: 12px; text-transform: uppercase; text-align: right;">Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHtml}
                </tbody>
              </table>
            </td>
          </tr>
          
          <!-- Order Summary -->
          <tr>
            <td style="padding: 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #27272a; border-radius: 8px;">
                <tr>
                  <td style="padding: 15px; color: #a1a1aa; font-size: 14px;">Subtotal</td>
                  <td style="padding: 15px; text-align: right; color: #fff; font-size: 14px;">Rs ${subtotal.toLocaleString()}</td>
                </tr>
                ${standTotal > 0 ? `
                <tr>
                  <td style="padding: 15px; color: #a1a1aa; font-size: 14px;">Stands</td>
                  <td style="padding: 15px; text-align: right; color: #fff; font-size: 14px;">Rs ${standTotal.toLocaleString()}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 15px; border-top: 1px solid #3f3f46; color: #fff; font-size: 16px; font-weight: 700;">Total</td>
                  <td style="padding: 15px; border-top: 1px solid #3f3f46; text-align: right; color: #f59e0b; font-size: 20px; font-weight: 700;">Rs ${total.toLocaleString()}</td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Shipping Address -->
          ${shippingAddress ? `
          <tr>
            <td style="padding: 0 30px 30px;">
              <h3 style="margin: 0 0 15px; color: #fff; font-size: 16px; font-weight: 600;">Shipping Address</h3>
              <div style="background-color: #27272a; border-radius: 8px; padding: 15px;">
                <p style="margin: 0; color: #fff; font-size: 14px; font-weight: 600;">${shippingAddress.name}</p>
                <p style="margin: 5px 0 0; color: #a1a1aa; font-size: 14px;">${shippingAddress.address}</p>
                <p style="margin: 0; color: #a1a1aa; font-size: 14px;">${shippingAddress.city}, ${shippingAddress.postalCode}</p>
                <p style="margin: 0; color: #a1a1aa; font-size: 14px;">${shippingAddress.country}</p>
                <p style="margin: 10px 0 0; color: #f59e0b; font-size: 14px;">📞 ${shippingAddress.phone}</p>
              </div>
            </td>
          </tr>
          ` : ''}
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #27272a; padding: 30px; text-align: center;">
              <p style="margin: 0 0 10px; color: #a1a1aa; font-size: 12px;">
                Questions? Reply to this email or contact us at support@azsports.com
              </p>
              <p style="margin: 0; color: #71717a; font-size: 11px;">
                AZ Sports - Amjad Zahoor Sports | Sialkot, Pakistan | Since 1940
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

export const generateOrderReceivedEmail = (orderDetails) => {
  const { customerName, orderNumber, orderDate, items, total, customerEmail } = orderDetails;

  const itemsList = items.map(item => `${item.name} x${item.quantity}`).join(', ');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Order Received - AZ Sports</title>
</head>
<body style="margin: 0; padding: 0; background-color: #000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #000; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #18181b; border-radius: 12px; overflow: hidden;">
          <tr>
            <td style="background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #fff; font-size: 28px; font-weight: 900;">AZ SPORTS</h1>
              <p style="margin: 5px 0 0; color: #fff; font-size: 14px;">New Order Received!</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              <h2 style="margin: 0 0 15px; color: #fff; font-size: 20px; font-weight: 700;">New Order #${orderNumber}</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #27272a; border-radius: 8px; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 15px;">
                    <p style="margin: 0; color: #f59e0b; font-size: 12px; font-weight: 600;">CUSTOMER</p>
                    <p style="margin: 5px 0 0; color: #fff; font-size: 14px;">${customerName}</p>
                    <p style="margin: 0; color: #a1a1aa; font-size: 12px;">${customerEmail}</p>
                  </td>
                  <td style="padding: 15px; border-left: 1px solid #3f3f46;">
                    <p style="margin: 0; color: #f59e0b; font-size: 12px; font-weight: 600;">DATE</p>
                    <p style="margin: 5px 0 0; color: #fff; font-size: 14px;">${orderDate}</p>
                  </td>
                  <td style="padding: 15px; border-left: 1px solid #3f3f46;">
                    <p style="margin: 0; color: #f59e0b; font-size: 12px; font-weight: 600;">TOTAL</p>
                    <p style="margin: 5px 0 0; color: #f59e0b; font-size: 18px; font-weight: 700;">Rs ${total.toLocaleString()}</p>
                  </td>
                </tr>
              </table>
              
              <h3 style="margin: 0 0 10px; color: #fff; font-size: 14px; font-weight: 600;">ITEMS:</h3>
              <p style="margin: 0; color: #a1a1aa; font-size: 14px;">${itemsList}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};
