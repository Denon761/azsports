export const metadata = {
  title: 'Cookie Policy - AZSports',
  description: 'AZSports Cookie Policy',
};

import { Cookie, Shield, Settings } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none translate-x-1/4 translate-y-1/4"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Cookie className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight font-heading">
            Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-500">Policy</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg">Understanding how we use cookies</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 mb-8 shadow-sm">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-lg md:text-2xl font-black text-gray-900 mt-8 mb-4">What Are Cookies?</h2>
            <p className="text-gray-600 text-xs md:text-base leading-relaxed mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>

            <h2 className="text-lg md:text-2xl font-black text-gray-900 mt-8 mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 text-xs md:text-base leading-relaxed mb-6">
              AZSports uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              Here are the types of cookies we use:
            </p>

            <div className="space-y-6">
              {/* Essential Cookies */}
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-500" />
                  <h3 className="text-lg font-bold text-gray-900">Essential Cookies</h3>
                </div>
                <p className="text-gray-600 text-xs">
                  These cookies are necessary for the website to function properly. They enable basic features like 
                  page navigation, secure areas access, and remembering items in your shopping cart. The website 
                  cannot function without these cookies.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="w-6 h-6 text-blue-500" />
                  <h3 className="text-lg font-bold text-gray-900">Analytics Cookies</h3>
                </div>
                <p className="text-gray-600 text-xs">
                  These cookies help us understand how visitors interact with our website by collecting and reporting 
                  information anonymously. This helps us improve the site structure and content.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Cookie className="w-6 h-6 text-purple-500" />
                  <h3 className="text-lg font-bold text-gray-900">Marketing Cookies</h3>
                </div>
                <p className="text-gray-600 text-xs">
                  These cookies are used to track visitors across websites. The intention is to display ads that 
                  are relevant and engaging for the individual user.
                </p>
              </div>
            </div>

            <h2 className="text-lg md:text-2xl font-black text-gray-900 mt-8 mb-4">Managing Your Cookies</h2>
            <p className="text-gray-600 text-xs md:text-base leading-relaxed mb-6">
              You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences 
              in various ways:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-xs md:text-base space-y-2 ml-4 mb-6">
              <li>Browser Settings: Most web browsers allow you to control cookies through their settings</li>
              <li>Cookie Consent Banner: You can change your preferences using our cookie consent tool</li>
              <li>Third-Party Tools: You can opt out of specific third-party cookies</li>
            </ul>

            <h2 className="text-lg md:text-2xl font-black text-gray-900 mt-8 mb-4">Specific Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 font-bold text-gray-900">Cookie Name</th>
                    <th className="py-3 font-bold text-gray-900">Purpose</th>
                    <th className="py-3 font-bold text-gray-900">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-200">
                    <td className="py-3">session_id</td>
                    <td className="py-3">Maintain your session</td>
                    <td className="py-3">Session</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">cart_items</td>
                    <td className="py-3">Remember shopping cart</td>
                    <td className="py-3">30 days</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">_ga</td>
                    <td className="py-3">Google Analytics</td>
                    <td className="py-3">2 years</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">_gid</td>
                    <td className="py-3">Google Analytics</td>
                    <td className="py-3">24 hours</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-lg md:text-2xl font-black text-gray-900 mt-8 mb-4">Updates to This Policy</h2>
            <p className="text-gray-600 text-xs md:text-base leading-relaxed mb-6">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, 
              legal, or regulatory reasons. We will post any changes on this page and update the "Last updated" date.
            </p>

            <h2 className="text-lg md:text-2xl font-black text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <ul className="list-none text-gray-600 text-sm md:text-base">
              <li>Email: privacy@azsports.com</li>
              <li>Address: 123 High Street, London, United Kingdom</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
