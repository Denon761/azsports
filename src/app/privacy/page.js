import { ContentRenderer, PageHero } from "../components/SharedLayout";

export const metadata = {
  title: 'Privacy Policy | AZ Sports',
  description: 'How AZ Sports collects, uses, and protects visitor and business information.',
};

const privacyData = [
  {
    content: ["This Privacy Policy explains how AZ Sports – Amjad Zahoor Sports, a family-run handmade carrom board manufacturing company based in Sialkot, Punjab, Pakistan, collects, uses, and protects information provided by visitors and business contacts through this website."]
  },
  {
    title: "Business Information",
    content: ["This website does not operate as a consumer e-commerce store."],
    list: [
      "Business Name: AZ Sports – Amjad Zahoor Sports",
      "Industry: Handmade Carrom Board Manufacturing",
      "Location: Sialkot, Punjab, Pakistan",
      "Nature of Website: Informational and business inquiry–based (manufacturing, export, and bulk orders)"
    ]
  },
  {
    title: "Information We Collect",
    content: [
      "We may collect personal or business information when it is voluntarily provided, including:",
      "We do not intentionally collect sensitive personal data."
    ],
    list: [
      "Name, email address, and phone number (via contact forms, email, or WhatsApp links)",
      "Company name, country, and inquiry details (for export, bulk, or dealership discussions)",
      "Basic technical information such as browser type, device type, and general usage data for website performance analysis"
    ]
  },
  {
    title: "How We Use Information",
    content: [
      "The information collected may be used for the following purposes:",
      "AZ Sports does not sell, rent, or trade personal information to third parties."
    ],
    list: [
      "Responding to inquiries and communication requests",
      "Coordinating manufacturing, export, or bulk order discussions",
      "Providing information related to products and manufacturing capabilities",
      "Improving website content, structure, and user experience",
      "Maintaining internal business and communication records"
    ]
  },
  {
    title: "Cookies & Analytics",
    content: ["This website may use basic cookies or analytics tools to understand visitor behavior and improve website performance. These tools do not personally identify users. Visitors may disable cookies through their browser settings if they choose."]
  },
  {
    title: "Data Retention, Protection & Security",
    content: [
      "Personal information is retained only for as long as necessary to fulfill communication, inquiry, or business coordination purposes, or as required by applicable laws.",
      "AZ Sports takes reasonable administrative and technical measures to protect personal information from unauthorized access, misuse, or disclosure. Access to collected information is limited strictly to legitimate business purposes."
    ]
  },
  {
    title: "Children's Information & Third-Party Links",
    content: [
      "This website and its services are intended for general informational and business purposes. AZ Sports does not knowingly collect personal information from children under the age of 13.",
      "This website may contain links to third-party websites or platforms. AZ Sports is not responsible for the privacy practices, content, or policies of external websites."
    ]
  },
  {
    title: "User Rights & Governing Jurisdiction",
    content: [
      "Users may request access to, correction of, or deletion of their personal information by contacting AZ Sports through the website's official communication channels.",
      "This Privacy Policy is governed by the applicable laws of Pakistan. AZ Sports reserves the right to update this Privacy Policy to reflect changes in business practices, legal requirements, or website functionality."
    ]
  },
  {
    title: "Authority Note",
    content: ["This Privacy Policy reflects the standard data handling, privacy protection, and information management practices followed by AZ Sports – Amjad Zahoor Sports, a family-run handmade carrom board manufacturing company based in Sialkot, Pakistan, operating with transparency and consistency across all business communications."],
    note: "Last updated: Feb 2026"
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none translate-x-1/4 translate-y-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500">Policy</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg">
            Learn how we collect, use, and safeguard your data during inquiries.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 space-y-8">
            {privacyData.map((section, index) => (
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
