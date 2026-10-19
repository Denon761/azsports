export const metadata = {
  title: 'Cookie Policy | AZ Sports',
  description: 'How AZ Sports uses cookies on this website.',
};

import { Shield, Settings, Cookie as CookieIcon } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        <div>
          <h1 className="text-lg font-black text-gray-900">Cookie Policy</h1>
          <p className="text-gray-600 text-xs mt-1">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">What Are Cookies?</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            Cookies are small text files that are placed on your computer or mobile device when you visit a website.
            They are widely used to make websites work more efficiently and provide information to website owners.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">How We Use Cookies</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            AZ Sports uses cookies to enhance your browsing experience, analyze site traffic, and personalize content.
            Here are the types of cookies we use:
          </p>

          <div className="space-y-3 mt-3">
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="w-4 h-4 text-green-500" />
                <h3 className="text-xs font-bold text-gray-900">Essential Cookies</h3>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                These cookies are necessary for the website to function properly. They enable basic features like
                page navigation, secure areas access, and remembering items in your shopping cart. The website
                cannot function without these cookies.
              </p>
            </div>

            <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
              <div className="flex items-center gap-2 mb-1">
                <Settings className="w-4 h-4 text-blue-500" />
                <h3 className="text-xs font-bold text-gray-900">Analytics Cookies</h3>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                These cookies help us understand how visitors interact with our website by collecting and reporting
                information anonymously. This helps us improve the site structure and content.
              </p>
            </div>

            <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
              <div className="flex items-center gap-2 mb-1">
                <CookieIcon className="w-4 h-4 text-purple-500" />
                <h3 className="text-xs font-bold text-gray-900">Marketing Cookies</h3>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                These cookies are used to track visitors across websites. The intention is to display ads that
                are relevant and engaging for the individual user.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Managing Your Cookies</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            You have the right to decide whether to accept or reject cookies. You can manage your cookie preferences
            in various ways:
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-xs leading-relaxed space-y-1 mt-2">
            <li>Browser Settings: Most web browsers allow you to control cookies through their settings</li>
            <li>Cookie Consent Banner: You can change your preferences using our cookie consent tool</li>
            <li>Third-Party Tools: You can opt out of specific third-party cookies</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Specific Cookies We Use</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 font-bold text-gray-900">Cookie Name</th>
                  <th className="py-2 font-bold text-gray-900">Purpose</th>
                  <th className="py-2 font-bold text-gray-900">Duration</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-200">
                  <td className="py-2">session_id</td>
                  <td className="py-2">Maintain your session</td>
                  <td className="py-2">Session</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">cart_items</td>
                  <td className="py-2">Remember shopping cart</td>
                  <td className="py-2">30 days</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">_ga</td>
                  <td className="py-2">Google Analytics</td>
                  <td className="py-2">2 years</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">_gid</td>
                  <td className="py-2">Google Analytics</td>
                  <td className="py-2">24 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Updates to This Policy</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for operational,
            legal, or regulatory reasons. We will post any changes on this page and update the "Last updated" date.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black text-gray-900 mb-2">Contact Us</h2>
          <p className="text-gray-600 text-xs leading-relaxed">
            If you have any questions about our use of cookies, please contact us:
          </p>
          <ul className="list-disc pl-5 text-gray-600 text-xs leading-relaxed space-y-1 mt-2">
            <li>Email: info@azsports.pk</li>
            <li>Address: Hakeem Ashraf Road, Opposite Janazagah, Rangpura , Sialkot Punjab</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
