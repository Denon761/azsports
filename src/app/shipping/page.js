import { ContentRenderer, PageHero } from "../components/SharedLayout";

export const metadata = {
  title: 'Shipping Policy | AZ Sports',
  description: 'Domestic delivery procedures and international export coordination guidelines.',
};

const shippingData = [
  {
    title: "Shipping Overview",
    content: [
      "AZ Sports manufactures handmade carrom boards at its in-house facility in Sialkot, Pakistan. Shipping is arranged after order confirmation and coordination with the buyer regarding destination, quantity, packaging requirements, and preferred delivery method.",
      "This policy applies to domestic shipments within Pakistan and international export orders."
    ]
  },
  {
    title: "Order Processing & Dispatch",
    content: ["Final dispatch timelines are confirmed during order coordination."],
    list: [
      "Carrom boards are prepared and dispatched after order confirmation.",
      "Orders may be produced on a made-to-order or bulk basis.",
      "Production and dispatch timelines vary depending on board specifications, order volume, and manufacturing schedules."
    ]
  },
  {
    title: "Domestic Shipping (Pakistan)",
    content: ["For orders within Pakistan:", "AZ Sports does not guarantee fixed delivery times, as transit is managed by independent service providers."],
    list: [
      "Shipping is coordinated through third-party courier or logistics providers.",
      "Delivery timelines depend on destination and carrier availability.",
      "Buyers are informed once orders are dispatched."
    ]
  },
  {
    title: "International Shipping",
    content: ["For export and international orders:", "Unless otherwise agreed in writing, customs clearance, import duties, taxes, and destination regulations are the responsibility of the buyer."],
    list: [
      "Shipping is arranged in coordination with the buyer or the buyer's nominated freight forwarder.",
      "Orders may be shipped via sea freight, air freight, or land transport depending on destination and order size.",
      "Export documentation and packaging are prepared according to shipment requirements."
    ]
  },
  {
    title: "Shipping Terms, Packages & Handling",
    content: [
      "Where applicable, international shipments may be coordinated under commonly used trade terms (such as EXW, FOB, or CFR), as mutually agreed during order confirmation.",
      "Carrom boards are prepared with protective handling and packaging considerations to help maintain surface integrity, frame alignment, and finish during transportation."
    ]
  },
  {
    title: "Damages, Loss & Transit Issues",
    content: ["Buyers are advised to:", "Transit-related claims are subject to carrier policies and procedures. Responsibility for goods transfers to the buyer once the shipment is handed over to the carrier, subject to agreed shipping terms."],
    list: [
      "Inspect shipments upon receipt",
      "Report visible damage or discrepancies to the carrier immediately",
      "Inform AZ Sports promptly with relevant details and documentation"
    ]
  },
  {
    title: "Authority Note",
    content: ["This Shipping Policy reflects the standard shipping, handling, and delivery coordination practices followed by AZ Sports – Amjad Zahoor Sports ensuring consistency and transparency across domestic and international shipments."],
    note: "Last updated: March 2026"
  }
];

export default function ShippingPolicyPage() {
  return (
    <div className="bg-black min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none translate-x-1/4 translate-y-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Shipping <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500">Policy</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            Details on domestic shipping within Pakistan and worldwide export handling.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 space-y-8">
            {shippingData.map((section, index) => (
              <div key={index} className="space-y-4">
                {section.title && (
                  <h2 className="text-xl md:text-2xl font-black text-white border-b border-zinc-800 pb-2">
                    {section.title}
                  </h2>
                )}
                
                {section.content && section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {section.list && section.list.length > 0 && (
                  <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-zinc-400 mt-4">
                    {section.list.map((item, lIdx) => (
                      <li key={lIdx}>{item}</li>
                    ))}
                  </ul>
                )}
                
                {section.note && (
                  <p className="text-xs text-zinc-500 italic mt-2">{section.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
