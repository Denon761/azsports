import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | AZ Sports',
  description: 'Terms and conditions for ordering handmade carrom boards and accessories from AZ Sports, Sialkot, Pakistan.',
};

const termsData = [
  {
    title: "1. About These Terms",
    content: [
      "These Terms & Conditions apply to your use of this website and to all orders placed with AZ Sports, a family-run handmade carrom board manufacturer based in Sialkot, Punjab, Pakistan.",
      "By using this website or placing an order, you agree to these terms. If you do not agree, please do not use the website or place an order."
    ]
  },
  {
    title: "2. Products & Descriptions",
    content: ["Our carrom boards are handmade from natural wood."],
    list: [
      "Small variations in wood grain, colour and finish are natural and are not defects.",
      "Product photos are for illustration; the final product may differ slightly in appearance.",
      "Sizes, specifications and availability may change without notice."
    ]
  },
  {
    title: "3. Prices & Payment",
    content: [
      "Prices are shown in Pakistani Rupees (PKR) for customers in Pakistan and in US Dollars (USD) for international customers, based on the country selected on the website.",
      "Payment for orders within Pakistan is by Cash on Delivery (COD). Payment arrangements for international and bulk orders are confirmed with the buyer before dispatch.",
      "If a product is listed at an incorrect price due to an error, we will contact you before dispatch, and you may confirm the order at the correct price or cancel it."
    ]
  },
  {
    title: "4. Orders & Confirmation",
    content: ["Placing an order is an offer to buy. An order is accepted once we confirm it with you."],
    list: [
      "We may contact you by email or phone to confirm your order and delivery details.",
      "We may decline or cancel an order if product details, pricing or delivery information cannot be confirmed.",
      "Bulk and export orders are subject to separately agreed quantities, timelines and terms."
    ]
  },
  {
    title: "5. Shipping & Delivery",
    content: [
      "Shipping is handled as described in our Shipping, Returns & Warranty policy. Delivery times are estimates and depend on the courier and destination.",
      "For international orders, customs clearance, import duties and taxes are the buyer's responsibility unless agreed otherwise in writing."
    ]
  },
  {
    title: "6. Returns & Refunds",
    content: ["You may request a return within 7 days of receiving your order."],
    list: [
      "Items must be unused and in their original packaging.",
      "Items damaged in transit or with a manufacturing defect are covered — please report these as soon as possible after delivery.",
      "Refunds are confirmed after the returned item is received and inspected."
    ]
  },
  {
    title: "7. Warranty",
    content: [
      "All AZ Sports carrom boards come with a 30-day warranty from the date of delivery, covering manufacturing defects. Covered items will be repaired or replaced.",
      "The warranty does not cover damage from misuse, accidents, water or moisture exposure, improper storage, or normal wear."
    ]
  },
  {
    title: "8. Use of This Website",
    content: ["All content on this website, including text, photos, logos and designs, belongs to AZ Sports. You may not:"],
    list: [
      "Copy, reproduce or resell website content or product images without written permission",
      "Use the website for any unlawful or fraudulent purpose",
      "Attempt to interfere with the website's operation or security"
    ]
  },
  {
    title: "9. Limitation of Liability",
    content: [
      "To the extent permitted by law, AZ Sports is not liable for indirect or consequential losses arising from the use of this website or our products. Our total liability for any order is limited to the amount paid for that order.",
      "Nothing in these terms limits any rights you have under the applicable consumer protection laws of Pakistan."
    ]
  },
  {
    title: "10. Changes to These Terms",
    content: ["We may update these terms from time to time. The version published on this page at the time you place an order applies to that order."]
  },
  {
    title: "11. Governing Law",
    content: ["These terms are governed by the laws of Pakistan. Any dispute will be subject to the jurisdiction of the courts of Sialkot, Punjab, Pakistan."]
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight font-heading">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Last updated: October 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 space-y-8 shadow-sm">
            {termsData.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg md:text-2xl font-black text-gray-900 mb-4 font-heading">{section.title}</h2>
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-disc list-inside text-gray-600 text-sm md:text-base space-y-2">
                    {section.list.map((item, lIdx) => (
                      <li key={lIdx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div>
              <h2 className="text-lg md:text-2xl font-black text-gray-900 mb-4 font-heading">Contact Us</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions, please contact us:
              </p>
              <ul className="list-none text-gray-600 text-sm md:text-base space-y-1">
                <li>AZ Sports</li>
                <li>Hakeem Ashraf Road, Opposite Janazagah, Rangpura, Sialkot, Pakistan</li>
                <li>Email: info@azsports.pk</li>
              </ul>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-4">
                See also our{' '}
                <Link href="/shipping" className="text-amber-600 font-bold hover:underline">Shipping, Returns &amp; Warranty</Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-amber-600 font-bold hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
