export const metadata = {
  title: 'Privacy Policy | AZ Sports',
  description: 'How AZ Sports collects, uses, and protects visitor and business information.',
};

const privacyData = [
  {
    content: ["This Privacy Policy explains how AZ Sports, a family-run handmade carrom board manufacturing company based in Sialkot, Punjab, Pakistan, collects, uses, and protects information provided by visitors and business contacts through this website."]
  },
  {
    title: "Business Information",
    content: ["This website does not operate as a consumer e-commerce store."],
    list: [
      "Business Name: AZ Sports",
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
      "Name, email address, and phone number (via contact forms or email)",
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
    content: ["This Privacy Policy reflects the standard data handling, privacy protection, and information management practices followed by AZ Sports, a family-run handmade carrom board manufacturing company based in Sialkot, Pakistan, operating with transparency and consistency across all business communications."],
    note: "Last updated: Feb 2026"
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        <div>
          <h1 className="text-lg font-black text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600 text-xs mt-1">
            Learn how we collect, use, and safeguard your data during inquiries.
          </p>
        </div>

        {privacyData.map((section, index) => (
          <div key={index}>
            {section.title && (
              <h2 className="text-sm font-black text-gray-900 mb-2">
                {section.title}
              </h2>
            )}

            {section.content && section.content.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-gray-600 text-xs leading-relaxed mt-2">
                {paragraph}
              </p>
            ))}

            {section.list && section.list.length > 0 && (
              <ul className="list-disc pl-5 text-gray-600 text-xs leading-relaxed space-y-1 mt-2">
                {section.list.map((item, lIdx) => (
                  <li key={lIdx}>{item}</li>
                ))}
              </ul>
            )}

            {section.note && (
              <p className="text-xs text-gray-500 italic mt-2">{section.note}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
